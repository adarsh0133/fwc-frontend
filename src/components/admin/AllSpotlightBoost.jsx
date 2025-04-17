import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllSpotlightFrom, addSpotlightToHomepage, removeSpotlightFromHomepage } from '../../store/Actions/adminActions';

const AllSpotlightBoost = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [spotlights, setSpotlights] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchSpotlights = async () => {
            try {
                setLoading(true);
                const response = await dispatch(getAllSpotlightFrom());
                setSpotlights(response);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch Spotlight Boosts:", error);
                setLoading(false);
            }
        };
        fetchSpotlights();
    }, [dispatch]);

    const handleAddToHomepage = async (id) => {
        try {
            await dispatch(addSpotlightToHomepage(id));
            alert("Spotlight added to homepage successfully!");
            const response = await dispatch(getAllSpotlightFrom());
            setSpotlights(response);
            setSpotlights((prev) =>
                prev.map((spotlight) =>
                    spotlight._id === id ? { ...spotlight, featured: true } : spotlight
                )
            );
        } catch (error) {
            console.error("Failed to add Spotlight to homepage:", error);
        }
    };

    const handleRemoveFromHomepage = async (id) => {
        try {
            await dispatch(removeSpotlightFromHomepage(id));
            alert("Spotlight removed from homepage successfully!");
            const response = await dispatch(getAllSpotlightFrom());
            setSpotlights(response);

            setSpotlights((prev) =>
                prev.map((spotlight) =>
                    spotlight._id === id ? { ...spotlight, featured: false } : spotlight
                )
            );
        } catch (error) {
            console.error("Failed to remove Spotlight from homepage:", error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredSpotlights = spotlights.filter((spotlight) =>
        spotlight.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">All Spotlight Boosts</h1>
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
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Promote
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Featured
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    View Thumbnail
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredSpotlights.map((spotlight, index) => (
                                <tr key={spotlight._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {spotlight.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {spotlight.promote}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {spotlight.featured ? "Yes" : "No"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {spotlight.file ? (
                                            <a href={spotlight.file.url} target='#' className='text-blue-700 hover:underline font-semibold '>
                                                view
                                            </a>
                                        ) : (
                                            <span>No File</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {spotlight.showOnHome === true ? (
                                            <button
                                                onClick={() => handleRemoveFromHomepage(spotlight._id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                            >
                                                Remove from Homepage
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleAddToHomepage(spotlight._id)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                            >
                                                Add to Homepage
                                            </button>
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

export default AllSpotlightBoost;