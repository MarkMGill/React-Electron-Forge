import React, { useState } from "react";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Icons from './icons';
import MuiIcons from './muiicons';
import { StyledEngineProvider } from "@mui/material/styles";
import { Grid, Box, Paper, useTheme } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import './index.css';
import { 
  FaShapes, 
  FaPlus, 
  FaMinus,
  FaRainbow,
  FaEraser,
  FaUndo,
  FaRedo,
  FaTrash,
  FaSyncAlt,
  FaFill,
  FaVideo,
  FaVideoSlash,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash,
  FaDesktop,
  FaTimesCircle,
  FaDoorClosed,
  FaQuestionCircle,
  FaBars
  } 
  from "react-icons/fa";
         
export default function MuiBox({addTotalNumOfTipTaps, setBGImage, showHideRightMenu, showCircleIcon, showArrowIcon, showPentagonIcon, showTrapezoidIcon, showHeptagonIcon, showOctagonIcon, showLineIcon, showDoubleArrowIcon, showRectangleIcon, showRightTriangleIcon, showStarIcon, showEquitriangleIcon, showHexagonIcon, showNonagonIcon, showSquareIcon, showDecagonIcon}) {
  const theme = useTheme();

  const [showIcons, setShowIcons] = useState(false);
  const [showMuiIcons, setShowMuiIcons] = useState(false);

  const toggleIcons = () => {
    showIcons ? setShowIcons(false) : setShowIcons(true);
  }
  const toggleMuiIcons = () => {
    showMuiIcons ? setShowMuiIcons(false) : setShowMuiIcons(true);
  }

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const iconStyles = {
    border: '2px solid gray',
    borderRadius: theme.shape.borderRadius * 2,
    //padding: `0 ${theme.spacing(2)}`,
    padding: '0 0.5px 0 0.5px',
    fontWeight: theme.typography.fontWeightBold,
    zIndex: theme.zIndex.tooltip,
    boxShadow: theme.shadows[8],
    textAlign: 'center'
  }

  return (
    <StyledEngineProvider injectFirst>
      <Grid container>
      <Grid item md={3} pl={3} style={{color: '#fff'}}>FlipSetter</Grid>
      <Grid item md={6}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        gap: .5,
        '& > *': {
          width: 30,
          height: 35,
        },
      }}
    >
      
      
        <div
          style={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <Tooltip title="Change Background" placement="left">
            <div>
              <FaFill onClick={() => toggleIcons()} size={25} />
            </div>
          </Tooltip>
              <Icons
                addTotalNumOfTipTaps={addTotalNumOfTipTaps}
                setBGImage={setBGImage}
                showCircleIcon={showCircleIcon} 
                showArrowIcon={showArrowIcon}
                showPentagonIcon={showPentagonIcon}
                showTrapezoidIcon={showTrapezoidIcon}
                showHeptagonIcon={showHeptagonIcon}
                showOctagonIcon={showOctagonIcon}
                showLineIcon={showLineIcon}
                showDoubleArrowIcon={showDoubleArrowIcon}
                showRectangleIcon={showRectangleIcon}
                showRightTriangleIcon={showRightTriangleIcon}
                showStarIcon={showStarIcon}
                showEquitriangleIcon={showEquitriangleIcon}
                showHexagonIcon={showHexagonIcon}
                showNonagonIcon={showNonagonIcon}
                showSquareIcon={showSquareIcon}
                showDecagonIcon={showDecagonIcon}
                showIcons={showIcons}
            /> 
      </div>
      
      {/*// the parts here are listed in the backend of the code for web. For now, we can set this set of buttons as a dropdown similar to the MuiBox. Essentially, another Nav Item */}
      <Tooltip title="Shapes" placement="bottom">
        <div 
          style={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
            <FaShapes 
              onClick={() => toggleMuiIcons()}
              size={25}
            />
            {showMuiIcons &&
              <MuiIcons 
                showCircleIcon={showCircleIcon} 
                showArrowIcon={showArrowIcon}
                showPentagonIcon={showPentagonIcon}
                showTrapezoidIcon={showTrapezoidIcon}
                showHeptagonIcon={showHeptagonIcon}
                showOctagonIcon={showOctagonIcon}
                showLineIcon={showLineIcon}
                showDoubleArrowIcon={showDoubleArrowIcon}
                showRectangleIcon={showRectangleIcon}
                showRightTriangleIcon={showRightTriangleIcon}
                showStarIcon={showStarIcon}
                showEquitriangleIcon={showEquitriangleIcon}
                showHexagonIcon={showHexagonIcon}
                showNonagonIcon={showNonagonIcon}
                showSquareIcon={showSquareIcon}
                showDecagonIcon={showDecagonIcon}
            /> 
          }
        </div> 
      </Tooltip>  
      <Tooltip title="Change Color" placement="bottom">   
        <div 
          style={{
            backgroundColor: theme.palette.grey.A700,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaRainbow size={25}/> 
      </div>
    </Tooltip>
    <Tooltip title="Enable Eraser" placement="bottom"> 
      <div 
          style={{
            backgroundColor: theme.palette.grey.A400,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaEraser size={25}/> 
      </div>
    </Tooltip>
    <Tooltip title="Undo" placement="bottom">
      <div 
        style={{
          backgroundColor: theme.palette.error.main,
          color: theme.palette.text.primary,
          ...iconStyles
        }}
      >
          <FaUndo size={25}/> 
      </div>
    </Tooltip>
    <Tooltip title="Redo" placement="bottom">
      <div 
          style={{
            backgroundColor: theme.palette.info.light,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaRedo size={25}/>
      </div>
    </Tooltip>
    <Tooltip title="Clear Whiteboard" placement="bottom">
      <div 
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
        <FaTrash size={25} /> 
      </div>
    </Tooltip>
    <Tooltip title="Refresh Whiteboard" placement="bottom">
      <div 
          style={{
            backgroundColor: theme.palette.success.light,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaSyncAlt size={25}/> 
      </div>
    </Tooltip>
    <Tooltip title="Zoom In" placement="bottom">
      <div 
          style={{
            backgroundColor: theme.palette.grey.A200,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaPlus size={25} />
      </div>
    </Tooltip>
    <Tooltip title="Zoom Out" placement="bottom">
      <div 
          style={{
            backgroundColor: theme.palette.grey.A200,
            color: theme.palette.text.primary,
            ...iconStyles
          }}
        >
          <FaMinus size={25} />
      </div>
    </Tooltip>
    </Box>
    </Grid>
    <Grid item md={3} pr={3}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        gap: .5,
        '& > *': {
          width: 30,
          height: 35,
        },
      }}
    >
    <Tooltip title="Video On" placement="bottom">
      <div style={iconStyles}>
          <FaVideo size={25} />
      </div>
    </Tooltip>
    <Tooltip title="Video Off" placement="bottom">
      <div style={iconStyles}>
          <FaVideoSlash size={25} />
      </div>
    </Tooltip>
    <Tooltip title="Mic On" placement="bottom">
        <div style={iconStyles}>
            <FaMicrophoneAlt size={25} />
        </div>
    </Tooltip>
    <Tooltip title="Mic Off" placement="bottom">
        <div style={iconStyles}>
            <FaMicrophoneAltSlash size={25} />
        </div>
    </Tooltip>
    <Tooltip title="Screenshare" placement="bottom">
        <div style={iconStyles}>
            <FaDesktop size={25} />
        </div>
    </Tooltip>
    <Tooltip title="End Whiteboard" placement="bottom">
        <div 
            style={iconStyles}
        >
            <FaTimesCircle size={25} />
        </div>
    </Tooltip>
    <Tooltip title="Leave Whiteboard" placement="bottom">
        <div 
            style={iconStyles}
        >
            <FaDoorClosed size={25} />
        </div>
    </Tooltip>
    <Tooltip title="Start Whiteboard Tutorial" placement="bottom">
        <div 
            style={iconStyles}
        >
            <FaQuestionCircle size={25} />
        </div>
    </Tooltip>
        {/*--------------------------// The FaBars creates another dropdown menu */}
    <Tooltip title="More Tools" placement="bottom">
        <div 
            style={iconStyles}
            onClick={() => showHideRightMenu()}
        >
            <FaBars size={25} />
        </div>
    </Tooltip>
    </Box>
    </Grid>
    </Grid>
    </StyledEngineProvider>
  );
}

