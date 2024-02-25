import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
    return (
        <>
            <div id="toko-main" className=' overflow-hidden relative bg-black  flex flex-col gap-[4vmax] min-h-[100vh] w-[100vw] px-10  max-[400px]:px-5      '>
                <video className=" w-screen  absolute left-0  h-[110%] z-0 object-cover flex  opacity-30 max-[900px]:h-[100%] max-[500px]:h-[100%] " autoPlay muted loop src={require('../../public/assets/tokovideo.mp4')} />

                <div className='py-20 z-[0] flex flex-col gap-10'>


                    <div id="toko-heading" className="  flex flex-col gap-5 max-w-md mx-auto items-center">
                        <h1 className="text-5xl text-[var(--prime-yellow)]  oxanium ">Tokenomics</h1>
                        <p className="text-center leading-tight   " >We’ll meet you where you’re at – and tailor our approach to suit your strategic aims. We’ll do this using our five-stage model for change:</p>
                    </div>

                    <div id="toko-contaienr" className='  flex  gap-10 w-[100%] min-h-[60vh] max-[900px]:flex-col  max-[900px]:items-center'>
                        <div id="toko-left" className='w-[50%] max-[900px]:w-[100%]  items-center flex flex-col    max-[900px]:items-center '>
                            <div id="toko-left-images" className='flex reletive cover-fit  gap-[2vmax] justify-center items-baseline '>
                                <div>
                                    <Image
                                        src="/assets/toko1.svg"
                                        width="100"
                                        height="100"
                                        alt="Picture of the author"

                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/assets/toko2.svg"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <Image
                                        src="/assets/toko3.svg"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <Image
                                        src="/assets/toko4.svg"
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                            <h1 className=' text-4xl ml-10 tracking-[1.3vw] oxanium max-[400px]:text-2xl max-[400px]:ml-[0rem]  max-[900px]:tracking-[2.5vw] max-[900px]:text-3xl max-[900px]:ml-[0px] '>DISTRIBUTION</h1>
                            {/* <h1 className='text-4xl ml-10 tracking-[1.3vw] max-w-[400px]:text-2xl max-w-[400px]:ml-0 max-w-[900px]:tracking-[3vw] max-w-[900px]:text-3xl max-w-[900px]:ml-0'>DISTRIBUTION</h1> */}


                        </div>
                        <div id="toko-right" className='oxanium w-[50%] max-[900px]:w-[100%] flex flex-col justify-end items-center gap-5'>
                            <h1>Token  <span className='text-[var(--prime-yellow)]'>Utility</span> </h1>

                            <div className='flex flex-col gap-4'>
                                <div id="util-card" className='  bg-gradient-to-b from-zinc-700 to-neutral-950 flex justify-center items-center gap-5 max-w-[450px] border-2 px-5  rounded-[100px]'>
                                    <h4 className=' text-nowrap'>Token Name</h4>
                                    <div className=' leading-tight max-[471px]:overflow-x-auto '>Institute of personnel and corporate development TOKEN</div>
                                </div>
                                <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Token Logo</h4>
                                    <h4 className=" pl-2">IPCD</h4>
                                </div>
                                <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Total Supply</h4>
                                    <h4 className="pl-1 ">20 Billion</h4>
                                </div>
                                <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Token Type</h4>
                                    <h4 className="pl-2 ">Utility Token</h4>
                                </div>
                                <div id="util-card" className='bg-gradient-to-b from-zinc-700 to-neutral-950 flex gap-5 border-2 px-5 py-2 rounded-[100px]'>
                                    <h4 className=" ">Blockchain</h4>
                                    <h4 className=" pl-3">BEP 20</h4>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Tokenomics