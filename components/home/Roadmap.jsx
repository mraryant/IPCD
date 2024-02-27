import React from 'react'
import Tokenomics from './Tokenomics'
import Listing from './Listing'

const Roadmap = () => {
    return (
        <>



            <div id="roadmap-main" className='relative flex flex-col    items-center   min-h-[140vh] w-[100vw] '>



                <video className="w-full sticky top-0 h-[120vh] z-[-1] object-cover flex  opacity-50  " autoPlay muted loop src={require('../../public/assets/roadmapvideo.mp4')} />

                <div id="roadmap-cont" className='  w-[100%] min-h-[80vh] gap-20 absolute  left-0  flex flex-col justify-center  '>

                    <div id="roadmap-heading" className=" sticky h-fit    top-0 flex flex-col gap-2 bg-black  py-[1.5vmax] items-center max-[768px]:px-3">
                        <h1 className="text-5xl text-[var(--prime-yellow)] oxanium ">Roadmap</h1>
                        <p className="text-center leading-tight max-w-md mx-auto">We’ll meet you where you’re at – and tailor our approach to suit your strategic aims. We’ll do this using our five-stage model for change:</p>
                        <div className="  absolute left-0 top-[99%] bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[50px]  bottom-0 z-3"></div>

                    </div>

                    <div className="flex justify-center max-[768px]:px-5">

                        <div id="rc-left" className='oxanium sticky top-[39vh] text-5xl  justify-center items-center py-3 pb-7  md:block  hidden z-[-1] h-fit '> Phase <span className='text-[var(--prime-yellow)]'>0</span> </div>
                        <div id="rc-right" className='w-[30rem] h-[75vh] overflow-y-auto flex flex-col  gap-10 max-[611px]:container '>

                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3 '>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>1</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>TOKEN & PLATFORM LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient '>10%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>2</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>ICO LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>20%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>3</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>LISTING ON DEX</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>30%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>4</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>LISTING ON CEX</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>40%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>5</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>UTILITY MOBILE APP LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>50%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>6</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>E-LEARNING PLATFORM LAUNCH</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>60%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>7</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>OWN BLOCKCHAIN</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>80%</h2>
                            </div>
                            <div id="roadmap-step" className='flex items-center justify-center gap-5  container-lg border-b-2 pb-4 max-[370px]:gap-3'>
                                <h2 className='oxanium text-5xl text-[var(--prime-yellow)] '>8</h2>
                                <p className=' oxanium text-2xl md:text-3xl  w-80 max-[370px]:text-[22px] leading-tight '>ECOSYSTEM EXPANSION</p>
                                <h2 className='oxanium text-5xl max-[370px]:text-4xl  text-gradient'>100%</h2>
                            </div>

                        </div>
                    </div>
                </div>


                <Tokenomics />
                <Listing />
            </div>

        </>
    )
}

export default Roadmap