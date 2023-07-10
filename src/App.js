import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Swiper/Slider';
import Virtual from './components/virtual/Virtual';
import Products from './components/virtual/Products/Products';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
