import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './RoutesApp';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
