import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar'; // Import the Sidebar component
import backIcon from '../../public/back.png'; // Import your back icon image

const ConversationList = () => {
    const navigate = useNavigate();

    const meetingMinutes = [
        { title: "Meeting 1", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" },
        { title: "Meeting 2", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" },
        { title: "Meeting 3", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" },
        { title: "Meeting 4", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" },
        { title: "Meeting 5", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" },
        { title: "Meeting 6", updatedAt: "00:00 AM", createdAt: "00:00 AM", duration: "00:00:00" }
    ];

    const handleRowClick = (title) => {
        // Replace this route with your desired route and pass the title or an ID
        navigate(`/conversation`);
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Roboto, sans-serif' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content: Meeting Minutes */}
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
                    <h1 style={{ margin: 0, fontSize: "25px", fontWeight: "900", color: '#034FAF' }}>CONVERSATION</h1>
                </div>

                {/* Meeting Minutes Table */}
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'left', fontWeight: 'bold' }}>Title</th>
                            <th style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'left', fontWeight: 'bold' }}>Updated At</th>
                            <th style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'left', fontWeight: 'bold' }}>Created At</th>
                            <th style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'left', fontWeight: 'bold' }}>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetingMinutes.map((meeting, index) => (
                            <tr 
                                key={index} 
                                onClick={() => handleRowClick(meeting.title)}
                                style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }} // Add cursor pointer and transition effect
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} // Change background on hover
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'} // Revert background on mouse out
                            >
                                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{meeting.title}</td>
                                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{meeting.updatedAt}</td>
                                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{meeting.createdAt}</td>
                                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{meeting.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConversationList;
