import './styles/App.css';
// import 'styles/global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};
export default App
