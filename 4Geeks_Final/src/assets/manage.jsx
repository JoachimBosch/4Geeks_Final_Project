import MyContext from "../Context/context";

const Manage = () => {
    return (
        <>
        <div className="mt-20 flex flex-col">
            <div className="mt-2 mb-4 ml-2">
                    <h2>Subscription management</h2>
            </div>
            <div className="border border-2 mx-2 p-4">
                
                <form className="mt-3 grid grid-cols-3 gap-4">
                    <label className="col-span-1">Name:</label>
                    <input className="indent-8 pb-2 profile-text border col-span-2" />
                    <label className="col-span-1">Name:</label>
                    <input className="indent-8 pb-2 profile-text border col-span-2" />
                    <label className="col-span-1">Name:</label>
                    <input className="indent-8 pb-2 profile-text border col-span-2" />
                    <label className="col-span-1">Name:</label>
                    <input type="date" className="indent-8 pb-2 profile-text border col-span-2" />
                </form>
               
            </div>
        </div>
        </>
        )
}

export default Manage