import Home from 'routes/Home';
import TvShow from 'routes/TvShow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/tv" element={<TvShow />} />
        {/* <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route> */}
        {/* <Route path="/*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
