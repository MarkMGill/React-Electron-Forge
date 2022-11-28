import React from "react";
import "./header.css";
import { FaChalkboardTeacher,
         FaShoppingCart,
         FaUser,
         FaComment,
         FaSearch,
         FaBell,
         FaVideo,
         FaList,
         FaUserCircle,
         FaUserShield,
         FaCog,
         FaPeriscope,
         FaBug,
         FaSun,
         FaSignOutAlt
         } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from "react-popup-alert";


export default function Header({handleOpen}) {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
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

  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }
  

  return (
    <div className="mheaderContainer">
      <div className="headerLeft">
        <img src="/logo.png" height="40px" width="40px" alt="image" href="https://www.flipsetter.com"/>
        <div className="m-logo">
          <div className="logo-title">Collaborate</div>
          <div className="logo-Subtitle">by FlipSetter</div>
        </div>
        <div className="headerLinks">
          <a className="headerLink" href="#" style={{ textDecoration: "none" }}>Search <FaSearch className="m-icon" /></a>
          <a className="headerLink" href="https://flipsetter.com/whiteboard" style={{ textDecoration: "none" }}>Whiteboard<FaChalkboardTeacher className="m-icon" /></a>
          <a className="headerLink" href="https://flipsetter.com/subscriptions" style={{ textDecoration: "none" }}>Subscription <FaShoppingCart className="m-icon" /></a>
        </div>
      </div>

      <div className="headerCenter">
        <div className="searchbar">
          <div className="searchIcon">
          <FaSearch />
          </div>
          <input
            placeholder="Search profiles..."
            className="searchInput"
          />
        </div>
      </div>
      
      <div className="headerRight">  
        <div className="headerIcons">
        <Tooltip title="Active Whiteboard Calls" placement="bottom"><div className="headerIconItem">
            <FaVideo />
          </div>
        </Tooltip>
        <Tooltip title="Friend Requests" placement="bottom"><div className="headerIconItem">
            <FaUser />
            <span className="headerIconBadge">1</span>
          </div>
        </Tooltip>
        <Tooltip title="Messages" placement="bottom"><div className="headerIconItem">
            <FaComment />
            <span className="headerIconBadge">2</span>
          </div>
        </Tooltip>
        <Tooltip title="Notifications" placement="bottom"><div className="headerIconItem">
            <FaBell />
            <span className="headerIconBadge">1</span>
          </div>
        </Tooltip>
        </div>
        <div>
            <div onClick={() => handleOpen()} style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}>             
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split variant="secondary" className="dropdown-admin" id="dropdown-admin">
                <div> Admin</div>
                </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="https://flipsetter.com/mission/horizon/dashboard" style={{ textDecoration: "none" }}><FaSun />Horizon</Dropdown.Item>
                <Dropdown.Item href="https://flipsetter.com/mission/control" style={{ textDecoration: "none" }}><FaPeriscope/>Telescope</Dropdown.Item>
                <Dropdown.Item href="https://flipsetter.com/mission/janus" style={{ textDecoration: "none" }}><FaVideo />Janus</Dropdown.Item>
                <Dropdown.Item href="https://flipsetter.com/mission/logs" style={{ textDecoration: "none" }}><FaBug />Error Logs</Dropdown.Item>
                <Dropdown.Item href="https://flipsetter.com/mission/admin" style={{ textDecoration: "none" }}><FaUserShield />Site Dashboard</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}>
              <button onClick={() => onShowAlert('message')}><img className="profile-img" src="/avatar.png" alt="" /></button>
              <Alert  
                      text={alert.text}
                      btnText={'Close'} 
                      show={alert.show}
                      onClosePress={onCloseAlert}
              />
              </div>
            </div>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle split variant="secondary" className="dropdown-profile" id="dropdown-profile">
            <img className="profile-img" src="/avatar.png" alt="" />
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="https://flipsetter.com/portfolio" style={{ textDecoration: "none" }}><FaList />Portfolio</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/profile/user/username" style={{ textDecoration: "none" }}><FaUserCircle/>Profile</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/settings/user" style={{ textDecoration: "none" }}><FaCog />Settings</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/mission/Logout" style={{ textDecoration: "none" }}><FaSignOutAlt />Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
     
        {/* <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/avatar.png"
            }
            alt=""
            className="headerImg"
          />
        </Link> */}
     

      </div>
    </div>
  )
};

// For popup - yarn add --save react-popup-alert, then refer to line 33 and downward  source: https://www.npmjs.com/package/react-popup-alert
