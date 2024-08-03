import MyContext from "../Context/context";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <>
            <div className="mt-20 flex flex-col">
                <div className="border border-2 mx-2 p-4">
                    <h2>Personal information</h2>
                    <div className="mt-3">
                        <h3>Name:</h3>
                        <p className="indent-8">Joachim</p>
                        <h3>Last name:</h3>
                        <p className="indent-8">Bosch</p>
                        <h3>Email address:</h3>
                        <p className="indent-8">bosch.joachim@outlook.com</p>
                        <h3>Phone number:</h3>
                        <p className="indent-8">0626838554</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="mx-3 px-2 py-1 border rounded">Change password</button>
                        <button className="mx-3 px-2 py-1 border rounded">Update profile information</button>
                    </div>
                </div>
                <div className="border border-2 mx-2 my-4 p-4">
                    <h2>Addresses</h2>
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
                                        Street Name 101, 00000 City, Country
                                    </td>
                                    <td class="px-6 pr-0">
                                        <button className="px-2 py-1 border rounded">
                                            Edit
                                        </button>
                                        <button className="ml-2 px-2 py-1 border rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="border border-2 mx-2 my-4 p-4">
                    <h2>Subscription management</h2>
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
                                        <button className="px-2 py-1 border rounded">
                                            Edit
                                        </button>
                                        <button className="ml-2 px-2 py-1 border rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Profile