import React from 'react';

// Display details of a musical track, including 
// an image from the album and the names of the track and the artist
const Detail = ({ name, album, artist, preview_url, image, spotify_url}) => {
    return (
 <div className="flex flex-col items-center px-4 py-4 mb-4">
    {image && (
      <img
        src={image}
        alt={`Album cover for ${name}`}
        className="w-3/4 md:w-1/2 mb-4"
      />
    )}
    <label htmlFor={`track-name-${name}`} className="text-sm font-medium">
      {name}
    </label>
    <label htmlFor={`artist-${artist}`} className="text-sm font-medium">
      {artist}
    </label>
    {album && (
      <label htmlFor={`album-name-${album}`} className="text-sm font-medium">
        {album}
      </label>
    )}
    {preview_url && (
      <audio
        controls
        src={preview_url}
        className="w-full md:w-1/2 mt-4"
      />
    )}
    {spotify_url && (
      <a
        href={spotify_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-600 font-bold hover:text-blue-800 visited:text-purple-600"
      >
        Listen on Spotify
      </a>
    )}
  </div>
    );
}

export default Detail;