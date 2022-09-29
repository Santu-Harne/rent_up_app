import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './components/responsive.css'
import Navbar from './components/Common/Navbar';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';
import Pnf from './components/Common/Pnf';
import ScrollUp from './components/Common/ScrollUp';
import ContactUs from './components/Common/ContactUs';
import Footer from './components/Common/Footer';

function App() {
  return (
    <div className='App responsive'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/services'} element={<Services />} />
          <Route path={'/blog'} element={<Blog />} />
          <Route path={'/pricing'} element={<Pricing />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/*'} element={<Pnf />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
