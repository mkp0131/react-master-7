import styled from 'styled-components';

interface styleObj {
  [key: string]: string;
}

interface styleProps {
  style?: styleObj;
}

const Loading = styled.div`
  text-align: center;
  padding: 1em 0;
`;

const Loader = ({ style }: styleProps) => {
  return <Loading style={style}>Loading...</Loading>;
};

export default Loader;
