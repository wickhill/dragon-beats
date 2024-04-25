import React from 'react';

// Designed to create a customizable dropdown (select) menu
const Dropdown = props => {
    const dropdownChanged = e => {
        props.changed(e.target.value);

    }
    return (
        <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-1/2">
            <label className="text-sm font-medium w-full sm:w-1/5">{props.label}</label>
            <select value={props.selectedValue} onChange={dropdownChanged} className="form-select appearance-none block w-full sm:w-4/5 bg-white border border-gray-300 rounded-md py-1 px-2 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base">
                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;