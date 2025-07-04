import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './components/Counter';

const App = () => {
  return(
    <div>
      <Counter />
    </div>
  )
}

export default App;