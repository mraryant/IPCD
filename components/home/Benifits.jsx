'use client'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';

const Benifits = () => {


    return (
        <>
            <div id="benifits-main" className=' reletive  bg-[#060606] flex md:px-10 px-5  min-h-[200vh] w-[100vw]     '>

                <div id="benifits-left" className='h-[100%] w-[33%]  '>
                    <div className='flex flex-col  gap-[100vh] justify-between my-[40vh]'>

                        <div className='flex flex-col gap-2 ' >

                            <div className='flex flex-col'>
                                <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY IPCD </h1>
                                <h2 className=' text-2xl oxanium'> Corporate / Institute </h2>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Enhanced Scalability </p>
                                <p>Higher flexibility  </p>
                                <p>Customized Solution  </p>
                                <p>Yearly Renewed  </p>
                                <p>Advertising Platform  </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                    </div>
                </div>

                <div id="benifits-mid"
                    className='h-[100vh] overflow-hidden  flex sticky left-0 top-0 w-[33%]  '>
                    <video className=" grayscale  scale-[2] max-[834px]:scale-[1.2] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} />

                </div>

                <div id="benifits-right" className='h-[100%] w-[33%]   '>

                    <div className='flex flex-col  gap-[100vh] justify-between my-[100vh]'>
                        <div className='flex flex-col gap-5 items-end ' >

                            <div className='flex flex-col items-end '>
                                <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY IPCD </h1>
                                <h2 className=' text-2xl oxanium'> User / Individual </h2>
                            </div>
                            <div className='flex flex-col gap-1 items-end  '>
                                <p>Cost- efficiency  </p>
                                <p>Low Risk   </p>
                                <p>Customized Solution  </p>
                                <p>User Friendly  </p>
                                <p>Flexible Plan </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Benifits