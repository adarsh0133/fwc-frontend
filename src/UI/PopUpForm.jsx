import { RiCloseFill } from '@remixicon/react'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import PhoneInputField from './PhoneInputField';
import { isFileSizeValid, getFileSizeError } from '../helpers/FileSize';
import { toast } from 'react-toastify';


const PopUpForm = ({ setpopup, fields, setFields, onSubmit, loading, children }) => {
    const [file, setFile] = useState(null);
    const [sizeError, setsizeError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};

        // Collect values from the fields array
        fields.forEach((field) => {
            formData[field.name] = field.type === 'file' ? file : field.value || '';
        });

        onSubmit(formData);
    };

    const handleFieldChange = (name, value) => {
        // Update the value of the field in the fields array
        setFields((prevFields) =>
            prevFields.map((field) =>
                field.name === name ? { ...field, value } : field
            )
        );

    };

    const handleFileChange = (e) => {
        setsizeError(null);
        const uploadedFile = e.target.files[0];

        // Check file size
        if (!isFileSizeValid(uploadedFile)) {
            setsizeError(getFileSizeError(uploadedFile));
            return;
        }

        setFile(uploadedFile);
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'textarea':
                return (
                    <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#0037FF] focus:border-[#0037FF] border border-gray-300 rounded-md"
                    />
                );
            case 'select':
                return (
                    <select
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#0037FF] focus:border-[#0037FF] border border-gray-300 rounded-md"
                    >
                        {field.options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'phone':
                return (
                    <PhoneInputField
                        value={field.value}
                        name={field.name}
                        onChange={(value) => handleFieldChange(field.name, value)}
                    />
                );
            case 'date':
                return (
                    <input
                        type="date"
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#0037FF] focus:border-[#0037FF] border border-gray-300 rounded-md"
                    />
                );

            case 'file':
                return (
                    <div className="border border-dashed border-gray-400 rounded-md p-4 w-full text-center">
                        <input
                            type="file"
                            name={field.name}
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-blue-500 underline"
                        >
                            Upload a file pdf/jpeg/word up to 5MB
                        </label>
                        {file && <p className="mt-2 text-sm text-gray-600">{file.name}</p>}
                        {sizeError && <p className="mt-2 text-sm text-red-500">{sizeError}</p>}
                    </div>
                );
            default:
                return (
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#0037FF] focus:border-[#0037FF] border border-gray-300 rounded-md"
                    />
                );
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#000000b6] z-[99999]">
                <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-[80vh] bg-white rounded-2xl overflow-y-scroll">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-bold">Form Submission</h2>
                        <RiCloseFill
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setpopup(false)}
                        />
                    </div>
                    <form onSubmit={handleSubmit} className="p-4  md:px-20">
                        {children}
                        <div className="grid gap-4 mt-4">
                            {fields.map((field, index) => {
                                if (field.hidden) return null;

                                return (
                                    <div key={index} className="flex flex-col">
                                        <label className="text-sm font-medium mb-1">{field.label}</label>
                                        {renderField(field)}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-6 flex justify-end">
                            {loading ? (
                                <button
                                    type="button"
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md"
                                    disabled
                                >
                                    Submitting...
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUpForm