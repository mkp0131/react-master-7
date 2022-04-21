import Home from 'routes/Home';
import TvShow from 'routes/TvShow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Search from 'routes/Search';
import ModalContainer from 'components/ModalContainer';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        {/* <Route path="/tv" element={<TvShow />} /> */}
        <Route path="/*" element={<Home />} />
      </Routes>
      <ModalContainer />
    </BrowserRouter>
  );
};

export default Router;
