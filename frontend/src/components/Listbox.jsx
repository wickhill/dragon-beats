import React, { useState, useEffect } from 'react';

// Displays a list of clickable tracks
const Listbox = props => {
  // Function to handle click events on each track
  const clicked = id => {
    // Calls the 'clicked' function passed as a prop with the clicked item's id
    props.clicked(id);
  }
  // Renders the list of tracks as buttons within a container
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