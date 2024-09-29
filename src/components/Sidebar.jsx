import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../../public/user.png'; // User avatar logo beside the name
import bigLogo from '../../public/logo.png'; // Big logo for the top section, replace with actual path
import homeIcon from '../../public/home.png'; // Replace with your actual path
import conversationIcon from '../../public/conversation.png'; // Replace with your actual path
import minutesIcon from '../../public/meeting_minutes.png'; // Replace with your actual path
import manageIcon from '../../public/manage_conversation.png'; // Replace with your actual path
import signOutIcon from '../../public/sign_out.png'; // Replace with your actual path
import settingsIcon from '../../public/settings.png'; // Replace with your actual path

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const menuItems = [
    { name: 'Home', path: '/home', icon: homeIcon },
    { name: 'Conversation', path: '/conversation-list', icon: conversationIcon },
    { name: 'Meeting Minutes', path: '/meeting-minutes-list', icon: minutesIcon },
    { name: 'Manage Conversation', path: '/manage-conversation', icon: manageIcon }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: '10px',
      height: '100vh',
      width: '250px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      borderRight: '1px solid #E0E0E0'
    }}>
      {/* Big Logo Section */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img src={bigLogo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
      </div>

      {/* User Avatar and Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EFF7FF',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <img src={Avatar} alt="User Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <div style={{ marginLeft: '10px' }}>
          <p style={{ fontWeight: 'bold', margin: '0' }}>Venancio, Nicko A.</p>
          <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>nicko.venancio@lspu.edu.ph</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav style={{ flex: 1 }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {menuItems.map(item => (
            <li key={item.name} style={{ margin: '10px 0' }}>
              <Link
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '5px',
                  color: activeMenu === item.path ? '#FF8C00' : '#000',
                  textDecoration: 'none',
                  backgroundColor: activeMenu === item.path ? '#FFE7D1' : 'transparent',
                  fontWeight: activeMenu === item.path ? 'bold' : 'normal'
                }}
                onClick={() => setActiveMenu(item.path)}
              >
                <img src={item.icon} alt={item.name} style={{ width: '24px', marginRight: '10px' }} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section with Sign Out and Settings */}
      <div style={{ marginTop: '20px' }}>
        <div style={{ margin: '10px 0' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '5px',
              color: '#000',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              fontWeight: 'normal'
            }}
          >
            <img src={signOutIcon} alt="Sign Out" style={{ width: '24px', marginRight: '10px' }} />
            Sign Out
          </Link>
        </div>
        <div style={{ margin: '10px 0' }}>
          <Link
            to="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '5px',
              color: '#000',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              fontWeight: 'normal'
            }}
          >
            <img src={settingsIcon} alt="Settings" style={{ width: '24px', marginRight: '10px' }} />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
