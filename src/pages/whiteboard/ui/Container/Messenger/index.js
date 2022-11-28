import React, { useState} from "react";
import { 
    FaPlusCircle, 
    FaMicrophone, 
    FaComments,
    FaSmile, 
    FaVideo,
    FaChalkboard,
    FaHandRock,
    FaFolder,
    FaTimes,
    FaPenSquare,
    FaUsers,
    FaCog,
    FaPaperPlane,
    FaImage,
    FaMusic,
    FaRobot,
    FaVolumeMute,
    FaDoorClosed,
} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Header from '../../../../../components/header/HeaderSmall';
import "./messenger.css";
import Message from "../../../../../components/message/Message";
import Tooltip from '@mui/material/Tooltip';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

export default function Messenger() {

  const [showLeftCol, setShowLeftCol] = useState('none');

  const showHideLeftCol = () => {
      showLeftCol === 'flex' ? setShowLeftCol('none') : setShowLeftCol('flex');
  }

  return (
  <>
  {showLeftCol === 'flex' ? (
    <div className="col-overlay-left" style={{display: showLeftCol}}>
  <div className="messenger-container">
  <Header />
  <div className="messenger">
    <div className="chatBox">
      <div className="chatBoxWrapper chatBoxWrapper-height">
        <div className="chatIcons2">
        <Tooltip title="John Doe" placement="right">
          <div className="recipientUser">
            <img className="profile-img" src="/avatar.png" alt="" />
          </div>
          </Tooltip>
          <div className="chatBoxTools"> 
          <Tooltip title="Send a Knock" placement="bottom">          
            <div className="btn btn-secondary options"><FaHandRock className="conversationOptionIcon" /></div>
          </Tooltip>
            <Dropdown as={ButtonGroup}>
            <Tooltip title="Directory" placement="bottom">   
              <Dropdown.Toggle split variant="secondary" className="dropdown-option options" id="dropdown-profile">
                <FaFolder className="conversationOptionIcon" />
              </Dropdown.Toggle>
              </Tooltip>
              <Dropdown.Menu>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaPaperPlane />Documents</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaImage />Images</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaMusic />Audio</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaVideo />Videos</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaPenSquare />Logs</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaChalkboard />Whiteboards</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaUsers />Participants</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaRobot />Chat Bots</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaCog />Settings</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaVolumeMute />Mute</Dropdown.Item>
                <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaDoorClosed />Leave Group</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Tooltip title="Close Chat" placement="bottom"> 
              <div onClick={() => showHideLeftCol()} className="btn btn-secondary options"><FaTimes className="conversationOptionIcon" /></div>
            </Tooltip>
          </div>
        </div>
        <div className="chatBoxTop">
          <Message />
          <Message own={true}/>
          <Message />
          <Message own={true}/>
          <Message own={true}/>
          <Message />
        </div>
        <div className="chatBoxBottom">
          <Form.Control
            type="text"
            id="messageInput"
            aria-describedby="messageInput"
          />
          <div className="chatBoxBottomButtonLeft">
            <div className="group1">
              <Tooltip title="Upload Files" placement="top">
                <button className="chatButton"><FaPlusCircle /></button>
              </Tooltip>
              <Tooltip title="Record Audio" placement="top">
                <button className="chatButton"><FaMicrophone /></button>
              </Tooltip>
            </div>
            <Tooltip title="Add Emoji" placement="top">
              <button className="chatButton"><FaSmile /></button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>   
  </div>
  </div>
  ) : (
    <Tooltip title="Open Chat" placement="right">
      <div className="messenger-comments-icon">
        <button onClick={() => showHideLeftCol()}><FaComments size={60} /></button>
      </div>
    </Tooltip>
  )}
  </>
  );
  }
