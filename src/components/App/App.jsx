import './App.css';
import Shop from '../Shop/Shop';

import { ContextProvider } from '../../context';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Shop />
      </ContextProvider>
    </div>
  );
}

export default App;
