import React from 'react'

const Roadmap = () => {
    return (
        <>
            <div id="roadmap-main" className=' min-h-[100vh]  w-[100vw] flex flex-col relative     '>
                <video className="w-full h-[100vh] object-cover flex sticky top-0 opacity-70  " autoPlay muted loop src={require('../../public/assets/homevideo.mp4')} />

                <div id="roadmap-heading" className="sticky top-0 flex flex-col gap-5 max-w-md mx-auto items-center">
                    <h1 className="text-5xl text-[var(--prime-yellow)] font-['Oxanium'] ">Roadmap</h1>
                    <p className="text-center leading-tight">We’ll meet you where you’re at – and tailor our approach to suit your strategic aims. We’ll do this using our five-stage model for change:</p>
                    <p className='text-4xl absolute left-0 top-[100%] flex items-end w-fit h-[40vh]   font-["Oxanium"] '>PHASE 0 </p>
                </div>

                <div id="fixed-text" className=' '>


                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Roadmap