import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/cake/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <HooksIceCreamContainer></HooksIceCreamContainer>
      </div>
    </Provider>
  );
}

export default App;
