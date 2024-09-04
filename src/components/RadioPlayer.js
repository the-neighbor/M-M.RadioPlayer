import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; 
import './RadioPlayer.css';

const RadioPlayer = ({data}) => {

  const { show_title, show_host, show_description, cover_img } = data || {};

  if (!cover_img || !show_title || !show_description || !show_host) {
    return (
      <div id='mmRadioPlayer'>
          <div id='mmRadioPlayerCover'>
          <img src='/images/logo.svg' className='cover-art cover-bg' alt='logo'/>
          <div id = 'mmRadioPlayerControls'>
            <AudioPlayer
            autoPlay
            id='mmRadioPlayerAudio'
            src='http://15849.cloudrad.io:9114/live'
            onPlay={e => console.log("onPlay")}
            />
            </div>
          </div>
          <div id='mmRadioPlayerNowPlaying'>
          <div>
          <h1>Offline</h1>
          <p>View our schedule and future shows below.</p>
          </div>
          </div>

      </div>
    );
  }
  else {
    return (
      <div id='mmRadioPlayer'>
          <div id='mmRadioPlayerCover'>
          <img src={cover_img} alt='cover'/>
          <div id = 'mmRadioPlayerControls'>
            <AudioPlayer
            autoPlay
            id='mmRadioPlayerAudio'
            src='http://15849.cloudrad.io:9114/live'
            onPlay={e => console.log("onPlay")}
            />
          </div>
          </div>
          <div id='mmRadioPlayerNowPlaying'>
          <div>
          <h1>{show_title}</h1>
          <h2>{show_host}</h2>
          <p>{show_description}</p>
          </div>
          </div>
      </div>
    );
  }
};

export default RadioPlayer;
