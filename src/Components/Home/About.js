import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import img from '../../assets/pinkcityimg/productsmarque/about.jpg';

export default function About() {
  return (
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
          <h1 className="text-success mb-3">About Ranigaon Infotech Private Limited</h1>
          <p className="text-muted">
            At Ranigaon Infotech Private Limited, we specialize in empowering farmers and agricultural enthusiasts through innovative solutions that bridge the gap between technology and nature. Our platform focuses on providing high-quality seeds, soil enrichment products, and advanced agricultural tools to revolutionize farming practices.
          </p>
        </div>

        <div className="vision mb-4">
          <h3 className="text-dark">Our Vision</h3>
          <p className="text-muted">
            Our vision is to cultivate a future where technology and agriculture harmoniously coexist, ensuring sustainable farming practices and a prosperous future for farmers and communities worldwide.
          </p>
        </div>

        <div className="mission mb-4">
          <h3 className="text-dark">Our Mission</h3>
          <p className="text-muted">
            We are committed to enhancing agricultural productivity by delivering high-quality products and innovative solutions. Our mission is to empower farmers with tools, knowledge, and resources that promote sustainable farming, improve yields, and ensure food security for future generations.
          </p>
        </div>

        <div className="why-choose-us">
          <h3 className="text-dark mb-3">Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-check-circle text-success"></i> Premium Quality Seeds and Soil Enrichment Products
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-success"></i> Advanced Agricultural Tools and Technologies
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-success"></i> Commitment to Sustainable and Eco-Friendly Practices
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-success"></i> Expert Guidance and Training for Farmers
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-success"></i> Reliable Delivery and Exceptional Customer Support
            </li>
            <li>
              <i className="bi bi-check-circle text-success"></i> Exclusive Offers for Partnered Agricultural Communities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
