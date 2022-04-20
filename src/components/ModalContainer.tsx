import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Modal from 'components/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModalIdAtom } from 'atoms';
import { AnimatePresence } from 'framer-motion';

const ModalContainer = () => {
  const isModalId = useRecoilValue(isModalIdAtom);

  return (
    <>
      <AnimatePresence>
        {isModalId ? <Modal id={isModalId + ''} /> : null}
      </AnimatePresence>
    </>
  );
};

export default ModalContainer;
