import { FaShippingFast, FaHistory, FaCreditCard, FaHeadset } from 'react-icons/fa';

export default function BestsellerSection() {
  return (
    <section className="bestseller-product" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="h3">
            You Are Shopping <span style={{ color: '#000000' }}>For An Experience</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="single-shipping">
              <div className="shipping-icon">
                <FaShippingFast size={40} />
              </div>
              <div className="block-wrapper">
                <div className="shipping-content">
                  <h5>FREE DELIVERY</h5>
                  <p>When ordering from Rs. 500.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="single-shipping">
              <div className="shipping-icon">
                <FaHistory size={40} />
              </div>
              <div className="block-wrapper">
                <div className="shipping-content">
                  <h5>Money Guarantee</h5>
                  <p>Within 7 days for an exchange.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="single-shipping">
              <div className="shipping-icon">
                <FaCreditCard size={40} />
              </div>
              <div className="block-wrapper">
                <div className="shipping-content">
                  <h5>SECURE PAYMENT</h5>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <div className="single-shipping">
              <div className="shipping-icon">
                <FaHeadset size={40} />
              </div>
              <div className="block-wrapper">
                <div className="shipping-content">
                  <h5>24/7 SUPPORT</h5>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
