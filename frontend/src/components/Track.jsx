import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Track = () => {
    const { trackId } = useParams();
    const [track, setTrack] = useState(null);

    useEffect(() => {
        fetch(`/api/tracks/${trackId}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Unable to fetch track data');
          })
          .then((jsonRes) => setTrack(jsonRes))
          .catch((error) => console.error('Error:', error));
    }, [trackId]);

    if (!track) return <div>Loading...</div>;

    return (
        <div>
            <img src={track.image} alt="track cover"/>
            <h2>{track.artist}</h2>
            <h2>{track.name}</h2>
            <h3>{track.genre}</h3>
        </div>
    );
};

export default Track;