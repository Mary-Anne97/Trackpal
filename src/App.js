// import logo from './logo.svg';
import './App.css';
import Blog from './components/blog/Blog';
import Explore from './components/explore/Explore';
import FooterBanner from './components/footer-banner/FooterBanner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Shopping from './components/shopping/Shopping';
import Team from './components/team/Team';
import Why from './components/why/Why';

function App() {
  return (
    <>
      <div className="App p-5">
        <Header />
        <Hero />
        <Explore />
        <Why />
        <Blog />
        <Shopping />
        <Team />
      </div>
      <div className="py-2">
        <FooterBanner />
        <Footer />
      </div>
    </>
  );
}

export default App;
