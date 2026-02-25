import TechVisionHero from '../Components/TechVisionHero';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeroCarousel from '../Components/HeroCarousel';
import Admission from '../Components/Admission';
import PrincipalMessage from '../Components/PrincipalMessage';

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroCarousel/>
      <TechVisionHero/>
      <Admission/>
      <PrincipalMessage/>
      <Footer/>
    </div>
  );
}
