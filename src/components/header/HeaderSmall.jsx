import "./header.css";
import { FaChalkboardTeacher,
         FaShoppingCart,
         FaBars,
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
         FaClipboardList,
         FaBriefcase,
         FaSignOutAlt
         } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="mheaderSmallContainer">
      <div className="row">
        <div className="col-md-10">
      <div className="headerLeft">
        <img src="/logo.png" height="40px" width="40px" alt="image" href="https://www.flipsetter.com"/>
        <div className="m-logo">
          <div className="logo-title">Collaborate</div>
          <div className="logo-Subtitle">by FlipSetter</div>
        </div>
        </div>
        </div>
        <div className="col-md-2">
        <div className="headerLinks">
            <div className="btn btn-secondary options mt-2">
                <FaBars />
            </div>
          {/*<a className="headerLink" href="https://flipsetter.com/subscriptions" style={{ textDecoration: "none" }}>Subscription <FaShoppingCart className="m-icon" /></a>*/}
        </div>
        </div>
      </div>

      {/* <div className="headerCenter">
        <div className="searchbar">
          <div className="searchIcon">
          <FaSearch />
          </div>
          <input
            placeholder="Search profiles..."
            className="searchInput"
          />
        </div>
      </div> */}
      
      {/*<div className="headerRight">  
        <div className="headerIcons">
          <div className="headerIconItem">
            <FaVideo />
          </div>
          <div className="headerIconItem">
            <FaUser />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <FaComment />
            <span className="headerIconBadge">2</span>
          </div>
          <div className="headerIconItem">
            <FaBell />
            <span className="headerIconBadge">1</span>
          </div>
    </div>*/}

        {/*<Dropdown as={ButtonGroup}>
          <Dropdown.Toggle split variant="secondary" className="dropdown-admin" id="dropdown-admin">Admin</Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="https://flipsetter.com/mission/horizon/dashboard" style={{ textDecoration: "none" }}><FaBriefcase />Horizon</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/mission/control" style={{ textDecoration: "none" }}><FaPeriscope/>Telescope</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/mission/janus" style={{ textDecoration: "none" }}><FaVideo />Janus</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/mission/logs" style={{ textDecoration: "none" }}><FaClipboardList />Error Logs</Dropdown.Item>
            <Dropdown.Item href="https://flipsetter.com/mission/admin" style={{ textDecoration: "none" }}><FaUserShield />Site Dashboard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
</Dropdown>*/}
     
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
        </Link> 
     

      </div>*/}
    </div>
  )
};

// For the commented section, check documentation on TypeError: Cannot read properties of null (reading 'username')
