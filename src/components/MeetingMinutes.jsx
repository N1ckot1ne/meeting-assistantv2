import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar component is styled as per the provided image
import BackIcon from '../../public/back.png'; // Replace with the correct path to your back icon

const MeetingMinutes = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Dummy data
  const meetingData = {
    dateTime: "July 26, 2024, 10:00 AM",
    attendees: ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis"],
    actionItems: [
      "Follow up with the client regarding the project requirements.",
      "Prepare a draft of the project plan.",
      "Schedule the next team meeting."
    ],
    agenda: "Discuss the new project proposal, review the client's feedback, and assign tasks to team members.",
    additionalActionItems: [
      "Send the meeting notes to all attendees.",
      "Update the project documentation."
    ]
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f9f9f9', boxSizing: 'border-box' }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px 40px', maxWidth: '100%', boxSizing: 'border-box' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src={BackIcon}
            alt="Back"
            style={{ width: '24px', height: '24px', marginRight: '10px', cursor: 'pointer' }}
            onClick={handleBackClick}
          />
          <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>
            MEETING MINUTES
          </h1>
        </div>

        {/* Meeting Minutes Form */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }}>
          {/* Date/Time */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>DATE/TIME:</label>
            <div style={{
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '5px',
              width: '100%',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}>
              {meetingData.dateTime}
            </div>
          </div>

          {/* Attendees Section */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>ATTENDEES</label>
            <div style={{
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '5px',
              width: '100%',
              overflowY: 'auto',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}>
              <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
                {meetingData.attendees.map((attendee, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    {attendee}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Items Section */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>ACTION ITEMS</label>
            <div style={{
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '5px',
              width: '100%',
              overflowY: 'auto',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}>
              <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
                {meetingData.actionItems.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Agenda Section */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>AGENDA</label>
            <div style={{
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '5px',
              width: '100%',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}>
              {meetingData.agenda}
            </div>
          </div>

          {/* Additional Action Items Section */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>ADDITIONAL ACTION ITEMS</label>
            <div style={{
              backgroundColor: '#e0e0e0',
              padding: '15px',
              borderRadius: '5px',
              width: '100%',
              overflowY: 'auto',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}>
              <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
                {meetingData.additionalActionItems.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingMinutes;
