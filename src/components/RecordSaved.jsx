import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import CheckmarkIcon from '../../public/saved.png'; // Replace with the correct path to your checkmark icon

const RecordSaved = () => {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    // Implement functionality for the "Done" button click, for now, it navigates to the home page
    navigate('/home');
  };

  const handleGoToConversationClick = () => {
    // Implement functionality for the "Go To Conversation List" button click
    navigate('/conversation-list');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", overflow: 'hidden' }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px 40px', backgroundColor: '#f9f9f9', alignItems: 'center', justifyContent: 'center' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', width: '100%' }}>
          <h2 style={{ margin: '0 auto', color: '#034FAF', fontWeight: '900', fontSize: '24px' }}>
            RECORD HAS BEEN SAVED
          </h2>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '70%' }}>
          <img src={CheckmarkIcon} alt="Checkmark" style={{ height: '60px', marginBottom: '20px' }} />
          <p style={{ fontSize: '18px', color: '#034FAF', margin: '10px 0' }}>
            Your new record has been saved to the conversation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button
              onClick={handleDoneClick}
              style={{
                padding: '10px 30px',
                backgroundColor: 'white',
                color: '#034FAF',
                border: '2px solid #034FAF',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              Done
            </button>
            <button
              onClick={handleGoToConversationClick}
              style={{
                padding: '10px 30px',
                backgroundColor: '#034FAF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              Go To Conversation List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordSaved;
