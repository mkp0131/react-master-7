import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

import { MovieProps, MoviesData } from 'api';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useNavigate } from 'react-router-dom';
import { isModalIdAtom } from 'atoms';
import Movie from './Movie';

const SliderBox = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  padding: 2em 0;
  /* overflow-y: visible; */
`;

const SliderRow = styled(motion.div)<{ dataLength: number }>`
  width: ${(props) =>
    `calc((${props.theme.movieSize} + 10px) * ${props.dataLength} + 10px)`};
  display: flex;
  gap: 10px;
  padding: 0 10px;
  flex-wrap: nowrap;
`;

const Slider = ({ results }: MoviesData) => {
  // const [isHover, setIsHover] = useState(false);

  const constraintsRef = useRef(null);
  const setIsModal = useSetRecoilState(isModalIdAtom);

  const movieOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: number
  ) => {
    event.preventDefault();
    if (dragging) return;
    setIsModal(id + '');
  };

  let dragging = false;

  return (
    <SliderBox ref={constraintsRef}>
      <SliderRow
        drag="x"
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        dataLength={results.length}
        onDragStart={() => (dragging = true)}
        onDragTransitionEnd={() => (dragging = false)}
      >
        {results.map((movie: MovieProps, movieIndex: number) => {
          return (
            <Movie
              key={movie.id}
              {...movie}
              movieIndex={movieIndex}
              movieOnClick={movieOnClick}
            />
          );
        })}
      </SliderRow>
    </SliderBox>
  );
};

export default React.memo(Slider);
