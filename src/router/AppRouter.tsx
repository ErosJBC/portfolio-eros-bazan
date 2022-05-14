import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

const AppRouter: FunctionComponent<{}> = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
