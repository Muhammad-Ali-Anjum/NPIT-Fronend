import TechVisionHero from '../Components/TechVisionHero';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeroCarousel from '../Components/HeroCarousel';
import Admission from '../Components/Admission';
import PrincipalMessage from '../Components/PrincipalMessage';
import LifeAtNPIT from '../Components/LifeAtNPIT';
import ContactUs from '../Components/ContactUs';


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroCarousel/>
      <TechVisionHero/>
      <Admission/>
      <PrincipalMessage/>
      <LifeAtNPIT/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
