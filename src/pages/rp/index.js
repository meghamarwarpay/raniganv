// pages/refund-policy.js

import Header from "@/Layout/Header";

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "40px" }}>
        <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-dark-600">Refund Policy</h1>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-dark-500 mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Ranigaon Infotech Private Limited, we are committed to providing a smooth and satisfactory experience for our customers. Our Refund Policy outlines the procedures for refunds and returns concerning our seed and soil products.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-dark-500 mb-4">Eligibility for Refunds</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You are eligible for a refund if:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>The seeds or soil are defective or damaged upon receipt.</li>
              <li>The seeds or soil do not match the description provided on the website.</li>
              <li>The delivery of the seeds or soil is significantly delayed (more than 7 days beyond the expected delivery time).</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-dark-500 mb-4">How to Request a Refund</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To request a refund, please contact our customer support team within 30 days of receiving your order. You can reach out via the contact information provided on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-dark-500 mb-4">Refund Processing Time</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once your refund request is approved, it may take up to 7-10 business days to process and receive the refund. The actual time frame will depend on your payment method.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-dark-500 mb-4">Exceptions to the Refund Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Refunds may not be provided in cases where:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Seeds or soil are returned without all original packaging and accessories.</li>
              <li>Seeds or soil are damaged due to improper handling or storage by the customer.</li>
              <li>Perishable seeds or soil items are opened or exposed to unsuitable conditions after delivery.</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
