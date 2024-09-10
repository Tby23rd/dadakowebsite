import Navbar from '@/components/shared/Navbar';
import '@/app/globals.css';

const AspireCryptoSRD = () => {
    return (
        <div className="min-h-screen">
                        <Navbar />


            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Aspire Crypto</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                    {/* Business Case */}
                    <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                            <p className="text-gray-600">Elevate your crypto trading with Aspire Crypto. Buy and sell with ease, and leverage our machine learning algorithm for accurate cryptocurrency price predictions.</p>
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>PHP</li>
                            <li>Firebase</li>
                            <li>MySQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </section>

                    {/* Solution Overview */}
                    <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                        <p className="text-gray-600">The solution overview is:</p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Facilitate cryptocurrency trading for users.</li>
                            <li>Provide accurate cryptocurrency price predictions using machine learning.</li>
                            <li>Ensure ease of use and accessibility for traders.</li>
                        </ul>
                    </section>
                    </div>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Trading Platform: Users should be able to buy and sell cryptocurrencies.</li>
                                <li>Price Predictions: Users should have access to accurate cryptocurrency price predictions.</li>
                                <li>User-friendly Interface: The platform should be intuitive and easy to use.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Trading System: Implement a system for users to buy and sell cryptocurrencies.</li>
                                <li>Price Prediction Algorithm: Develop a machine learning algorithm for accurate price predictions.</li>
                                <li>User Authentication: Create user accounts and authentication mechanisms.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure fast response times and system stability.</li>
                                <li>Security: Implement secure data storage and communication protocols.</li>
                                <li>Scalability: Design the platform to handle increasing user activity and data volume.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AspireCryptoSRD;
