import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllZoomPremiumFrom } from '../../store/Actions/adminActions';

const AllZoomPremium = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [zoomPremiums, setZoomPremiums] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchZoomPremiums = async () => {
            try {
                setLoading(true);
                const response = await dispatch(getAllZoomPremiumFrom());
                setZoomPremiums(response);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch Zoom Premiums:", error);
                setLoading(false);
            }
        };
        fetchZoomPremiums();
    }, [dispatch]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredZoomPremiums = zoomPremiums.filter((zoomPremium) =>
        zoomPremium.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">All Zoom Premiums</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-2 border rounded-lg w-full mb-5"
            />
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    S.No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    description
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                audience
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    View Thumbnail
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredZoomPremiums.map((zoomPremium, index) => (
                                <tr key={zoomPremium._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.type}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.description}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.audience}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {zoomPremium.thumbnail ? (
                                            <a href={zoomPremium.thumbnail.url} target='#' className='text-blue-700 hover:underline font-semibold '>
                                                view
                                            </a>
                                        ) : (
                                            <span>No File</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllZoomPremium;