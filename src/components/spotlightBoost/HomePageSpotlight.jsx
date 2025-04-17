import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllSpotlightFrom } from '../../store/Actions/adminActions';

const HomePageSpotlight = () => {
    const [spotlights, setSpotlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSpotlights = async () => {
            try {
                setLoading(true);
                const response = await dispatch(getAllSpotlightFrom());
                const filteredSpotlights = response?.filter(item => item.showOnHome === true);
                setSpotlights(filteredSpotlights);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch featured spotlights:", error);
                setLoading(false);
            }
        };

        fetchSpotlights();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    if (spotlights.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">No Spotlight Boosts available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="spotlight-section w-full h-fit px-5 py-10">
            <h1 className="text-3xl font-bold text-center mb-10">Spotlight Boosts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {spotlights.map((spotlight) => (
                    <div key={spotlight._id} className="spotlight-card bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="spotlight-image w-full h-60 overflow-hidden p-5">
                            <img
                                src={spotlight.file?.url || '/images/default-placeholder.png'}
                                alt={spotlight.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold mb-2">{spotlight.name}</h2>
                            <p className="text-gray-600 mb-4">{spotlight.promote}</p>
                            <p className="text-sm text-gray-500 mb-4">{spotlight.feature}</p>
                            {spotlight.link && (
                                <a
                                    href={spotlight.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline font-semibold"
                                >
                                    Visit Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePageSpotlight;