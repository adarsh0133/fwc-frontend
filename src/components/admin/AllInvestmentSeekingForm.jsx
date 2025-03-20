import { RiCloseFill } from '@remixicon/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllInvestmentFrom } from '../../store/Actions/adminActions';

const AllInvestmentSeekingForm = () => {
    const dispatch = useDispatch();
    const [comploading, setcomploading] = useState(true);
    const [allUsers, setallUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setcomploading(true);
                const response = await dispatch(getAllInvestmentFrom());
                setallUsers(response);
                setcomploading(false);
            } catch (error) {
                console.error("Failed to fetch students:", error);
            }
        };
        fetchData();
    }, [dispatch]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCloseProfile = () => {
        setSelectedMember(null);
    };

    const handleInvestmentForm = (member) => {
        setSelectedMember(member);
      };

    const filteredStudents = allUsers.filter((student) =>
        (student.name && student.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (student.email && student.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (student.contact && student.contact.includes(searchQuery))
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
                        <p>All Users Details</p>
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
                        {filteredStudents.length === 0 ? (
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
                                                website
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                More details
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredStudents.slice().reverse().map((student, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {student.name}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    {student.website}
                                                </td>
                                                <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                                                    <button
                                                        className="bg-blue-500 cursor-pointer px-4 py-2 rounded-lg text-white"
                                                        onClick={() => handleInvestmentForm(student)}
                                                    >
                                                        Click Here
                                                    </button>
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
            {selectedMember && (
                <div className="fixed top-0 z-[99] flex flex-col items-center justify-center left-0 w-full h-[100vh] bg-[#00000069]">
                    <div className="w-[70%] h-10 flex items-end justify-end">
                        <div onClick={handleCloseProfile} className="cursor-pointer rounded-full px-2 py-1 mb-2 bg-white flex items-center">
                            <RiCloseFill className="text-xl" />
                            Close
                        </div>
                    </div>
                    <div className="w-[70%] h-[70vh] overflow-y-scroll relative bg-white p-5 font-semibold">
                        <table className="table-auto w-full">
                            <tbody>
                                {Object.entries(selectedMember)
                                    .filter(([key]) => !["updatedAt", "userid", "_id", "__v", "createdAt"].includes(key))
                                    .map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="border px-4 py-2 capitalize">{key.replace(/_/g, " ")}</td>
                                            <td className="border px-4 py-2">
                                                {key === "whatsapp_group_link" ? (
                                                    <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                                        {value}
                                                    </a>
                                                ) : typeof value === "object" ? (
                                                    JSON.stringify(value)
                                                ) : (
                                                    value
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}

export default AllInvestmentSeekingForm