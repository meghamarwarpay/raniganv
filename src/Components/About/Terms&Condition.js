import Header from "@/Layout/Header";

export default function TermsAndConditions() {
    return (
        <>
            <Header />
            <div style={{ marginTop: '40px' }}>
                <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-semibold text-dark-600">Terms and Conditions</h1>
                    </header>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Introduction</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            By using Ranigaon Infotech Private Limited`s website and services, you agree to comply with the following Terms and Conditions. Please read them carefully. Our mission is to provide sustainable solutions related to seed and soil, ensuring growth and development for both nature and business.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Use of the Website</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            You agree to use our website for lawful purposes only, related to sustainable agricultural practices, seed development, and soil management. You will not engage in activities that may damage, disable, or impair the website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Account Responsibility</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities related to soil health and seed transactions that occur under your account.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Payment and Orders</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            You agree to provide accurate payment information for purchases related to seed and soil products and accept responsibility for any orders placed through your account. We reserve the right to cancel any orders if necessary, especially those that do not align with sustainable practices.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Limitation of Liability</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services, especially those related to agricultural outcomes, seed growth, or soil quality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Changes to Terms</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We reserve the right to update or change these Terms and Conditions at any time. Any changes will be effective upon posting on this page. These changes may reflect new innovations in seed technology or soil management practices.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
