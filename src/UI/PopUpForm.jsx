import { RiCloseFill } from '@remixicon/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import PhoneInputField from './PhoneInputField';

const PopUpForm = ({ setpopup, fields, setFields, onSubmit }) => {
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
                        className="focus:outline-[#f58220] focus:border-[#f58220] border border-gray-300 rounded-md"
                    />
                );
            case 'select':
                return (
                    <select
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#f58220] focus:border-[#f58220] border border-gray-300 rounded-md"
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
            default:
                return (
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        className="focus:outline-[#f58220] focus:border-[#f58220] border border-gray-300 rounded-md"
                    />
                );
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='fixed w-full h-screen flex items-center justify-center bg-[#000000b6] z-[100]'>
                <div className='w-[40vw] h-[70vh] max-[600px]:h-[80vh]  max-[600px]:w-[80vw] bg-white flex flex-col items-center justify-between rounded-2xl overflow-y-scroll pb-24' style={{ textAlign: "center", marginTop: "50px" }}>
                    <div className="w-full p-1 flex items-center justify-between cursor-pointer">
                        <span></span>
                        <RiCloseFill size={35} onClick={() => setpopup(false)} />
                    </div>
                    <form className="" onSubmit={handleSubmit}>
                        <h2 className='text-xl'>Form:-</h2>
                        <div className="w-full h-full grid ">
                            {fields.map((field, index) => (
                                <div key={index} className="flex flex-col items-start">
                                    <h3>{field.label}</h3>
                                    {renderField(field)}
                                </div>
                            ))}
                        </div>
                        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: '#f58220', color: 'white', border: 'none', borderRadius: '5px' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PopUpForm