import { FaPlusCircle, 
         FaMicrophone, 
         FaSearch, 
         FaSmile, 
         FaVideo,
         FaChalkboard,
         FaHandRock,
         FaFolder,
         FaTimes,
         FaPenSquare,
         FaRegEdit,
         FaCogs,
         FaUsers,
         FaCog,
         FaPaperPlane,
         FaImage,
         FaMusic,
         FaRobot,
         FaVolumeMute,
         FaDoorClosed
} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Conversation from "../../components/conversations/Conversation";
import Header from "../../components/header/Header";
import "./messenger.css"
import Message from "../../components/message/Message";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
{/*import Alert from "react-popup-alert"; */}

/*
  const [alert, setAlert] = React.useState({
    type: 'message',
    text: 'this is an alert',
    show: false
  })

  function onShowAlert(type) {
    setAlert({
      type: 'text',
      text: 'Please login into www.flipsetter.com for access to all of the following menu items below to make changes',
      show: true
    })
  }
  */

export default function Messenger() {
  return (
    <div className="messenger-container">
      <Header />
      <div className="messenger">
        <div className="threadList">
          <div className="threadListWrapper">
            <div className="conversationHeader">
            <Tooltip title="You Are Online" placement="right">
               <img className="profile-img" src="/avatar.png" alt="" />
            </Tooltip>
              <span className="conversationTitle">Messenger</span>

              {/*<div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}>
              <button onClick={() => onShowAlert('message')}><img className="profile-img" src="/avatar.png" alt="" /></button>
              <Alert  
                      text={alert.text}
                      btnText={'Close'} 
              />
              </div>
              </div>
               */}

              <Tooltip title="Messenger Options" placement="right">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split variant="secondary" className="dropdown-option options" id="dropdown-profile">
                   <FaCogs className="conversationOptionIcon" />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="https://flipsetter.com/messenger?search" style={{ textDecoration: "none" }}><FaSearch />Search Profiles</Dropdown.Item>
                    <Dropdown.Item href="https://flipsetter.com/messenger?newGroup" style={{ textDecoration: "none" }}><FaRegEdit />Create Group</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{ textDecoration: "none" }}><FaUsers />Friends</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{ textDecoration: "none" }}><FaCog />Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Tooltip>
            </div>
            <InputGroup className="conversationSearch">
              <InputGroup.Text id="conversationSearch"><FaSearch/></InputGroup.Text>
              <Form.Control
                placeholder="Search conversations by name"
                aria-label="Search"
                aria-describedby="conversationSearch"
              />
            </InputGroup>

            <div className="conversationContent">
              <Conversation />   
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
        </div>  
            
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatIcons2">
            <Tooltip title="John Doe" placement="right">
              <div className="recipientUser">
               <img className="profile-img" src="/avatar.png" alt="" />
              </div>
              </Tooltip>
              <div className="chatBoxTools">
              <Tooltip title="Start A Video Call" placement="left"><div className="btn btn-secondary options"><FaVideo className="conversationOptionIcon"/></div></Tooltip>
                <Link to='/whiteboard' className="nav-links">
                <Tooltip title="Start A Whiteboard" placement="bottom"><div className="btn btn-secondary options"><FaChalkboard className="conversationOptionIcon"/></div></Tooltip>
                </Link>
                <Tooltip title="Send A Knock" placement="bottom"><div className="btn btn-secondary options"><FaHandRock className="conversationOptionIcon" /></div></Tooltip> 
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
                <Tooltip title="Close Chat" placement="bottom"><div className="btn btn-secondary options"><FaTimes className="conversationOptionIcon" /></div></Tooltip>
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
                <Tooltip title="Upload Files" placement="top"><button className="chatButton"><FaPlusCircle /></button></Tooltip>
                <Tooltip title="Record Audio" placement="top"><button className="chatButton"><FaMicrophone /></button></Tooltip>
                </div>
                <Tooltip title="Add Emoji" placement="top"><button className="chatButton"><FaSmile /></button></Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}
