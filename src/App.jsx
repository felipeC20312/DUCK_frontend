import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './RoutesApp';
import i18n from './i18';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
