import "./message.css";
import { 
  FaReply,
  FaTrash,
  FaLaughBeam,
  FaGrinTongue,
  FaGripVertical
} from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from '@mui/material/Tooltip';

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>    {/*Message own isn't working */}
        <div className="messageTop">
          <img className={own ? "hiddenImg messageImg" : "messageImg"} src="/avatar.png" alt=""/>
          <p className="messageText">
            <div className="messageTitleHour">
              <div className="messageTitle">John Doe</div>
              <div className="messageHour">1 hour ago</div>
            </div>
            <hr className="messageLine"/>
            <div className="messageDescription">
              Lorem Ipsum bottom. This is a test message, and it's cool! I'm going to duplicate this message!
            </div> 
          </p>
          <div  className={own ? "setting-own" : ""}>
            <div className="messageSetting">
              <Tooltip title="React" placement="top">
                <FaLaughBeam className="messageSettingIcon" />
              </Tooltip>
              <Tooltip title="Reply" placement="top">
                <FaReply className="messageSettingIcon" />
              </Tooltip>
              <Tooltip title="More Options" placement="top">
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle split variant="secondary" className="dropdown-option" id="dropdown-message-setting">
                    <FaGripVertical className="messageSettingIcon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    
                      <Dropdown.Item href="https://flipsetter.com/messenger?search" style={{ textDecoration: "none" }}><FaLaughBeam />React</Dropdown.Item>
                      <Dropdown.Item href="https://flipsetter.com/messenger?newGroup" style={{ textDecoration: "none" }}><FaReply />Reply</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{ textDecoration: "none" }}><FaGrinTongue />View Reactions</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{ textDecoration: "none" }}><FaTrash />Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Tooltip>
            </div>
          </div>
        </div>
    </div>
  );
}

