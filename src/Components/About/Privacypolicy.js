import Header from "@/Layout/Header";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div style={{ marginTop: '40px' }}>
                <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-semibold text-dark-600">Privacy Policy</h1>
                    </header>
        
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Introduction</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Ranigaon Infotech Private Limited, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services related to seed and soil.
                        </p>
                    </section>
        
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Information We Collect</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Personal information like name, email, and contact details.</li>
                            <li>Usage data such as pages visited, duration of visit, and browsing behavior related to seed and soil products.</li>
                            <li>Payment details for processing your transactions related to seed and soil purchases.</li>
                        </ul>
                    </section>
        
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">How We Use Your Information</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The information we collect helps us:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-gray-700">
                            <li>Process and manage your seed and soil orders.</li>
                            <li>Improve our website and services related to seed and soil products.</li>
                            <li>Communicate with you regarding updates or promotions on our seed and soil offerings.</li>
                            <li>Ensure security and fraud prevention related to transactions involving seed and soil purchases.</li>
                        </ul>
                    </section>
        
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Data Protection</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We take the security of your personal information seriously. We use appropriate security measures to protect your data from unauthorized access or disclosure related to our seed and soil products.
                        </p>
                    </section>
        
                    <section>
                        <h2 className="text-3xl font-semibold text-dark-500 mb-4">Changes to This Policy</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Please review this page periodically for the latest information on how we handle your data related to seed and soil services.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
