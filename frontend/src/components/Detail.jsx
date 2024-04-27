import React from 'react';

// Display details of a musical track, including an image from the album and the names of 
// the track and the artist, get track preview and link to spotify_url
const Detail = ({ name, album, artist, preview_url, image, spotify_url}) => {
    return (
 <div className="flex flex-col items-center px-4 py-4 mb-4">
  {/* Displays the album image if one available */}
    {image && (
      <img
        src={image}
        alt={`Album cover for ${name}`}
        className="w-3/4 md:w-1/2 mb-4"
      />
    )}
    {/* Track name displayed as a label */}
<label htmlFor={`track-name-${name}`} className="text-lg font-bold">
  {name}
</label>

{/* Artist name displayed as a label in blue and bold */}
<label htmlFor={`artist-${artist}`} className="text-lg  text-blue-500 font-bold">
  {artist}
</label>

{/* Album name displayed, if provided, with a larger font */}
{album && (
  <label htmlFor={`album-name-${album}`} className="text-lg">
    {album}
  </label>
    )}
    {/* Audio control to preview the track if a URL is provided */}
    {preview_url && (
      <audio
        controls
        src={preview_url}
        className="w-full md:w-1/2 mt-4"
      />
    )}
    {/* Link to listen to the full track on Spotify */}
    {spotify_url && (
      <a
        href={spotify_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4text-gray-900 font-bold bg-teal-400 hover:bg-teal-700 px-4 py-2 rounded"
      >
        Listen on Spotify
      </a>
    )}
  </div>
    );
}

export default Detail;