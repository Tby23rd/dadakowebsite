import Navbar from '@/components/shared/Navbar';
import Head from 'next/head';

const BirdsOfHawaiiSRD=() => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Birds of Hawaii</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Explore the vibrant avian life of Hawaii with our interactive guide. Built using modern web technologies and hosted on Netlify, this website showcases stunning images and detailed data about Hawaii&aposs bird species, sourced directly from the Government of Hawaii.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>jQuery</li>
                                <li>Netlify</li>
                            </ul>
                        </section>

                        {/* Solution Overview */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                            <p className="text-gray-600">The solution overview is:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Provide an interactive guide to the bird species of Hawaii.</li>
                                <li>Showcase stunning images and detailed data about Hawaii&aposs bird species.</li>
                                <li>Host the website on Netlify for accessibility and ease of deployment.</li>
                            </ul>
                        </section>
                    </div>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Visual Guide: Users should be able to visually explore Hawaii&aposs bird species.</li>
                                <li>Detailed Information: Users should have access to detailed data about each bird species.</li>
                                <li>Responsive Design: The website should be responsive and accessible on various devices.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Interactive Interface: Develop an interactive interface for users to explore bird species.</li>
                                <li>Data Integration: Integrate detailed data about bird species into the website.</li>
                                <li>Image Gallery: Create an image gallery showcasing stunning images of Hawaii&aposs bird species.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure fast loading times and smooth user experience.</li>
                                <li>Accessibility: Make the website accessible to users with disabilities.</li>
                                <li>Scalability: Design the website to handle increased traffic and data volume.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BirdsOfHawaiiSRD;
