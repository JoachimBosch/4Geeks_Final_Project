import { Link } from "react-router-dom";
import MyContext from "../Context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const Manage = () => {
    return (
        <>
        <div className="md:mx-40 mt-20 flex flex-col">
            <div className="mt-2 mb-4 ml-2">
                    <h2>Subscription management</h2>
            </div>
            <div className="border border-2 mx-2 p-4">
                
                <form className="mt-3 grid grid-cols-3 gap-4">
                    <label className="col-span-1">Label:</label>
                    <input className="indent-8 py-2 profile-text border col-span-2" />
                    <label className="col-span-1">Subscription name:</label>
                    <p className="indent-8 py-2 profile-text border col-span-2 sub">Recharge</p>
                    <label className="col-span-1">Address:</label>
                    <select className="indent-8 py-2 profile-text border col-span-2">
                        <option value="label1">101 Street name, City, Country</option>
                    </select>
                    <label className="col-span-1">Extend term</label>
                    <select className="indent-8 py-2 profile-text border col-span-2">
                        <option value="1month" className="indent-8">1 Month</option>
                        <option value="3months">3 Months</option>
                        <option value="6months">6 Months</option>
                        <option value="12months">12 Months</option>
                    </select>
                </form>
                    <div className="mt-8 mb-6 flex justify-center">
                        <Link to="">
                            <button className="mx-3 px-2 py-1 border rounded bg-inherit"><FontAwesomeIcon icon={faCheck} /> Confirm</button>
                        </Link>
                        <Link to="">
                            <button className="mx-3 px-2 py-1 border rounded bg-inherit">Cancel <FontAwesomeIcon icon={faXmark} /></button>
                        </Link>
                    </div>
            </div>
            <div className="my-6 mx-auto flex justify-center">
                <Link to="/marketplace">
                    <button className="px-2 py-1 border rounded bg-inherit">
                    Add another subscription
                    </button>
                </Link>
            </div>
        </div>
        </>
        )
}

export default Manage