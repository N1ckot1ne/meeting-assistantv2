import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar component is styled as per the provided image
import BackIcon from '../../public/back.png'; // Replace with the correct path to your back icon

const UploadRecorded = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleCancelClick = () => {
    navigate('/home'); // Navigate to the home page or desired route
  };

  const handleUploadClick = () => {
    // Implement your upload logic here
    navigate('/record-saved'); 
    //if (file) {
    //  navigate('/record-saved'); 
    //} else {
    //  alert("Please select a file to upload.");
    //}
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", overflow: 'hidden' }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9', padding: '20px' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <img
            src={BackIcon}
            alt="Back"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
            onClick={handleBackClick}
          />
          <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>UPLOAD RECORDED AUDIO FILES</h1>
        </div>

        {/* Upload Area */}
        <div
          onClick={openFileDialog}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '60%',
            alignSelf: 'center',
            border: '2px dashed #ccc',
            marginBottom: '40px',
            cursor: 'pointer',
            height: '200px',
            marginTop: '40px'
          }}
        >
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept=".m4a,.mp3,.wav,.flac"
          />
          <p style={{ color: '#666', textAlign: 'center', fontSize: '16px', margin: 0 }}>
            {file ? `Selected file: ${file.name}` : 'Drag and drop file here or click to choose file.'}<br />
            Please choose an audio file (m4a, mp3, wav, flac.) up to 200MB to upload.
          </p>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={handleCancelClick}
            style={{
              padding: '10px 40px',
              backgroundColor: 'transparent',
              color: '#034FAF',
              border: '1px solid #034FAF',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '150px'
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleUploadClick}
            style={{
              padding: '10px 40px',
              backgroundColor: '#034FAF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '150px'
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadRecorded;
