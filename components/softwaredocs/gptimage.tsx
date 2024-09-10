import Navbar from '@/components/shared/Navbar';
import '@/app/globals.css';


const GPTDiverseImageGeneratorSRD: React.FC=() => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 ">Software Requirements Document - GPT Diverse Image Generator</h1>
                    {/* Title */}
                    <section className="flex flex-col md:w-1/2 p-6 rounded-lg ">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Title:</h2>
                        <p className="text-gray-600">GPT Diverse Image Generator: Highlighting Black Representation</p>
                    </section>
                    
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>
                        {/* User Story */}
                        <section className="mb-8 flex flex-col md:w-1/2 shadow-md p-6 rounded-lg ">
                                
                        </section>
                        </div>

                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>
                        {/* Business Case */}
                        <section className="mb-8 flex flex-col md:w-1/2 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                                <p className="text-gray-600">Championing diversity, our GPT-powered app focuses on generating and displaying images that celebrate Black representation. Designed to broaden the scope of AI-generated imagery, this app aims to foster inclusion and diversity in digital media.</p>
                            </div>
                        </section>

                        {/* Technology Stack */}
                        <section className="mb-8 flex flex-col md:w-1/3 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>GPT-4</li>
                                <li>DALL-E</li>
                            </ul>
                        </section>
                        {/* Solution Overview */}
                        <section className="mb-8 flex flex-col md:w-1/2 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                            <p className="text-gray-600">The solution overview is:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Generate diverse images based on a prompt</li>
                                <li>Save the generated images to their device</li>
                                <li>Share the generated images with their friends</li>
                            </ul>
                        </section>
                    </div>

                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Image Generation: Users should be able to generate images that celebrate Black representation.</li>
                                <li>Diverse Representation: The generated images should showcase diverse Black representation, encompassing different ages, genders, and cultural backgrounds.</li>
                                <li>Customization Options: Users should have options to customize the generated images, such as selecting specific themes or styles.</li>
                                <li>Accessibility: The application should ensure accessibility features to accommodate users with disabilities, such as providing alt text for images.</li>
                                <li>User Feedback: Implement a feedback mechanism for users to provide input on the generated images and suggest improvements.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Image Generation Module: Develop a module to generate images using GPT-4 and DALL-E models.</li>
                                <li>User Feedback System: Create a feedback system where users can rate generated images and provide comments.</li>
                                <li>User Authentication: Implement user authentication to allow registered users to access the application.</li>
                                <li>Image Sharing: Enable users to share generated images on social media platforms or via direct links.</li>
                                <li>Performance Optimization: Optimize image generation algorithms to ensure fast and efficient processing.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 shadow-md p-6 rounded-lg ">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure that the application can handle simultaneous image generation requests efficiently, with minimal latency.</li>
                                <li>Security: Implement robust security measures to protect user data and prevent unauthorized access.</li>
                                <li>Scalability: Design the application architecture to be scalable, allowing for seamless expansion to accommodate growing user demand.</li>
                                <li>Accessibility: Ensure that the application complies with accessibility standards, such as providing alternative text for images and ensuring keyboard navigation support.</li>
                            </ul>
                        </section>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}

export default GPTDiverseImageGeneratorSRD;
