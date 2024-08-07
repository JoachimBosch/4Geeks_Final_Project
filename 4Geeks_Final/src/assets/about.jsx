import image1 from '../images/AboutUs1.jpg'
import image2 from '../images/AboutUs2.jpg'
import image3 from '../images/AboutUs3.jpg'

export default function About() {
    return(
        <div className="bg-[#FAEAE0] py-20">



            {/* Section 1 */}


            <h2 className="border-t border-black text-center p-8">About Us</h2>
            <p className="mx-auto px-8 max-w-[800px] text-center">Welcome to RE7, your ultimate destination for curated 
self-care experiences. Our mission is simple: to help you 
reset, rejuvenate, and recharge with thoughtfully  selected 
products designed to enhance your well-being.
            </p>


            {/* Section 2 */}


            <div className="flex">
                <img src={image1}></img>
                <div>
                    <h4>Our Story</h4>
                    <p>At RE7, we believe that self-care is essential, not optional. 
Founded in 2024, our journey began with a passion for 
promoting holistic wellness and a commitment to making 
self-care accessible to everyone. We understand the 
demands of modern life and the importance of taking a 
moment for yourself. That's why we've dedicated ourselves 
to creating monthly self-care boxes that inspire and nurture 
your mind, body, and spirit.
                    </p>
                </div>

            </div>



            {/* Section 3 */}

            <div className = "bg-[#E9D0BD]">
                <h2>Our Core Values</h2>
                <div className="grid col-4 gap-3">
                    <div>
                        <span>an icon</span>
                        <h4>Quality</h4>
                    </div>
                </div>
            </div>


            {/* Section 4 */}

            <div className="bg-cover h-screen min-w-[100%]" style={{ backgroundImage: `url(${image2})`}}>
                <h4>What we offer</h4>
                <p>Every month, we deliver a themed box filled with high-quality, 
carefully curated items that align with our core values of renewal, 
relaxation, and revitalization. Each box is designed to help you:
- **Revive** your energy with invigorating and refreshing products.
- **Relax** and unwind with soothing and calming essentials.
- **Recharge** your mind and body with nourishing and empowering items.
- **Refocus** on your personal goals with tools and inspiration.
- **Reconnect** with yourself and loved ones through meaningful
 activities and products.</p>
            </div>
        </div>
    )
}