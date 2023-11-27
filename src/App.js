import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer';
import{ Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
    <Header />
    <Outlet />
    {/* <Body/> */}
    <Footer />
    </Provider>
    </>
  );
}

export default App;
