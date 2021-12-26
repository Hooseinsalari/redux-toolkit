import './App.css';

import {store} from "./features/store";
import {Provider} from "react-redux";
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Counter />
      </div>
    </Provider>
  );
}

export default App;
