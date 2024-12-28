import Navbar from "@/Layout/Header";
import ImageCarousel from "./Carousel";
import Marquee from "./Marque";
import AllProduct from "../Product/AllProduct";
import About from "./About";
import Contact from "../Page/Contact";
import Testimonials from "./Testimonial";
import CollectionList from "./Collection";
import BestsellerSection from "./Bestseller";


// import Product from "./Product";


function HomeComponent() {
  return (
    <div>
        <Navbar/>
        <ImageCarousel/>
        <CollectionList/>
<AllProduct/>
  <About/> 
  <BestsellerSection/>  
        <Marquee/>
        <Contact/>
        <Testimonials/>
    </div>
  )
}

export default HomeComponent