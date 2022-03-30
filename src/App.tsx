import { BrowserRouter } from 'react-router-dom';
import RootRouter from './routes';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import './App.css'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
