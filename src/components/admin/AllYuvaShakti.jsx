import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getYuvaShaktiForm } from '../../store/Actions/yuvaShaktiActions';

const AllYuvaShakti = () => {
    const dispatch = useDispatch();
    const [comploading, setcomploading] = useState(true);
    const [allUsers, setallUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setcomploading(true);
                const response = await dispatch(getYuvaShaktiForm());
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

    const filteredData = allUsers.filter((student) =>
        (student.name && student.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (student.whatsappNumber && student.whatsappNumber.includes(searchQuery))
      );

    return (
        <>
            {comploading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="overflow-hidden font-medium">
                    <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
                        <p>All YuvaShakti Details</p>
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
                        {filteredData.length === 0 ? (
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
                                                Contact
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                City
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Country
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Education
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Social Media
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredData.slice().reverse().map((data, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {data.name}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.whatsappNumber}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.city}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.country}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.education}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.socialMedia}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {data.description}
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

export default AllYuvaShakti