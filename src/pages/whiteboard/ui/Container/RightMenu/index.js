import React, { useState} from "react";
import { 
    FaUserPlus,
    FaLink,
    FaDownload,
    FaClone,
    FaPaperclip
} from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useTheme } from "@mui/material";
import './rightMenu.css';
import Tooltip from '@mui/material/Tooltip';

export default function RightMenu({rightMenuDisplay}) {

  const theme = useTheme();

  const [showRightCol, setShowRightCol] = useState('none');

  const showHideRightCol = () => {
      showRightCol === 'inline-block' ? setShowRightCol('none') : setShowRightCol('inline-block');
  }

  const iconStyles = {
    backgroundColor: '#3498db ',
    color: theme.palette.text.primary,
    border: '2px solid gray',
    borderRadius: theme.shape.borderRadius * 2,
    padding: `0 ${theme.spacing(2)}`,
    marginTop: '20%',
    fontWeight: theme.typography.fontWeightBold,
    zIndex: theme.zIndex.tooltip,
    boxShadow: theme.shadows[8]
  }
  console.log(rightMenuDisplay)
  return (
  <>
  {rightMenuDisplay === 'inline-block' ? (
    <div className="col-overlay-right-menu" style={{display: rightMenuDisplay}}>
        {/*---------------------------// Toggle section for streaming */}
      <div className="right-menu-container">
        <div className="right-menu">
          <div className="row">
            <div className="col">
       
                
                        <Tooltip title="Add People" placement="left">
                        <div 
                            style={iconStyles}
                        >
                            <FaUserPlus size={30} />
                        </div>
                        </Tooltip>
                        <Tooltip title="Generate Invite Link" placement="left">
                        <div 
                            style={iconStyles}
                        >
                            <FaLink size={30} />
                        </div>
                        </Tooltip>
                        <Tooltip title="Download Canvas Image" placement="left">
                        <div 
                            style={iconStyles}
                        >
                            <FaDownload size={30} />
                        </div>
                        </Tooltip>
                        <Tooltip title="Send Canvas Snapshot to Messages" placement="left">
                        <div 
                            style={iconStyles}
                        >
                            <FaClone size={30} />
                        </div>
                        </Tooltip>
                        <Tooltip title="Recent Files" placement="left">
                        <div 
                            style={iconStyles}
                        >
                            <FaPaperclip size={30} />
                        </div>
                        </Tooltip>
                  
       
            </div>
          </div>
        </div>
      </div>
        Placeholder text

    </div>
  ) : null }
  </>
  );
  }
