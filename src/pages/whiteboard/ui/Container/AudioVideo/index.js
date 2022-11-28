import React, { useState} from "react";
import { 
    FaBroadcastTower,
    FaSignOutAlt,
    FaEyeSlash,
    FaStop,
    FaExternalLinkAlt
} from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useTheme } from "@mui/material";
import './audiovideo.css';
import Tooltip from '@mui/material/Tooltip';

export default function AudioVideo() {

  const theme = useTheme();

  const [showRightCol, setShowRightCol] = useState('none');

  const showHideRightCol = () => {
      showRightCol === 'inline-block' ? setShowRightCol('none') : setShowRightCol('inline-block');
  }

  const iconStyles = {
    backgroundColor: theme.palette.grey.A200,
    color: theme.palette.text.primary,
    border: '2px solid gray',
    borderRadius: theme.shape.borderRadius * 2,
    padding: `0 ${theme.spacing(2)}`,
    fontWeight: theme.typography.fontWeightBold,
    zIndex: theme.zIndex.tooltip,
    boxShadow: theme.shadows[8]
  }

  return (
  <>
  {showRightCol === 'inline-block' ? (
    <div className="col-overlay-right" style={{display: showRightCol}}>
        {/*---------------------------// Toggle section for streaming */}
      <div className="audioVideo-container">
        <div className="audioVideo">
          <div className="row">
            <div className="col">
              <Tooltip title="Streaming Options" placement="right">
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle split variant="secondary" className="dropdown-option options" id="dropdown-profile">
                    <FaBroadcastTower size={30} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" style={{ textDecoration: "none" }} onClick={() => showHideRightCol()}><FaEyeSlash />Hide Streams</Dropdown.Item>
                    <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaStop />Unpublish Stream</Dropdown.Item>
                    <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaSignOutAlt />Leave Room</Dropdown.Item>
                    <Dropdown.Item href="#" style={{ textDecoration: "none" }}><FaExternalLinkAlt />Pop-out Streams</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                </Tooltip>
            </div>
          </div>
        </div>
      </div>
        Placeholder text

    </div>
  ) : (
    <>
    <Tooltip title="Streaming Options" placement="left">
      <div className="audioVideo-tower-icon">
        <button><FaBroadcastTower size={60} onClick={() => showHideRightCol()} /></button>
      </div>
    </Tooltip>
    </>
  )}
  </>
  );
  }
