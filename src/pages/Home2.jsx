import React from 'react'
// import Agocharfeature from '../components/Agocharfeature'
// import Features from '../components/Features'
import Navbar from '../components/Navbar'
// import Slider from '../components/Slider'
import Newsletter from '../Newsletter'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Tape1 from '../components/Tape1'
import Tape2 from '../components/Tape2'
import Industries from '../components/Industries'
// import Beginning from '../components/Beginning'
import Mentors from '../components/Mentors'
import NewSlider from '../components/NewSlider'
// import ExploreBox from '../components/ExploreBox'
// import ExploreBoxes from '../components/ExploreBoxes'
import Products from '../components/Products'
// import AOS from "aos";
// import "aos/dist/aos.css"

// import Projects from '../components/Projects/Projects'



const Home2 = () => {

//   AOS.init({
//     duration:2000
//   })
  return (
    <div>
        
        <Navbar />
        
        
        
        
       <Products />
        
        <Tape1 />
        <Services />
        <Tape2 />
        <Industries />
        <Mentors />
        
        <NewSlider />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home2
