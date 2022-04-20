import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { makeImagePath } from 'utils';
import { MovieProps } from 'api';

const MovieBox = styled(motion.a)`
  width: ${(props) => props.theme.movieSize};
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  &:first-child {
    transform-origin: 0%;
  }
  &:last-child {
    transform-origin: 100%;
  }
  .movie__title {
    position: absolute;
    bottom: 1em;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    padding: 1em;
  }
`;

const MovieScaleBox = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.boxColor};
  position: relative;
  padding-bottom: 56.25%;
`;

const ImgBox = styled.img`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

interface IMovieProps extends MovieProps {
  movieIndex: number;
  movieOnClick(event: React.MouseEvent<HTMLAnchorElement>, id: number): void;
}

const Movie = ({
  id,
  title,
  overview,
  backdrop_path,
  movieIndex,
  movieOnClick,
}: IMovieProps) => {
  const movieHoverAni = useAnimation();

  const hoverMovie = (isHover: boolean) => {
    if (isHover) {
      movieHoverAni.start({
        scale: 1.2,
        zIndex: 1,
        transition: { delay: 0.2 },
      });
    } else {
      movieHoverAni.start({
        scale: 1,
        zIndex: 0,
        transition: { delay: 0.2 },
      });
    }
  };

  return (
    <MovieBox
      key={id}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5 + 0.1 * movieIndex },
      }}
      onClick={(event) => movieOnClick(event, id)}
    >
      <MovieScaleBox
        animate={movieHoverAni}
        onHoverStart={() => hoverMovie(true)}
        onHoverEnd={() => hoverMovie(false)}
        onTapStart={() => hoverMovie(false)}
      >
        <ImgBox src={makeImagePath(backdrop_path, 'w780')} />
        <div className="movie__title">{title}</div>
      </MovieScaleBox>
    </MovieBox>
  );
};

export default Movie;
