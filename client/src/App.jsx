import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import routesConfig from './routes/routesConfig';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorMessage from './components/ErrorMessage';
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
      <Footer />
    </>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorMessage,
});
