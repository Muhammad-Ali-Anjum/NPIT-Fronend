// import Image from "next/image";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeroCarousel from '../Components/HeroCarousel';
// import HeroCarousle from '../Components/HeroCarousel'
import img  from '../../public/img1.jpeg'

export default function Home() {
  return (
    <div>
      <Header/>
         <HeroCarousel
      // milliseconds
      />
      <Footer/>
    </div>
  );
}
