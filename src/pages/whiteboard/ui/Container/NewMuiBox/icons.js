import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { styled } from '@mui/material/styles';
import MuiIcons from './muiicons';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { 
    FaFillDrip,
    FaChartBar,
    FaStickyNote,
    FaGlobe,
    FaTextHeight,
    FaImages,
    FaTimes,
    FaArrowsAlt,
    FaPuzzlePiece
    } 
    from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Icons({addTotalNumOfTipTaps, setBGImage, showCircleIcon, showArrowIcon, showPentagonIcon, showTrapezoidIcon, showHeptagonIcon, showOctagonIcon, showLineIcon, showDoubleArrowIcon, showRectangleIcon, showRightTriangleIcon, showStarIcon, showEquitriangleIcon, showHexagonIcon, showNonagonIcon, showSquareIcon, showDecagonIcon, showIcons}) {

  const [selectedImage, setSelectedImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  const [imageDisplay, setImageDisplay] = useState([]);

  const deleteImage = index => {
    let newArr = [...imageDisplay];
    newArr[index] = 'hidden';
    setImageDisplay([...newArr]);
    console.log(newArr)
    }

    const [imageHandlesShow, setImageHandlesShow] = useState([]);

    const resizableHandleStyles = {
        position: 'absolute',
        cursor: 'all-scroll', 
        width: '40%', 
        height: '40%', 
        top: '35%', 
        left: '25%'
    }

    const imageContainer = {
        position: 'absolute', 
        //visibility: 'hidden',
        width: '94.5%', 
        height: '90%', 
        margin: 'auto', 
        marginTop: '1%', 
        left: '2.8%', 
        right: '4%', 
        top: '8%'
    }

  const MyHandle = React.forwardRef((props, ref) => {
    const {handleAxis, ...restProps} = props;
        return <div 
            ref={ref}
            onMouseOver={() => setDisableDraggable(true)}
            onMouseLeave={() => setDisableDraggable(false)}
            //className={`react-resizable-handle react-resizable-handle-se`} 
            //style={{cursor: 'all-scroll', width: '40%', height: '40%', top: '20%', left: '20%', position: 'absolute'}}
            style={resizableHandleStyles}
            {...restProps} 
        />
  });

  const [height] = useState(100);
  const [width] = useState(100);

  useEffect(() => {
    let imageUrlArr = [];
    let imageDisplayArr = [...imageDisplay];

    selectedImage.forEach((image, index) => {
        let newImageUrl = URL.createObjectURL(selectedImage[index]);
        imageUrlArr.push(newImageUrl)
        //imageDisplayArr.push('visible')
    })
    setImageUrl([...imageUrlArr,])
    setImageDisplay([...imageDisplayArr]);

  }, [selectedImage]);

  // dragging functionality
  const [activeDrags, setActiveDrags] = useState(0);

    const onStartFunc = () => {
        let val = activeDrags;
        console.log(val)
        setActiveDrags(val++);
        };

    const onStopFunc = () => {
        let val = activeDrags;
        setActiveDrags(val--)
        };

    const [disableDraggable, setDisableDraggable] = useState(false);
    const dragHandlers = {onStart: onStartFunc, onStop: onStopFunc};

    // create BG image hook
    const [selectedBGImage, setSelectedBGImage] = useState(null);

    useEffect(() => {
        if(selectedBGImage) {
            const newImageUrl = URL.createObjectURL(selectedBGImage);
            setBGImage(newImageUrl);
        }
      }, [selectedBGImage]);

  return (
    <>
    {showIcons ? (
    <Box sx={{ width: '500px', marginLeft: '-500%', marginTop: '20%' }}>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Tooltip title="Fill Background With Current Color" placement="left">
            <Grid
            item 
            xs={2}
            //onClick={() => showCircleIcon()}
            >
            <Item>
                <FaFillDrip size={30}/> 
            </Item>
            </Grid>
        </Tooltip>
        <Tooltip title="Add Graph Paper" placement="bottom">
            <Grid 
            item 
            xs={2}
            //onClick={() => showArrowIcon()}
            >
            <Item>
                <FaChartBar size={30}/>
            </Item>
            </Grid>
        </Tooltip>
        <Tooltip title="Add Lined Paper" placement="right">
            <Grid 
                item 
                xs={2}
                //onClick={e => showTrapezoidIcon()}
                >
                <Item>
                    <FaStickyNote size={30}/>
                </Item>
            </Grid>
        </Tooltip>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1} paddingTop={1}>
            <Tooltip title="Upload Background Image" placement="left">
                <Grid 
                item 
                xs={2}
                //onClick={() => showOctagonIcon()}
                >
                <Item>
                <input
                    accept="image/*"
                    type="file"
                    id="select-background-image"
                    style={{ display: "none" }}
                    onChange={(e) => setSelectedBGImage(e.target.files[0])}
                    />
                    <label htmlFor="select-background-image">
                    <FaGlobe size={30}/>
                    </label>
                </Item>
                </Grid>
            </Tooltip>
            <Tooltip title="Upload Image" placement="bottom">
                <Grid 
                    item 
                    xs={2}
                    //onClick={e => showTrapezoidIcon()}
                    >
                    <Item>
                    <input
                        accept="image/*"
                        type="file"
                        multiple
                        id="select-image"
                        style={{ display: "none" }}
                        onChange={(e) => setSelectedImage([...selectedImage, ...e.target.files])}
                        />
                        <label htmlFor="select-image">
                        <FaImages size={30}/> 
                    </label>
                    
                    </Item>
                </Grid>
            </Tooltip>
            <Tooltip title="Add Textbox" placement="right">
                <Grid 
                    item 
                    xs={2}
                    //onClick={e => showTrapezoidIcon()}
                    >
                    <Item>
                        <FaTextHeight size={30} onClick={() => addTotalNumOfTipTaps()} />
                    </Item>
                </Grid>
            </Tooltip>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1} paddingTop={1}>
            <Tooltip title="Choose Background Pattern" placement="left">
                <Grid 
                item 
                xs={2}
                //onClick={() => showOctagonIcon()}
                >
                <Item>
                    <FaPuzzlePiece size={30}/>
                </Item>
                </Grid>
            </Tooltip>
          </Grid>
    </Box>
  ) : null}
    {selectedImage.map((el, index) => {
        return (
            
                <Draggable
                    //handle=".handle" 
                    {...dragHandlers}
                    key={index}
                    disabled={disableDraggable}
                    bounds={{left: -825, top: -350, right: 725, bottom: 350}}
                >
                <ResizableBox 
                    handle={imageHandlesShow[index] === 'visible' ? <MyHandle /> : <div></div>}
                    className="box box3 center-whiteboard-item"
                    style={{visibility: imageDisplay[index]}} 
                    width={width} 
                    height={height} 
                    minConstraints={[width, height]} 
                    maxConstraints={[1650, 750]}
                    //lockAspectRatio={true}
                    onMouseEnter={() => {
                        let newArr = [...imageHandlesShow];
                        newArr[index] = 'visible';
                        setImageHandlesShow([...newArr]);
                    }
                    }
                    onMouseLeave={() => {
                        let newArr = [...imageHandlesShow];
                        newArr[index] = 'hidden';
                        setImageHandlesShow([...newArr]);
                        }
                    }
                    >
                    <>
                    <FaTimes 
                    style={{visibility: imageHandlesShow[index]}} 
                    onClick={() => {
                        let newArr = [...imageHandlesShow];
                        newArr[index] = 'hidden';
                        setImageHandlesShow([...newArr]);
                        deleteImage(index)} 
                    }
                    />
                        <img 
                        src={imageUrl[index]} 
                        alt={selectedImage.length && selectedImage[index] && selectedImage[index].name ? selectedImage[index].name : null} 
                        height="100%" 
                        width="100%" 
                        />
                        {/*<span 
                        className="handle"
                        style={{visibility: imageHandlesShow[index]}}
                        >
                        <FaArrowsAlt/>
                </span>*/}
                    </>
                    </ResizableBox>
                </Draggable>
            
            );
        }
        )}
        </>
  );
}