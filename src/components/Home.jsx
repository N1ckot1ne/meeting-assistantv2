import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar component is styled as per the provided image
import OnlineMeetingIcon from '../../public/record_online_meeting.png'; // Replace with the correct path
import RecordMeetingIcon from '../../public/record_meeting.png'; // Replace with the correct path
import UploadIcon from '../../public/upload_recorded.png'; // Replace with the correct path

const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/record-online-meeting'); // Replace with your actual route for Join page
  };

  const handleRecordClick = () => {
    navigate('/record-meeting'); // Replace with your actual route for Record page
  };

  const handleUploadClick = () => {
    navigate('/upload-recorded'); // Replace with your actual route for Upload page
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", overflow: 'hidden' }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 10px', backgroundColor: '#f9f9f9' }}>
        {/* Record Online Meeting Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          flex: '0 0 30%' // Adjust height percentage as necessary
        }}>
          <h2 style={{ color: '#034FAF', fontWeight: '900', marginBottom: '10px', fontSize: '25px' }}>
            RECORD ONLINE MEETING
          </h2>
          <img src={OnlineMeetingIcon} alt="Record Online Meeting" style={{ height: '80px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', width: '90%', alignItems: 'center' }}>
            <input
              type="text"S
              placeholder="Paste Meeting URL"
              style={{
                flex: 1,
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #4DABF5',
                marginRight: '8px'
              }}
            />
            <button 
              onClick={handleJoinClick}
              style={{
                padding: '8px 15px',
                backgroundColor: '#034FAF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Join
            </button>
          </div>
        </div>

        {/* Record Meeting Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          flex: '0 0 30%' // Adjust height percentage as necessary
        }}>
          <h2 style={{ color: '#034FAF', fontWeight: '900', marginBottom: '10px', fontSize: '25px' }}>
            RECORD MEETING
          </h2>
          <img src={RecordMeetingIcon} alt="Record Meeting" style={{ height: '80px', marginBottom: '10px' }} />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button 
              onClick={handleRecordClick}
              style={{
                padding: '8px 25px',
                backgroundColor: '#034FAF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Record
            </button>
          </div>
        </div>

        {/* Upload Recorded Audio Files Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          flex: '0 0 30%' // Adjust height percentage as necessary
        }}>
          <h2 style={{ color: '#034FAF', fontWeight: '900', marginBottom: '10px', fontSize: '25px' }}>
            UPLOAD RECORDED AUDIO FILES
          </h2>
          <img src={UploadIcon} alt="Upload Recorded Audio Files" style={{ height: '80px', marginBottom: '10px' }} />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button 
              onClick={handleUploadClick}
              style={{
                padding: '8px 25px',
                backgroundColor: '#034FAF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
