import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputField = ({ value, onChange }) => {
  return (
      <PhoneInput
        country={'in'}
        placeholder="Enter your number"
        name="contact"
        onChange={(value, country, e, formattedValue) => {
          onChange(formattedValue);
        }}
        value={value}
        containerClass="custom-phone-input-container"
        inputClass="custom-phone-input-field"
        buttonClass="rounded-xl w-fit h-10 mt-1.5 bg-transparent flag-dropdown"
        inputProps={{
          required: true,
        }}
      />
  );
};

export default PhoneInputField;