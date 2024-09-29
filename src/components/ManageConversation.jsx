import React from "react";
import Sidebar from './Sidebar'; // Assuming the same Sidebar component is used
import backIcon from '../../public/back.png'; // Import the back icon image
import PDF from '../../public/pdf.png'; // Replace with your PDF icon path

const ManageConversation = () => {
  const conversationData = [
    { title: "Title Sample 1", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
    { title: "Title Sample 2", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
    { title: "Title Sample 3", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
    { title: "Title Sample 4", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
    { title: "Title Sample 5", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
    { title: "Title Sample 6", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00", download: "PDF" },
  ];

  const handlePdfClick = (title) => {
    // Handle PDF download click here, replace alert with actual download logic
    alert(`Downloading PDF for ${title}`);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Roboto, sans-serif' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
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
          <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>MANAGE CONVERSATION</h1>
        </div>

        {/* Table for Managing Conversations */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Title</th>
              <th style={tableHeaderStyle}>Updated At</th>
              <th style={tableHeaderStyle}>Created At</th>
              <th style={tableHeaderStyle}>Duration</th>
              <th style={tableHeaderStyle}>Download</th>
              <th style={tableHeaderStyle}>Src</th>
            </tr>
          </thead>
          <tbody>
            {conversationData.map((conversation, index) => (
              <tr key={index}>
                <td style={tableDataStyle}>{conversation.title}</td>
                <td style={tableDataStyle}>{conversation.updatedAt}</td>
                <td style={tableDataStyle}>{conversation.createdAt}</td>
                <td style={tableDataStyle}>{conversation.duration}</td>
                <td style={tableDataStyle}>
                  <img
                    src={PDF} // Replace with the path to your PDF icon
                    alt="Download PDF"
                    style={{ width: '24px', cursor: 'pointer' }}
                    title="Download PDF"
                    onClick={() => handlePdfClick(conversation.title)}
                  />
                </td>
                <td style={tableDataStyle}>Src</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const tableHeaderStyle = {
  textAlign: 'left',
  padding: '10px',
  fontWeight: 'bold',
  backgroundColor: '#f1f1f1',
  borderBottom: '1px solid #ddd',
  fontSize: '14px',
};

const tableDataStyle = {
  textAlign: 'left',
  padding: '10px',
  fontSize: '14px',
  borderBottom: '1px solid #ddd',
  cursor: 'default' // Remove pointer cursor to indicate non-clickable rows
};

export default ManageConversation;
