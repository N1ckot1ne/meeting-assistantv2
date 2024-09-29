import React, { useState } from "react";
import Sidebar from './Sidebar'; // Import the Sidebar component
import backIcon from '../../public/back.png'; // Update with the correct path to your back icon
import dateIcon from '../../public/date.png'; // Update with the correct path to your date icon
import timeIcon from '../../public/time.png'; // Update with the correct path to your time icon
import speaker from '../../public/speaker.png'; // Update with the correct path to your user icon

// Text content variables
const TEXTS = {
  conversationTitle: "CONVERSATION",
  noteTitle: "Note_07/26/2024",
  autoScrollLabel: "Auto-scroll",
  date: "07/26/2024 10:31PM",
  time: "00:00:44",
  speaker1: "Speaker 1",
  speaker1Time: "00:00:00 - 00:00:30",
  speaker1Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  speaker2: "Speaker 2",
  speaker2Time: "00:00:30 - 00:01:00",
  speaker2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const Conversation = () => {
  const [autoScroll, setAutoScroll] = useState(false); // State to handle toggle

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll); // Toggle auto scroll state
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Roboto, sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content: Conversation Transcripts */}
      <div style={{ flex: 1, padding: '20px 40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={backIcon}
            alt="back"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
            onClick={() => window.history.back()}
          />
          <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>{TEXTS.conversationTitle}</h1>
        </div>

        {/* Note Header with Date and Time */}
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
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '900' }}>{TEXTS.noteTitle}</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <img src={dateIcon} alt="Date Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginRight: '15px' }}>{TEXTS.date}</span>
              <img src={timeIcon} alt="Time Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{TEXTS.time}</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', marginRight: '10px' }}>{TEXTS.autoScrollLabel}</span>
            {/* Toggle Switch */}
            <div
              onClick={toggleAutoScroll}
              style={{
                width: '40px',
                height: '20px',
                borderRadius: '15px',
                backgroundColor: autoScroll ? '#034FAF' : '#ccc',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '1px',
                  left: autoScroll ? '20px' : '1px',
                  transition: 'left 0.3s',
                }}
              />
            </div>
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
                {TEXTS.speaker1}{" "}
                <span style={{ color: "#999", fontWeight: "normal", fontSize: "12px" }}>
                  {TEXTS.speaker1Time}
                </span>
              </p>
              <p style={{ fontSize: "14px", color: "#333" }}>
                {TEXTS.speaker1Text}
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
                {TEXTS.speaker2}{" "}
                <span style={{ color: "#999", fontWeight: "normal", fontSize: "12px" }}>
                  {TEXTS.speaker2Time}
                </span>
              </p>
              <p style={{ fontSize: "14px", color: "#333" }}>
                {TEXTS.speaker2Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
