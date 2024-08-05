import MyContext from "../Context/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <>
            <div className="mt-20 flex flex-col">
                <div className="mt-2 mb-4 ml-2">
                    <h2>Personal information</h2>
                </div>
                <div className="border border-2 mx-2 p-4">
                    
                    <div className="mt-3">
                        <h3>Name:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">Joachim</p>
                        <h3>Last name:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">Bosch</p>
                        <h3>Email address:</h3>
                        <p className="indent-8 pb-2 profile-text border-b">bosch.joachim@outlook.com</p>
                        <h3>Phone number:</h3>
                        <p className="indent-8 pb-2 profile-text">0626838554</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="mx-3 px-2 py-1 border rounded bg-inherit">Change password</button>
                        <button className="mx-3 px-2 py-1 border rounded bg-inherit">Update profile information</button>
                    </div>
                </div>
                <div className="mt-4 mb-4 ml-2">
                    <h2>Address information</h2>
                </div>
                <div className="border border-2 mx-2 p-4">
                    <div class="relative overflow-x-auto mt-3">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Address information
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Manage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Personal
                                    </td>
                                    <td class="px-6 py-4">
                                        Street Name 101, 00000 City, Country
                                    </td>
                                    <td class="px-6 pr-0">
                                        <button className="px-2 py-1 bg-inherit">
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                        <button className="ml-2 px-2 py-1 bg-inherit">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                            <div className="my-3 mx-auto flex justify-center">
                                    <button className="px-2 py-1 border rounded bg-inherit">
                                        Add another address
                                    </button>
                            </div>
                    </div>
                </div>
                <div className="mt-4 mb-4 ml-2">
                    <h2>Active subscriptions</h2>
                </div>
                <div className="border border-2 mx-2 my-4 p-4">
                    <div class="relative overflow-x-auto mt-3">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Subscription
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Months left
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Next billing date
                                    </th>
                                    <th scope="col" class="pl-6 py-3">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Personal
                                    </td>
                                    <td class="px-6 py-4">
                                        Recharge
                                    </td>
                                    <td class="px-6 py-4">
                                        5
                                    </td>
                                    <td class="px-6 py-4">
                                        August 27, 2024
                                    </td>
                                    <td class="px-6 pr-0">
                                        <button className="px-2 py-1 bg-inherit	">
                                            <FontAwesomeIcon icon={faPencil} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            <div className="my-3 mx-auto flex justify-center">
                                    <button className="px-2 py-1 border rounded bg-inherit">
                                        Manage subscriptions
                                    </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Profile