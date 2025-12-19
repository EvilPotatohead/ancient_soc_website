import './styles/App.css';
// import 'styles/global.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './routes/HomePage'
import EventsPage from './routes/EventsPage';
import AboutPage from './routes/AboutPage';
import ResourcesPage from './routes/ResourcesPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter >
      <div className="App">
        <NavBar />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App
