import { Link } from 'react-router-dom'
import backgroundRelax from '../images/Background-Relax.jpg'

export default function Carousel() {
    return (
        <div className="h-view text-center pt-32" style={{backgroundColor: "#FAEAE0"}}>
            <h2>Choose Your Experience</h2>
            <div className = "w-full mt-10">
                <ul className="relative flex flex-wrap p-1 list-none" data-tabs="tabs" role="list">
                    <li className="z-30 flex-auto text-center">
                        <Link to="">RELAX</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">REVIVE</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">RECONNECT</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">RECHARGE</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">REFRESH</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">REFOCUS</Link>
                    </li>
                    <li className="z-30 flex-auto text-center">
                        <Link to="">REBALANCE</Link>
                    </li>
                </ul>
            </div>
            <img src={backgroundRelax}></img>
            <div className="bg-black text-white p-4 opacity-70">
                <p className="text-sm md:text-xl">* Buy yourself a one-time experience, or treat yourself every month by taking a subscription. *</p>
            </div>
        </div>
    )
}