import Navbar from "./components/Navbar/Navbar";
import Companies from "./components/Companies/Companies";
import RecentWorks from "./components/RecentWork/RecentWorks";
import HowItWorks from "./components/HowitWorks/HowItWorks";
import Sisyphus from "./components/Sisyphus/Sisyphus";
import Prices from "./components/Prices/Prices";
import Fqa from "./components/FQA/Fqa";
import ContactUs from "./components/ContactUS/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Companies />
      <RecentWorks />
      <HowItWorks />
      <Sisyphus />
      <Prices />
      <Fqa />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
