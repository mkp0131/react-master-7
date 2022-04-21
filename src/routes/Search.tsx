import { getMovieSearch, MovieProps } from 'api';
import { isModalIdAtom } from 'atoms';
import Loader from 'components/Loader';
import ModalContainer from 'components/ModalContainer';
import Movie from 'components/Movie';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding-top: 80px;
  padding-left: 2em;
  padding-right: 2em;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Search = () => {
  const { search } = useLocation();

  const keyword = new URLSearchParams(search).get('k');

  const navigate = useNavigate();

  const setIsModal = useSetRecoilState(isModalIdAtom);

  // 키워드가 없다면 홈화면으로 리다이렉트
  if (!keyword) {
    navigate('/', { replace: true });
  }

  const { isLoading: isMovieLoading, data: movieSearchData } = useQuery(
    [keyword, 'Search'],
    () => getMovieSearch(keyword + '')
  );

  const movieOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: number
  ) => {
    event.preventDefault();
    setIsModal(id + '');
  };

  return (
    <>
      <SearchContainer>
        {isMovieLoading ? (
          <Loader
            style={{
              gridColumn: '1 / 5',
              textAlign: 'center',
              fontSize: '1.75rem',
              paddingTop: '3em',
            }}
          />
        ) : movieSearchData.total_results > 0 ? (
          movieSearchData.results.map(
            (movie: MovieProps, movieIndex: number) => {
              return (
                <Movie
                  key={movie.id}
                  {...movie}
                  movieIndex={movieIndex}
                  movieOnClick={movieOnClick}
                />
              );
            }
          )
        ) : (
          <div
            style={{
              gridColumn: '1 / 5',
              textAlign: 'center',
              fontSize: '1.75rem',
              paddingTop: '3em',
            }}
          >
            데이터가 없습니다.
          </div>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
