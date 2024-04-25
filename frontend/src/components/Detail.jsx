import React from 'react';

// Display details of a musical track, including 
// an image from the album and the names of the track and the artist
const Detail = ({ name, album, artist, preview_url, image }) => {
    return (
        <div>
            <div className="flex flex-col items-center px-0">
                {/* Check if image is provided and display it */}
                {image && <img src={image} alt={`Album cover for ${name}`} className="w-full" />}
            </div>
            <div className="flex flex-col items-center px-0">
                {/* Display track name */}
                <label htmlFor={`track-name-${name}`} className="text-sm font-medium">
                    {name}
                </label>
            </div>
            <div className="flex flex-col items-center px-0">
                {/* Display artist names */}
                <label htmlFor={`artist${artist}`} className="text-sm font-medium">
                    {artist}
                </label>
            </div>
            {/* Display the album title if available */}
            {album && (
                <div className="flex flex-col items-center px-0">
                    <label htmlFor={`album-name-${album}`} className="text-sm font-medium">
                        {album}
                    </label>
                </div>
            )}
            {/* Audio player to play the preview if available */}
            {preview_url && (
                <audio controls src={preview_url} className="w-full mt-4">
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}

export default Detail;