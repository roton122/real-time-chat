import React, { useState } from 'react';

const GenderCheckbox = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleCheckboxChange = (gender) => {
    setSelectedGender(gender === selectedGender ? null : gender);
  };

  return (
    <div className="flex space-x-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white hover:text-blue-600">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === 'Male'}
            onChange={() => handleCheckboxChange('Male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white hover:text-blue-600">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === 'Female'}
            onChange={() => handleCheckboxChange('Female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
