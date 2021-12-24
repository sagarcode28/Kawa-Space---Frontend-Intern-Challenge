import react from "react";
import styledComponents from "styled-components";
import GlobalStyle from "./CSS/global";
import Navbar from './component/Navbar';
import HeroSection from "./component/herosection";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;

