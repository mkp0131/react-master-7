import styled from 'styled-components';
import Loader from 'components/Loader';
import { makeImagePath } from 'utils';
import { motion } from 'framer-motion';
import React from 'react';

const BannerBox = styled(motion.div)`
  position: relative;
  .txt-container {
    position: absolute;
    left: 2%;
    bottom: 30%;
    .txt__title {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1em;
    }
    .txt__description {
      line-height: 1.5;
      max-width: 569px;
      word-break: keep-all;
    }
  }
`;

const BannerContainer = styled.div``;

const BannerImg = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

interface BannerProps {
  isLoading: boolean;
  data: {
    results: [
      {
        title: string;
        overview: string;
        backdrop_path: string;
      }
    ];
  };
}

const Banner = ({ isLoading, data }: BannerProps) => {
  const dataLength: number = data?.results.length || 0;
  const dataRandomIndex = Math.floor(Math.random() * dataLength);

  return (
    <BannerContainer>
      {isLoading ? (
        <Loader
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <BannerBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <BannerImg>
            <div className="cover"></div>
            <img
              src={makeImagePath(data.results[dataRandomIndex].backdrop_path)}
            />
          </BannerImg>
          {data ? (
            <div className="txt-container">
              <div className="txt__title">
                {data.results[dataRandomIndex].title}
              </div>
              <div className="txt__description">
                {data.results[dataRandomIndex].overview}
              </div>
            </div>
          ) : null}
        </BannerBox>
      )}
    </BannerContainer>
  );
};

export default React.memo(Banner);
