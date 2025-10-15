
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CommunityBand from "./components/CommunityBand";
import CTABand from "./components/Ctaband";
import Spot from "./components/spot";
import Footer from "./components/Footer";
import Trainband from "./components/trainband";   
export default function Home() {
  return(
    <div>
      <Navbar />
      <Trainband />
      <Hero />
      <CommunityBand />
      <CTABand />
      <Spot />
      <Footer />
    </div>
  ); 
  
}
