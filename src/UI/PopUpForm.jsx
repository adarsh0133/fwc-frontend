import { RiCloseFill } from '@remixicon/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import PhoneInputField from './PhoneInputField';

const PopUpForm = ({ setpopup, fields, setFields, onSubmit, loading }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};

        // Collect values from the fields array
        fields.forEach((field) => {
            formData[field.name] = field.value || '';
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
            <div className='fixed w-full h-screen flex items-center justify-center bg-[#000000b6] z-[100]'>
                <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] max-[600px]:h-[80vh] bg-white flex flex-col items-center justify-between rounded-2xl overflow-y-scroll [&::-webkit-scrollbar]:invisible pb-24' style={{ textAlign: "center", marginTop: "50px" }}>
                    <div className="w-full p-1 flex items-center justify-between cursor-pointer">
                        <span></span>
                        <RiCloseFill size={35} onClick={() => setpopup(false)} />
                    </div>
                    <form className="lg:w-full" onSubmit={handleSubmit}>
                        <h2 className='text-xl'>Fill All The Details</h2>
                        <div className="w-full h-full grid lg:grid-cols-2 lg:pl-20 lg:gap-6 gap-4 p-4">
                            {fields.map((field, index) => (
                                <div key={index} className="flex flex-col items-start">
                                    <h3>{field.label}</h3>
                                    {renderField(field)}
                                </div>
                            ))}
                            {loading ? (

                                <div className='w-fit  lg:h-1/2 lg:mt-7 center' style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer', background: '#0037FF', color: 'white', border: 'none', borderRadius: '5px' }}>
                                    <div className="w-8 shrink-0">
                                        <div className="loader"></div>
                                    </div>
                                    submitting...
                                </div>
                            ) : (
                                <button type="submit" className='w-1/2 lg:h-1/2 lg:mt-7' style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer', background: '#0037FF', color: 'white', border: 'none', borderRadius: '5px' }}>
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PopUpForm