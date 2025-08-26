"use client"

import React, { useState, useEffect } from 'react';

interface CustomToggleProps {
  id: string;
  defaultChecked?: boolean;
  colorClass: 'green' | 'blue' | 'boo';
  onChange?: (checked: boolean) => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({ id, defaultChecked = false, colorClass, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  const getThumbClasses = () => {
    let classes = 'relative rounded-full w-[22px] h-[22px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out';
    
    if (isChecked) {
      classes += ' translate-x-[22px]';
    }

    return classes;
  };

  const getTrackClasses = () => {
    let classes = 'toggle-track flex items-center relative rounded-full p-[4px] w-full h-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] transition-colors duration-400 ease-linear';
    
    if (colorClass === 'green') {
      classes += ' bg-gray-400 peer-checked:bg-green-500';
    } else if (colorClass === 'blue') {
      classes += ' bg-gray-400 peer-checked:bg-blue-500';
    } else if (colorClass === 'boo') {
      classes += ' bg-gray-400 peer-checked:bg-pink-500';
    }

    return classes;
  };

  return (
    <div className={`toggle-container ${colorClass} relative rounded-full w-[52px] h-[30px]`}>
      <input
        id={id}
        type="checkbox"
        className="toggle-checkbox peer appearance-none absolute z-10 rounded-full w-full h-full opacity-0 cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={getTrackClasses()}>
        <div className={getThumbClasses()}></div>
      </div>
    </div>
  );
};

export default CustomToggle;