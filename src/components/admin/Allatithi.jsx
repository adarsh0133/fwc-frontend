import { useDispatch } from 'react-redux';
import { getallatithi } from '../../store/Actions/adminActions';
import React, { useEffect, useState } from 'react';

const Allatithi = () => {
    const dispatch = useDispatch();
    const [comploading, setcomploading] = useState(true);
    const [allUsers, setallUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setcomploading(true);
                const response = await dispatch(getallatithi());
                setallUsers(response);
                setcomploading(false);
            } catch (error) {
                console.error("Failed to fetch atithis:", error);
            }
        };
        fetchData();
    }, [dispatch]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            {comploading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="overflow-hidden font-medium">
                    <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
                        <p>All Atithi Details</p>
                    </div>{" "}
                    <br />
                    <div className="w-full flex justify-center mb-5">
                        <input
                            type="text"
                            placeholder="Search by name, email, or contact"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="px-4 py-2 border rounded-lg w-1/2"
                        />
                    </div>
                    <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
                        {allUsers.length === 0 ? (
                            <p>No Members found</p>
                        ) : (
                            <div className="overflow-y-auto h-full pb-10">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100 sticky top-0">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                S.No
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Destination city
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Arrival Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Departure Date
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Purpose
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {allUsers.slice().reverse().map((atithi, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {atithi.travelerName}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {atithi.travelerEmail}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                {atithi.destinationCity}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {formatDate(atithi.arrivalDate)}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {formatDate(atithi.departureDate)}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {atithi.purpose}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Allatithi;