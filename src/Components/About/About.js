// pages/about.js

import Image from "next/image";
import img from '../../assets/pinkcityimg/productsmarque/about.jpg'

export default function About() {
  return (
    <>
    <div className="container py-5">
    <div className="row align-items-center">
            {/* Left Column (Image) */}
            <div className="col-md-6">
              <div className="image-container mb-4 mb-md-0">
                <Image
                  src={img}
                  alt="About Us"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
    
            {/* Right Column (Content) */}
            <div className="col-md-6">
              <h1 className="text-green mb-3">About Our Seed & Soil Initiative</h1>
              <p className="text-muted ">
                At Seed & Soil Initiative, we are dedicated to nurturing the roots of sustainable agriculture and healthy ecosystems. By empowering farmers and gardeners with high-quality seeds and soil solutions, we aim to cultivate a future where the land flourishes and communities thrive. 
              </p>
    
    
              <div className="mission mb-4">
                <h3 className="text-dark">Our Mission</h3>
                <p className="text-muted">
                  We are on a mission to provide premium seeds and soil solutions that enhance productivity and promote sustainability. By supporting agricultural communities, we aim to ensure food security, restore ecosystems, and inspire future generations to value the land.
                </p>
              </div>
    
            </div>
          </div>
    <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
    
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-green-600"></h1>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Seed & Soil Initiative, our vision is to ensure every field and garden thrives. We focus on enriching the soil with essential nutrients and providing seeds that promise bountiful harvests while maintaining ecological harmony.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-center">
            <span className="mr-2 text-green-600">✔</span> <strong>Premium Seeds:</strong> Carefully selected for optimal growth and resilience.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-600">✔</span> <strong>Soil Solutions:</strong> Enhancing soil health for sustainable productivity.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-600">✔</span> <strong>Research-driven:</strong> Backed by cutting-edge agricultural science.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-600">✔</span> <strong>Community Support:</strong> Empowering farmers and gardeners worldwide.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Seed & Soil Initiative began with a passion for nurturing life from the ground up. From small farms to expansive fields, our journey is rooted in a deep commitment to transforming agriculture through innovation and sustainability.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Our Commitment</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are dedicated to empowering communities by providing tools and resources to foster sustainable growth. Our commitment extends beyond products to creating meaningful change for farmers, gardeners, and the environment.
        </p>
      </section>
      
    </div>
    </div></>
  );
}
