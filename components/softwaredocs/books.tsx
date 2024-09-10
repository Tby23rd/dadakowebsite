import '@/app/globals.css';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const DiscoverBooksSRD=() => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="">
                <div className=" ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Discover Books</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Find your next read with our personalized book recommendation platform. Explore book cards for detailed information, reviews, and ratings, curated to match your reading preferences.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Docker</li>
                                <li>.NET</li>
                                <li>React</li>
                                <li>MySQL</li>
                            </ul>
                        </section>

                        {/* Solution Overview */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                            <p className="text-gray-600">The solution overview is:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Provide personalized book recommendations based on user preferences.</li>
                                <li>Display detailed book information, reviews, and ratings.</li>
                                <li>Curate book selections to match user&apos;s reading preferences.</li>
                            </ul>
                        </section>
                    </div>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Personalized Recommendations: Users should receive book recommendations tailored to their reading preferences.</li>
                                <li>Book Information: Users should have access to detailed book information, including reviews and ratings.</li>
                                <li>Filtering Options: Users should be able to filter book recommendations based on genres, authors, and other criteria.</li>
                                <li>User Interaction: Users should be able to rate books, add them to reading lists, and provide feedback.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Recommendation Algorithm: Develop an algorithm to generate personalized book recommendations based on user data.</li>
                                <li>Book Database: Implement a database to store book information, reviews, and user interactions.</li>
                                <li>User Profiles: Create user profiles to store reading preferences and interaction history.</li>
                                <li>UI/UX Design: Design an intuitive user interface for easy navigation and book exploration.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure the platform can handle a large number of users and book data efficiently.</li>
                                <li>Security: Implement security measures to protect user data and prevent unauthorized access.</li>
                                <li>Scalability: Design the system to scale seamlessly as user traffic and book database size increase.</li>
                                <li>Accessibility: Ensure the platform is accessible to users with disabilities.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DiscoverBooksSRD;
