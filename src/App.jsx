import React from 'react';
import Banner from './components/UI/Banner/Banner';
import { Routes, Route } from 'react-router-dom';
import routesConfig from './routes/routesConfig';
import './App.css';

function App() {
  return (
    <>
      <Banner />
      <Routes>
        {routesConfig.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
