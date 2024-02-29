import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const SmartRecipeFinderSRD=() => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Smart Recipe Finder</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Transform your ingredients into delicious meals with our smart recipe app. Perfect for meal planning and minimizing food waste, discover recipes tailored to the ingredients in your pantry.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Android</li>
                                <li>Java</li>
                                <li>MySQL</li>
                            </ul>
                        </section>
                    {/* Solution Overview */}
                    <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                        <p className="text-gray-600">The solution overview is:</p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Provide users with recipes based on available ingredients.</li>
                            <li>Allow users to input ingredients they have and receive recipe suggestions.</li>
                            <li>Optimize meal planning and minimize food waste.</li>
                        </ul>
                    </section>
                    </div>

                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Ingredient-Based Recipes: Users should receive recipes based on the ingredients they have.</li>
                                <li>Search Functionality: Users should be able to search for recipes by ingredients or keywords.</li>
                                <li>Personalization: Users should have the option to save favorite recipes and receive personalized recommendations.</li>
                                <li>Accessibility: Ensure the app is accessible to users with disabilities.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Ingredient Input: Implement a feature to input and save user ingredients.</li>
                                <li>Recipe Retrieval: Develop algorithms to retrieve recipes based on user-input ingredients.</li>
                                <li>Search Functionality: Enable users to search for recipes using keywords.</li>
                                <li>User Accounts: Create user accounts to save preferences and favorite recipes.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure the app loads quickly and recipes are retrieved in a timely manner.</li>
                                <li>Security: Implement secure user authentication and protect user data.</li>
                                <li>Usability: Design the app interface to be intuitive and user-friendly.</li>
                                <li>Scalability: Plan for future scalability to accommodate a growing user base and recipe database.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SmartRecipeFinderSRD;
