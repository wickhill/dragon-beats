import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import Track from './Track'

const Tracks = (props) => {
  console.log(props)
  return (
    <div style={{backgroundColor: 'green'}}>
      <h1>Tracks</h1>
      {props.tracks.map(track => {
        return <Track key={track.id} track={track} />;
      })}
    </div>
  )
}

export default Tracks;
