import React from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;