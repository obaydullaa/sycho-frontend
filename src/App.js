import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './sections/Slider';
import Features from './sections/Features';
import About from './sections/About';
import Service from './components/Service';
import Dr from './sections/Dr';
import Appointment from './sections/Appointment';
import Client from './sections/Client';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Portfolio from './sections/Portfolio';


function App() {
  return (
      <>
        <Header />
        <Slider />
        <Features />
        <About />
        <Service />
        <Dr />
        <Appointment />
        <Portfolio />
        <Client />
        <Pricing />
        <Contact />
        <Testimonials />
        <Blog />
        <Footer />
      </>
  );
}

export default App;
