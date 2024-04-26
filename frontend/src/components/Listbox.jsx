import React,  { useState, useEffect} from 'react';

// Displays a list of clickable tracks
const Listbox = props => {
    const clicked = id => {
        props.clicked(id);
    }    
    return (
        <div className="w-full">
<div className="w-full px-2">
    <div className="space-y-2">
      {props.items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => clicked(item.id)}
          className="text-left py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
  </div>
    );
}

export default Listbox;