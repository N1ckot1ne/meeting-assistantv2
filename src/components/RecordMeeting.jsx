import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar component is styled as per the provided image
import BackIcon from '../../public/back.png'; // Replace with the correct path to your back icon
import dateIcon from '../../public/date.png'; // Replace with the correct path to your date icon
import timeIcon from '../../public/time.png'; // Replace with the correct path to your time icon
import speaker from '../../public/speaker.png'; // Replace with the correct path to your time icon
import PlayIcon from '../../public/play.png'; // Replace with the correct path to your play icon
import PauseIcon from '../../public/pause.png'; // Replace with the correct path to your pause icon
import StopIcon from '../../public/play2.png'; // Replace with the correct path to your stop icon

const RecordMeeting = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    console.log('Play button clicked');
  };

  const handlePauseClick = () => {
    console.log('Pause button clicked');
  };

  const handleStopClick = () => {
    navigate(`/record-saved`);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f9f9f9' }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px 40px' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={BackIcon}
            alt="Back"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
            onClick={() => navigate(-1)}
          />
          <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>RECORD MEETING</h1>
        </div>

        {/* Note Header with Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '900' }}>Note_07/26/2024</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <img src={dateIcon} alt="Date Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginRight: '15px' }}>07/26/2024 10:31PM</span>
              <img src={timeIcon} alt="Time Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>00:10:13</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}
              onClick={handlePlayClick}
            >
              <img src={PlayIcon} alt="Play" style={{ height: '30px' }} />
            </button>
            <button
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}
              onClick={handlePauseClick}
            >
              <img src={PauseIcon} alt="Pause" style={{ height: '30px' }} />
            </button>
            <button
              style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              onClick={handleStopClick}
            >
              <img src={StopIcon} alt="Stop" style={{ height: '30px' }} />
            </button>
          </div>
        </div>

        {/* Transcript Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          height: '55vh'
        }}>
          {/* Speaker Info Block 1 */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
            <div style={{
              borderRadius: "50%",
              padding: "0px", // Removed padding for no background color
              marginRight: "10px",
            }}>
              <img
                src={speaker}
                alt="Speaker Icon"
                style={{ width: "30px" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px", color: "#555" }}>
                Speaker 1{" "}
                <span style={{ color: "#999", fontWeight: "normal", fontSize: "12px" }}>
                  00:00:00 - 00:00:30
                </span>
              </p>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Speaker Info Block 2 */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
            <div style={{
              borderRadius: "50%",
              padding: "0px", // Removed padding for no background color
              marginRight: "10px",
            }}>
              <img
                src={speaker}
                alt="Speaker Icon"
                style={{ width: "30px" }}
              />
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px", color: "#555" }}>
                Speaker 2{" "}
                <span style={{ color: "#999", fontWeight: "normal", fontSize: "12px" }}>
                  00:00:33 - 00:01:35
                </span>
              </p>
              <p style={{ fontSize: "14px", color: "#333" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordMeeting;
