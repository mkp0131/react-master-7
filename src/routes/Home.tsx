import { getMovieNowPlaying } from 'api';
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
`;

const Home = () => {
  const { isLoading: isLoading, data: movieNowData } = useQuery(
    'movieNowPlaying',
    () => getMovieNowPlaying()
  );

  return (
    <>
      <Banner isLoading={isLoading} data={movieNowData} />
      <MainContents>
        {isLoading ? null : <Slider {...movieNowData} />}
      </MainContents>
      <ModalContainer />
    </>
  );
};

export default Home;
