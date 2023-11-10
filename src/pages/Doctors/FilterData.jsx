import React, { useState } from 'react';
import TabData from './TabData';

const FilterData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Locality');
    const [selectedLocalityIndex, setSelectedLocalityIndex] = useState(null);
    const [selectedAvailability, setSelectedAvailability] = useState(null);
    const [selectedPriceRangeIndex, setSelectedPriceRangeIndex] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedSpecialist, setSelectedSpecialist] = useState(null);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleRadioChange = (key, value) => {
        switch (key) {
            case 'locality':
                setSelectedLocalityIndex(value);
                break;
            case 'availability':
                setSelectedAvailability(value);
                break;
            case 'priceRange':
                setSelectedPriceRangeIndex(value);
                break;
            case 'gender':
                setSelectedGender(value);
                break;
            case 'specialist':
                setSelectedSpecialist(value);
                break;
            default:
                break;
        }
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const tabs = ['Locality', 'Availability', 'Price-Range', 'Gender', 'Specialist'];

    const localities = ['Bangalore', 'Pune', 'Mumbai', 'Delhi'];

    const availabilityOptions = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const priceRanges = ['₹0 to ₹500', '₹500 to ₹700', '₹700 to ₹1000', '₹1000 to ₹1500', '₹1500+'];

    const genderOptions = ['Any Gender', 'Male', 'Female', 'Other'];

    const specialistOptions = ['Cardiologist', 'Dermatologist', 'Gynecologist', 'Pediatrician', 'Psychiatrist'];

    const generateQueryString = () => {
        const filters = {
            locality: localities[selectedLocalityIndex],
            availability: availabilityOptions[selectedAvailability],
            priceRange: priceRanges[selectedPriceRangeIndex],
            gender: genderOptions[selectedGender],
            specialist: specialistOptions[selectedSpecialist],
        };

        const queryString = Object.keys(filters)
            .map((key) => {
                const value = filters[key];
                if (value) {
                    return `${key}=${encodeURIComponent(value)}`;
                }
                return null;
            })
            .filter((param) => param !== null)
            .join('&');

        console.log('Generated Query String:', queryString);
    };

    return (
        <>
            <div className="flex items-center justify-center text-center border-b-2 mb-6">
                <div className="w-30 h-64 pr-4 border-r-2 text-left">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`cursor-pointer font-black p-2 ${activeTab === tab ? ' border-l-2 border-red-500 text-black' : ''
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className="w-48 h-64 p-4 overflow-y-auto ">
                    {/* Content for the active tab goes here */}
                    {activeTab === 'Locality' && (
                        <TabData
                            options={localities}
                            onChange={(index) => handleRadioChange('locality', index)}
                            selectedOption={selectedLocalityIndex}
                        />
                    )}

                    {activeTab === 'Availability' && (
                        <TabData
                            options={availabilityOptions}
                            onChange={(index) => handleRadioChange('availability', index)}
                            selectedOption={selectedAvailability}
                        />
                    )}
                    {activeTab === 'Price-Range' && (
                        <TabData
                            options={priceRanges}
                            onChange={(index) => handleRadioChange('priceRange', index)}
                            selectedOption={selectedPriceRangeIndex}
                        />
                    )}
                    {activeTab === 'Gender' && (
                        <TabData
                            options={genderOptions}
                            onChange={(index) => handleRadioChange('gender', index)}
                            selectedOption={selectedGender}
                        />
                    )}
                    {activeTab === 'Specialist' && (
                        <TabData
                            options={specialistOptions}
                            onChange={(index) => handleRadioChange('specialist', index)}
                            selectedOption={selectedSpecialist}
                        />
                    )}
                </div>
            </div>
            <div className="mt-4">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        generateQueryString();
                        handleModalClose();
                    }}
                >
                    Apply
                </button>
            </div>
        </>
    );
};

export default FilterData;
