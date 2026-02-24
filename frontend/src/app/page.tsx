import React from 'react'
import Header from '../Components/Header'
import HeroCoursel from '../Components/HeroCarousel'
// import TrandingCourse from '../Components/TrandingCourse'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import TrandingCourse from '@/Components/TrandingCourse'
import Addmission from '../Components/Addmission'
function page() {
  return (
    <>
    <Header/>
    <HeroCoursel/>
   <TrandingCourse/>
    <Card/>
    <TrandingCourse/>
    <Card/>
    <Addmission/>
    <Footer/>
    </>
  )
}

export default page