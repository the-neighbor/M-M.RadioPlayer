import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const RadioPlayer = () => {
  return (
    <div id='mmRadioPlayer'>
      <iframe width="380" height="470" src="https://cdn2.cloudrad.io/mmradio/live/p1.html" frameborder="0"></iframe>
      <div id='mmRadioPlayerNowPlaying'>
        <div>
        <h1>Regular Programming</h1>
        <p>The M-M Radio playlist curated by all the students as well as The Neighbor</p>
        </div>
        </div>
    </div>
  );
};

export default RadioPlayer;
