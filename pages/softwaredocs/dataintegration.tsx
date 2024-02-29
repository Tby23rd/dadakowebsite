import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const SeamlessDataIntegrationSRD=() => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Seamless Data Integration</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Showcasing the power of real-time data integration, this project bridges Next.js frontend with a Node.js and Express backend, fetching and displaying MongoDB data on dynamic tables.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Next.js</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </section>

                        {/* Solution Overview */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                            <p className="text-gray-600">The solution overview is:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Integrate Next.js frontend with Node.js and Express backend.</li>
                                <li>Fetch and display real-time data from MongoDB.</li>
                                <li>Create dynamic tables to showcase MongoDB data.</li>
                            </ul>
                        </section>
                    </div>

                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Real-time Data Display: Users should see real-time data from MongoDB displayed on the frontend.</li>
                                <li>Dynamic Tables: Users should interact with dynamic tables to view and analyze MongoDB data.</li>
                                <li>Integration: Users should seamlessly navigate between Next.js frontend and Node.js backend.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Data Fetching: Develop mechanisms to fetch data from MongoDB in real-time.</li>
                                <li>Table Generation: Create dynamic tables to display MongoDB data on the frontend.</li>
                                <li>API Integration: Implement APIs to connect Next.js frontend with Node.js and Express backend.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure fast data fetching and rendering for smooth user experience.</li>
                                <li>Security: Implement secure API communication between frontend and backend.</li>
                                <li>Scalability: Design the system to handle increasing data volume and user traffic.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SeamlessDataIntegrationSRD;
