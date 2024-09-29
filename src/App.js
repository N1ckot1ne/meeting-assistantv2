import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ConversationList from "./components/ConversationList";
import Conversation from "./components/Conversation";
import ManageConversation from "./components/ManageConversation";
import MeetingMinutesList from "./components/MeetingMinutesList";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import JoinMeeting from "./components/RecordOnlineMeeting";
import RecordOnlineMeeting from "./components/RecordOnlineMeeting";
import RecordMeeting from "./components/RecordMeeting";
import UploadRecorded from "./components/UploadRecorded";
import MeetingMinutes from "./components/MeetingMinutes";
import Login from "./components/Login";
import RecordSaved from "./components/RecordSaved";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/record-online-meeting" element={<RecordOnlineMeeting />} />
        <Route path="/record-meeting" element={<RecordMeeting />} />
        <Route path="/upload-recorded" element={<UploadRecorded />} />
        <Route path="/record-saved" element={<RecordSaved />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/conversation-list" element={<ConversationList />} />
        <Route path="/meeting-minutes-list" element={<MeetingMinutesList />} />
        <Route path="/meeting-minutes" element={<MeetingMinutes />} />
        <Route path="/manage-conversation" element={<ManageConversation />} />
      </Routes>
    </Router>
  );
};

export default App;
