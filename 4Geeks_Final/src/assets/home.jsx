import image1 from '../images/Wellbeing1.jpg'
import image2 from '../images/OurClients.jpg'
import videoSrc from '../video/AdobeStock_471309002.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Carousel from './carousel';



export default function Home() {
    console.log('Video source path:', videoSrc);
  return (
    <div>


        {/* Section 1 */}


        <header className="relative flex items-end justify-end h-screen overflow-hidden bg-fixed">
            <div className="relative z-30 text-right mx-20 w-full max-w-[720px]">
                <h1 className="my-2 [text-shadow:_5px_5px_8px_rgb(0_0_0_/_20%)] text-black-500 leading-loose text-5xl md:text-6xl">Reset your life, one box at a time</h1>
                <p className="text-black-500 [text-shadow:_3px_3px_3px_rgb(0_0_0_/_20%)] text-1xl md:text-3xl">Find your gateway to a more mindful, peaceful life through curated  experiences delivered to your doorstep.</p>
                <button className="mt-10 mb-20 px-10 py-5 bg-black text-white shadow-[6px_6px_12px_rgba(0,0,0,0.4)] text-xl md:text-1xl">Choose your experience</button>
            </div>
            <video
                autoPlay
                loop
                muted
                className="background-video z-0">
                <source
                    src={videoSrc}
                    type="video/mp4">
                </source>
                Your browser does not support the video tag.
            </video>
        </header>


        {/* Section 2 */}


        <div className="bg-orange-50 h-screen flex items-center">
            <div style={{backgroundColor: "#FAEAE0"}} className="w-[30rem] mx-auto md:ms-20 leading-loose z-20 py-9 relative shadow-[6px_6px_12px_rgba(0,0,0,0.4)]">
                <hr></hr>
                <p className="px-9">We've crafted unique boxes to create</p>
                <hr></hr>
                <p className="px-9"><strong> personalized experiences </strong> that nourish your</p>
                <hr></hr>
                <p className="px-9">soul and enhance your well-being.</p>
                <hr></hr>
                <p><br></br></p>
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


        {/*Section 3 */}
        
        
        <Carousel />



        {/*Section 4 */}


        <div className="bg-orange-50 h-screen flex items-center"></div>



        {/*Section 5 */}


        {/* <img src={image2} style={{width: "100%", height: "700px"}} alt="Our-clients" className="h-view z-0"></img> */}
        <div className="z-10 relative py-10 clients-love">
            <h2 className="text-center [text-shadow:_3px_3px_5px_rgb(0_0_0_/_50%)]" style={{color: 'white'}}>Our Clients Love Us</h2>
            <div className="flex">
                <div className="bg-white opacity-70 w-1/3 p-5 ms-5 my-10 rounded-sm">
                    <p>"Absolutely life-changing! The Relax box has become my nightly ritual. The soothing scents and calming teas help me unwind like never before. I feel so much more at peace. Thank you, RE7!"</p>
                    <h4 className="text-right">Sophie M.</h4>
                </div>
                <div className="bg-white opacity-70 w-1/3 p-5 mx-5 my-10 rounded-sm">
                    <p>"The Revive box is a game-changer! The invigorating essential oils and energizing snacks give me the perfect boost to start my day. I feel more alive and focused than ever. Highly recommend!"</p>
                    <h4 className="text-right">James L.</h4>
                </div>
                <div className="bg-white opacity-70 w-1/3 p-5 me-5 my-10 rounded-sm">
                    <p>"The Renew box was just what I needed. The detoxifying products and refreshing teas made me feel rejuvenated from the inside out. It’s like a fresh start in a box. I'm hooked and can't wait to try more!"</p>
                    <h4 className="text-right">Liam K.</h4>
                </div>
            </div>
        </div>
        

        {/*Section 6 */}
        
        
        <div className="bg-orange-50 h-screen py-10">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div style={{backgroundColor: "#FAEAE0"}} className="w-[35rem] leading-loose py-9 relative shadow-[4px_4px_8px_rgba(0,0,0,0.2)] my-10 mx-auto">
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                     What's included in each box?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    How often will I receive my box?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    Can I customize my box?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    Can I gift a subscription to someone else?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    What if I have allergies or specific preferences?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    How do I cancel or pause my subscription?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    Do you ship internationally?</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    What is your return policy</p>
                <hr></hr>
                <p className="px-9">
                    <span className="me-3"><FontAwesomeIcon icon = {faPlus} /></span>
                    How can I contact customer service?</p>
            </div>
            <div className="flex justify-center">
                <button className="px-10 py-5 bg-black text-white shadow-[4px_4px_8px_rgba(0,0,0,0.2)] text-xl md:text-1xl">Choose your experience</button>
            </div>
        </div>
    </div>
  )
}
    