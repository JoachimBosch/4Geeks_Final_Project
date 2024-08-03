import image1 from '../images/Wellbeing1.jpg'


export default function Home() {
  return (
    <div>
        <header className="relative flex items-end justify-end h-screen overflow-hidden">
            <div className="relative z-30 text-right mx-20">
                <h1 className="my-2 drop-shadow-2xl text-black-500 leading-normal">Reset your life, <br></br> one box at a time</h1>
                <p className="text-black-500 drop-shadow-2xl leading-relaxed" style={{fontSize: "25px"}}>Find your gateway to a more mindful, peaceful life <br></br> through curated  experiences delivered to your doorstep.</p>
                <button className="mt-10 mb-20 px-10 py-5 bg-black text-white">Choose your experience</button>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full max-w-none">
                <source
                    src=""
                    type="video/mp4">
                </source>
            </video>
        </header>


        {/* Section 2 */}


        <div className="bg-orange-50 h-screen flex items-center">
            <div style={{backgroundColor: "#FAEAE0"}} className="w-[30rem] leading-loose z-20 drop-shadow-lg py-9 relative mx-32">
                <hr></hr>
                <p className="px-9">We've crafted unique boxes to create</p>
                <hr></hr>
                <p className="px-9"><strong> personalized experiences </strong> that nourish your</p>
                <hr></hr>
                <p className="px-9">soul and enhance your well-being.</p>
                <hr></hr>
                <br></br>
                <hr></hr>
                <p className="px-9">Each box is an invitation to <strong>create a ritual</strong></p>
                <hr></hr>
                <p className="px-9">that suits your lifestyle and needs.</p>
                <hr></hr>
            </div>
            <img src={image1} 
                alt="A candle, a journal and a plant"
                className="absolute object-fit h-full z-10 right-0">
            </img>
        </div>
    </div>
  )


}
    