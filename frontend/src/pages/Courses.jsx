import React from 'react'
import { Blog1, Blog2, Blog3, blogmain, blogmain2, course1, course2, course3, course4, course5, course6 } from '../assets'
const Courses = () => {
    return (
        <div className='text-black'>


            <div className='h-[40vh] bg-gradient-to-r from-[#EEFFFD] py-12 to-[#F2FFFD] flex justify-around items-center flex-col  my-12'>
                
                <div className='w-full flex flex-col items-center gap-6'>
                    <h1 className='text-[#54BDAF] text-5xl font-semibold'>COURSES</h1>
                    <p className='text-[#818181] xl:w-1/3 text-center lg:w-[40%] md:w-[55%] sm:w-[65%] w-[80%]'>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                    
                </div>
                <div className='xl:w-[30%] lg:w-[33%] md:w-[40%] sm:w-[45%] xs:w-[55%] w-[70%] flex'>
                    <input placeholder='Search courses here' className='py-4 pl-2 w-[100%] text-black outline-none bg-white  border-gray-300 border-[1px] rounded-s-xl' />
                    <div className='bg-[#54BDAF] py-4 px-12 rounded-e-xl'></div>
                </div>
            </div>

            <div className='w-[90%] mx-auto flex justify-between items-center border-b-2 pb-2'>
                <p>All Categories</p>
                <p>Blockchain</p>
                <p>Cryptocurrency</p>
                <p>Digital Payments</p>
                <p>Data Analytics</p>
                <p>RegTech</p>
                <p>InsurTech</p>
                <p>Robo-Advisory</p>
                <button className='bg-lightcyan py-1 rounded-2xl text-white'>See more</button>
            </div>

            <div className='xs:w-[90%] w-[98%] mx-auto flex sm:flex-row flex-col justify-between items-center my-12'>
                
                <div className='sm:w-[45%] w-full'>
                    <img src={course1} className='w-full' />
                    <div className='flex justify-between text-lightcyan py-4 font-semibold px-1'>
                        <p className='text-lg'>Previous</p>
                        <p className='text-lg'>Next</p>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-12 md:gap-10 sm:gap-4 xs:gap-2 sm:w-[50%] w-full'>
                    <div>
                        <button className='bg-gray-300 text-lightcyan'>Finance</button>
                    </div>
                    <h2 className='text-[#262626] lg:text-5xl md:text-4xl sm:text-3xl font-bold'>Introduction to Fintech</h2>
                    <div className='inline'>
                        <p>This course provides a comprehensive overview of the fintech industry, covering topics such as blockchain technology, digital payments, robo-advisory, and peer-to-peer lending.<span className='text-lightcyan'><br />$99</span></p>
                    </div>
                </div>

            </div>
            

            <div className='w-[90%] flex mx-auto'>

                <div className='sm:w-[70%] w-full mx-auto flex flex-wrap justify-between'>

                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Financial Data Analysis for Fintech</h2>
                        <p>This course focuses on analyzing financial data using advanced analytical tools and techniques, with a specific emphasis on applications in the fintech sector.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$149</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course3} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Fintech Entrepreneurship</h2>
                        <p>TThis course is designed for aspiring fintech entrepreneurs and covers essential topics such as ideation, business model development, fundraising, and scaling a fintech startup.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$199</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course4} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Blockchain and Cryptocurrencies</h2>
                        <p>This course explores the fundamentals of blockchain technology, its applications in finance, and the rise of cryptocurrencies. It covers topics like smart contracts, decentralized finance (DeFi), and security considerations.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$129</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course5} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Regulatory and Legal Aspects of Fintech</h2>
                        <p>This course provides an understanding of the regulatory and legal frameworks governing fintech companies. It covers compliance, data protection, cybersecurity, and regulatory challenges faced by the industry.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$149</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course6} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Digital Payments and Mobile Banking</h2>
                        <p>This course delves into the world of digital payments, mobile banking, and e-wallets. It covers topics such as payment processing, mobile banking apps, and emerging trends in the payments industry.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$89</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={course1} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Risk Management in Fintech</h2>
                        <p>This course focuses on risk assessment and mitigation strategies specific to the fintech industry. It covers topics such as cybersecurity risks, fraud prevention, and regulatory compliance.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>$119</p>
                    </div>
                    
                </div>

                <div className='w-[30%] hidden mx-auto sm:flex flex-col items-center mt-12 '>
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mb-3 font-bold'>Recent Post</h2>
                        
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course2} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Fintech and Wealth Management</h2>
                            </div>
                        </div>
                        
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Artificial Intelligence in Fintech</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course4} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Risk Management in Fintech</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mt-52 mb-3 font-bold'>Recently viewed</h2>
                        <div className='flex mb-4 '>
                            <img className='h-20 w-36'  src={course5} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Fintech and Financial Inclusion</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course6} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Regulatory and Legal Aspects of Fintech</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course1} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Digital Payments and Mobile Banking</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mt-72 mb-3 font-bold'>View more stories</h2>
                        <div className='flex mb-4 '>
                            <img className='h-20 w-36'  src={course2} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Blockchain and Cryptocurrencies</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Fintech Entrepreneurship</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img className='h-20 w-36' src={course4} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Financial Data Analysis for Fintech</h2>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                

            </div>
        </div>
    )
}

export default Courses
