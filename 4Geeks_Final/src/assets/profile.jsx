import MyContext from "../Context/context";

const Profile = () => {
    return (
        <>
            <div className="mt-20 flex flex-col">
                <div>
                    <h2>Personal information</h2>
                    <div>
                        <h3>Name:</h3>
                        <input />
                        <h3>Last name:</h3>
                        <input />
                        <h3>Email address:</h3>
                        <input />
                        <h3>Phone number:</h3>
                        <input />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Profile