import { getMovieDetail, MovieProps } from 'api';
import { isModalIdAtom } from 'atoms';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { makeImagePath } from 'utils';
import Loader from './Loader';
import { motion, useAnimation } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
`;
const ModalBox = styled(motion.div)`
  background: ${(props) => props.theme.bgColor};
  box-shadow: 0px 0px 1px rgba(186, 186, 186, 0.2);
  border-radius: 20px;
  overflow: hidden;
  position: fixed;
  left: 50%;
  top: 1em;
  transform: translateX(-50%);
  z-index: 30;
  max-width: 569px;
  width: 100%;
  min-height: 700px;
  padding-bottom: 2em;
  .movie-txt-container {
    padding: 2em 1em;
    .movie__title {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 0.75em;
    }
    .movie__description {
      padding-left: 0.25em;
      line-height: 1.5;
    }
  }
`;

const BtnClose = styled(motion.a)`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 31;
  cursor: pointer;
  background: #000;
  padding: 5px;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #fff;
    }
  }
`;

const BgBox = styled.div<{ bg: string }>`
  padding-bottom: 56.25%;
  position: relative;
  background-image: ${(props) => `url(${makeImagePath(props.bg, 'w1280')})`};
  background-size: cover;
  background-position: center;
`;

interface IModalProps {
  id: string;
}

const Modal = ({ id }: IModalProps) => {
  const navigate = useNavigate();
  const setIsModalId = useSetRecoilState(isModalIdAtom);

  const modalHide = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalId('');
  };

  const { isLoading: detailLoading, data: movieDetailData } =
    useQuery<MovieProps>(['movieDetail', id], () => getMovieDetail(id));

  return (
    <>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, transition: { delay: 0.2 } }}
      />
      <ModalBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, transition: { delay: 0.2 } }}
      >
        <BtnClose
          className="btn-close"
          onClick={modalHide}
          exit={{ scale: [0.8, 1], transition: { duration: 0.2 } }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </BtnClose>
        {detailLoading ? (
          <Loader />
        ) : (
          <>
            <BgBox bg={movieDetailData?.backdrop_path || ''} />
            <div className="movie-txt-container">
              <div className="movie__title">{movieDetailData?.title}</div>
              <div className="movie__description">
                {movieDetailData?.overview}
              </div>
            </div>
          </>
        )}
      </ModalBox>
    </>
  );
};

export default Modal;
