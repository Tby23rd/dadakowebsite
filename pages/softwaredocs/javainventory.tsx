import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const JavaInventoryManagementSRD = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main className="py-10">
                <div className="mx-auto px-4 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Software Requirements Document - Java Inventory Management System</h1>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                    {/* Business Case */}
                    <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Business Case:</h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description:</h3>
                            <p className="text-gray-600">Streamline your inventory with our Java-based management system. Log in to manage items and categories, create new entries, and maintain your inventory with ease. Backed by Spring Boot and MySQL, our app ensures robust performance and reliability, complemented by comprehensive unit and Mockito tests.</p>
                        </div>
                    </section>

                    {/* Technology Stack */}
                    <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Technology Stack:</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>JUnit</li>
                            <li>Mockito</li>
                            <li>MySQL</li>
                        </ul>
                    </section>

                    {/* Solution Overview */}
                    <section className="mb-8 flex flex-col md:w-1/2 p-6 rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Solution Overview:</h2>
                        <p className="text-gray-600">The solution overview is:</p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Streamline inventory management tasks.</li>
                            <li>Utilize Spring Boot for backend development.</li>
                            <li>Employ MySQL for data storage.</li>
                            <li>Ensure robustness through unit and Mockito tests.</li>
                        </ul>
                    </section>
</div>
                    <div className='flex space-x-4 flex-col md:flex-row md:flex-wrap'>

                        {/* User Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">User Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Authentication: Users should be able to log in securely to access the system.</li>
                                <li>Inventory Management: Users should be able to manage items and categories within the inventory.</li>
                                <li>Creation of Entries: Users should have the ability to create new entries for items in the inventory.</li>
                                <li>Ease of Use: The system should be intuitive and user-friendly for efficient inventory management.</li>
                            </ul>
                        </section>

                        {/* Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>User Authentication Module: Develop a module for user authentication using Spring Security.</li>
                                <li>Inventory Management Module: Implement functionalities for managing items and categories in the inventory.</li>
                                <li>Entry Creation Module: Create a module for users to add new entries to the inventory.</li>
                                <li>User Interface: Design a user interface that facilitates easy navigation and interaction with the system.</li>
                            </ul>
                        </section>

                        {/* Non-Functional Requirements */}
                        <section className="mb-8 flex flex-col md:w-1/3 p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-700 mb-2">Non-Functional Requirements:</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Performance: Ensure the system can handle a large volume of inventory data efficiently.</li>
                                <li>Reliability: Ensure the system is robust and reliable, minimizing downtime and data loss.</li>
                                <li>Scalability: Design the system to scale effectively to accommodate growing inventory needs.</li>
                                <li>Security: Implement security measures to protect user data and prevent unauthorized access.</li>
                                <li>Testing: Conduct comprehensive unit and integration testing using JUnit and Mockito to ensure the system&apos;s reliability and accuracy.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default JavaInventoryManagementSRD;
