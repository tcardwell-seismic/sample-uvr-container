import React, { useState } from 'react';
import { seismicTheme, Theme } from '@seismic/mantle';
import { UniversalVideoRecorder } from '@seismic/universal-video-recorder';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const gatewayUrl = "";
  const getAuthToken = () => "";

  function onClose(video, content) {
    console.log(video);
    console.log(content);
    setIsOpen(false);
  }

  function onEvent() {
    console.log("onEvent");
  }

  return (
    <Theme theme={seismicTheme({ useGlobal: true })}>
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>Open the UVR!</button>
      <UniversalVideoRecorder open={isOpen} onClose={onClose} onEvent={onEvent} gatewayUrl={gatewayUrl} getAuthToken={getAuthToken} />
    </div>
    </Theme>
  );
}

export default App;
