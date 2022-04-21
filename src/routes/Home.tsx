import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRate,
  getMovieUpcoming,
} from 'api';
import Banner from 'components/Banner';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Slider from 'components/Slider';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ModalContainer from 'components/ModalContainer';

const MainContents = styled.div`
  margin-top: -10vw;
  margin-bottom: 5vh;
`;

const Home = () => {
  const { isLoading: isNowLoading, data: movieNowData } = useQuery(
    ['movie', 'NowPlaying'],
    () => getMovieNowPlaying()
  );

  const { isLoading: isPopularLoading, data: moviePopularData } = useQuery(
    ['movie', 'Popular'],
    () => getMoviePopular()
  );

  const { isLoading: isUpcomingLoading, data: movieUpcomingData } = useQuery(
    ['movie', 'Upcoming'],
    () => getMovieUpcoming()
  );

  const { isLoading: isTopRateLoading, data: movieTopRateData } = useQuery(
    ['movie', 'TopRate'],
    () => getMovieTopRate()
  );

  return (
    <>
      <Banner isLoading={isNowLoading} data={movieNowData} />
      <MainContents>
        {isNowLoading ? null : (
          <Slider {...movieNowData} title={'현재 상영작'} />
        )}
        {isUpcomingLoading ? null : (
          <Slider {...movieUpcomingData} title={'상영 예정작'} />
        )}
        {isPopularLoading ? null : (
          <Slider {...moviePopularData} title={'인기 영화'} />
        )}
        {isTopRateLoading ? null : (
          <Slider {...movieTopRateData} title={'최고 평점 영화'} />
        )}
      </MainContents>
    </>
  );
};

export default Home;
