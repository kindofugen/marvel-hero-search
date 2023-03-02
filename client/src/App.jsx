import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from './routes/routesConfig';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
