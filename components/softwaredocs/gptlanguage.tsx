import Navbar from '@/components/shared/Navbar';
import '@/app/globals.css';

const GPTLanguageLearningSRD=() => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - GPT Language Learning</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Unlock language mastery with our GPT-3 powered app. Engage in interactive conversations, complete grammar exercises, and gain cultural insights to fluently speak Mandarin, French, and Spanish.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>GPT-4</li>
                            </ul>
                        </section>

                        {/* Solution Overview */}
                        <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                            <p className="text-gray-600">The solution overview is:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Engage users in interactive language learning activities.</li>
                                <li>Provide grammar exercises and cultural insights for language fluency.</li>
                                <li>Support learning of Mandarin, French, and Spanish.</li>
                            </ul>
                        </section>
                    </div>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Interactive Learning: Users should engage in interactive language learning activities.</li>
                                <li>Grammar Exercises: Users should have access to grammar exercises for language improvement.</li>
                                <li>Cultural Insights: Users should gain insights into the cultures associated with the languages.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Conversation Simulations: Develop conversation simulations for language practice.</li>
                                <li>Grammar Exercises Module: Implement a module for grammar exercises.</li>
                                <li>Cultural Insights Integration: Integrate cultural insights into the learning platform.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure smooth performance of interactive activities and exercises.</li>
                                <li>Usability: Design the platform for easy navigation and user-friendly experience.</li>
                                <li>Language Accuracy: Ensure accuracy in language learning content and simulations.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GPTLanguageLearningSRD;
