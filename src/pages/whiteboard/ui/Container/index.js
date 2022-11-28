import React, { useState } from "react";
import Board from "./Board";
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { Box } from "@mui/material";
import { FaArrowsAlt, FaTimes } from "react-icons/fa";
import "./Container.css";
import TipTap from './TipTap';
import Messenger from './Messenger';
import AudioVideo from './AudioVideo';
import NewMuiBox from './NewMuiBox';
import RightMenu from './RightMenu';
import { styled } from '@mui/material/styles';
import CircleIcon from '../../../../assets/Shapes/SVGWithoutPath/circleicon.svg';
import ArrowIcon from '../../../../assets/Shapes/SVGWithoutPath/arrowicon.svg';
import PentagonIcon from '../../../../assets/Shapes/SVGWithoutPath/pentagonicon.svg';
import TrapezoidIcon from '../../../../assets/Shapes/SVGWithoutPath/trapezoidicon.svg';
import HeptagonIcon from '../../../../assets/Shapes/SVGWithoutPath/heptagonicon.svg';
import OctagonIcon from '../../../../assets/Shapes/SVGWithoutPath/octagonicon.svg';
import LineIcon from '../../../../assets/Shapes/SVGWithoutPath/lineicon.svg';
import DoubleArrowIcon from '../../../../assets/Shapes/SVGWithoutPath/doarrowicon.svg';
import RectangleIcon from '../../../../assets/Shapes/SVGWithoutPath/recticon.svg';
import RightTriangleIcon from '../../../../assets/Shapes/SVGWithoutPath/rtriangleicon.svg';
import StarIcon from '../../../../assets/Shapes/SVGWithoutPath/staricon.svg';
import EquitriangleIcon from '../../../../assets/Shapes/SVGWithoutPath/equitriangleicon.svg';
import HexagonIcon from '../../../../assets/Shapes/SVGWithoutPath/hexagonicon.svg';
import NonagonIcon from '../../../../assets/Shapes/SVGWithoutPath/nonagonicon.svg';
import SquareIcon from '../../../../assets/Shapes/SVGWithoutPath/squareicon.svg';
import DecagonIcon from '../../../../assets/Shapes/SVGWithoutPath/decicon.svg';

const Container = () => {
    //const [setDesc] = useState("");
    const [showTotalNumOfTipTaps, setShowTotalNumOfTipTaps] = useState([]);

    const deleteTipTap = index => {
        let newArr = [...showTotalNumOfTipTaps];
        newArr[index] = 'none';
        setShowTotalNumOfTipTaps([...newArr]);
    }

    const toggleTipTapDisplay = () => {
        setShowTotalNumOfTipTaps([...showTotalNumOfTipTaps, 'block'])
    }

    const addTotalNumOfTipTaps = () => {
        setShowTotalNumOfTipTaps([...showTotalNumOfTipTaps, 'block']);
    }

    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);

    const [circleIconDisplay, setCircleIconDisplay] = useState([]);
    const [arrowIconDisplay, setArrowIconDisplay] = useState([]);
    const [pentagonIconDisplay, setPentagonIconDisplay] = useState([]);
    const [trapezoidIconDisplay, setTrapezoidIconDisplay] = useState([]);
    const [heptagonIconDisplay, setHeptagonIconDisplay] = useState([]);
    const [octagonIconDisplay, setOctagonIconDisplay] = useState([]);
    const [lineIconDisplay, setLineIconDisplay] = useState([]);
    const [doubleArrowIconDisplay, setDoubleArrowIconDisplay] = useState([]);
    const [rectangleIconDisplay, setRectangleIconDisplay] = useState([]);
    const [rightTriangleIconDisplay, setRightTriangleIconDisplay] = useState([]);
    const [starIconDisplay, setStarIconDisplay] = useState([]);
    const [equitriangleIconDisplay, setEquitriangleIconDisplay] = useState([]);
    const [hexagonIconDisplay, setHexagonIconDisplay] = useState([]);
    const [nonagonIconDisplay, setNonagonIconDisplay] = useState([]);
    const [squareIconDisplay, setSquareIconDisplay] = useState([]);
    const [decagonIconDisplay, setDecagonIconDisplay] = useState([]);

    const showCircleIcon = () => {
        console.log('circle')
        setCircleIconDisplay([...circleIconDisplay, 'visible']);
    }
    const showArrowIcon = () => {
        console.log('arrow')
        setArrowIconDisplay([...arrowIconDisplay, 'visible']);
    }
    const showPentagonIcon = () => {
        console.log('pentagon')
        setPentagonIconDisplay([...pentagonIconDisplay, 'visible']);
    }
    const showTrapezoidIcon = () => {
        console.log('trap')
        setTrapezoidIconDisplay([...trapezoidIconDisplay, 'visible']);
    }
    const showHeptagonIcon = () => {
        console.log('heptgon')
        setHeptagonIconDisplay([...heptagonIconDisplay, 'visible']);
    }
    const showOctagonIcon = () => {
        setOctagonIconDisplay([...octagonIconDisplay, 'visible']);
    }
    const showLineIcon = () => {
        setLineIconDisplay([...lineIconDisplay, 'visible']);
    }
    const showDoubleArrowIcon = () => {
        setDoubleArrowIconDisplay([...doubleArrowIconDisplay, 'visible']);
    }
    const showRectangleIcon = () => {
        setRectangleIconDisplay([...rectangleIconDisplay, 'visible']);
    }
    const showRightTriangleIcon = () => {
        setRightTriangleIconDisplay([...rightTriangleIconDisplay, 'visible']);
    }
    const showStarIcon = () => {
        setStarIconDisplay([...starIconDisplay, 'visible']);
    }
    const showEquitriangleIcon = () => {
        setEquitriangleIconDisplay([...equitriangleIconDisplay, 'visible']);
    }
    const showHexagonIcon = () => {
        setHexagonIconDisplay([...hexagonIconDisplay, 'visible']);
    }
    const showNonagonIcon = () => {
        setNonagonIconDisplay([...nonagonIconDisplay, 'visible']);
    }
    const showSquareIcon = () => {
        setSquareIconDisplay([...squareIconDisplay, 'visible']);
    }
    const showDecagonIcon = () => {
        setDecagonIconDisplay([...decagonIconDisplay, 'visible']);
    }

    const deleteShape = (index, arr, setArr) => {
        let newArr = [...arr];
        newArr[index] = 'hidden';
        setArr([...newArr]);
    }

    const [circleHandlesShow, setCircleHandlesShow] = useState([]);
    const [arrowHandlesShow, setArrowHandlesShow] = useState([]);
    const [pentagonHandleShow, setPentagonHandleShow] = useState([]);
    const [trapezoidHandleShow, setTrapezoidHandleShow] = useState([]);
    const [heptagonHandleShow, setHeptagonHandleShow] = useState([]);
    const [octagonHandleShow, setOctagonHandleShow] = useState([]);
    const [lineHandleShow, setLineHandleShow] = useState([]);
    const [doubleArrowHandleShow, setDoubleArrowHandleShow] = useState([]);
    const [rectangleHandleShow, setRectangleHandleShow] = useState([]);
    const [rightTriangleHandleShow, setRightTriangleHandleShow] = useState([]);
    const [starHandleShow, setStarHandleShow] = useState([]);
    const [equitriangleHandleShow, setEquitriangleHandleShow] = useState([]);
    const [hexagonHandleShow, setHexagonHandleShow] = useState([]);
    const [nonagonHandleShow, setNonagonHandleShow] = useState([]);
    const [squareHandleShow, setSquareHandleShow] = useState([]);
    const [decagonHandleShow, setDecagonHandleShow] = useState([]);

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
        visibility: 'hidden',
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
            return (
                <div
                    ref={ref} 
                    //className={`react-resizable-handle react-resizable-handle-se`} 
                    style={resizableHandleStyles}
                    {...restProps} 
                    onMouseOver={() => setDisableDraggable(true)}
                    onMouseLeave={() => setDisableDraggable(false)}
                />
            )
      });

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

      // Show/hide right menu box
    const [rightMenuDisplay, setRightMenuDisplay] = useState('none');
    const showHideRightMenu = () => {
        rightMenuDisplay === 'inline-block' ? setRightMenuDisplay('none') : setRightMenuDisplay('inline-block');
    }

    // hook to set background images
    const [BGImage, setBGImage] = useState('');

    const shapeIcon = (index, icon, iconDisplay, setIconDisplay, shapeHandlesShow, setShapeHandlesShow) => {
        const dragHandlers = {onStart: onStartFunc, onStop: onStopFunc};
  
        return (
            <div style={imageContainer}>
            <Draggable 
                //handle=".handle" 
                {...dragHandlers}
                key={index}
                disabled={disableDraggable}
                bounds="parent"
                >
            <ResizableBox 
                handle={shapeHandlesShow[index] === 'visible' ? <MyHandle /> : <div></div>}
                className="box box3 center-whiteboard-item" 
                style={{visibility: iconDisplay[index], zIndex: 1}}
                width={width} 
                height={height} 
                lockAspectRatio={true}
                minConstraints={[width, height]} 
                maxConstraints={[750, 750]}
                onMouseEnter={() => {
                    let newArr = [...shapeHandlesShow];
                    newArr[index] = 'visible';
                    setShapeHandlesShow([...newArr]);
                    }
                }
                onMouseLeave={() => {
                    let newArr = [...shapeHandlesShow];
                    newArr[index] = 'hidden';
                    setShapeHandlesShow([...newArr]);
                    }
                }
            >
                <>
                <FaTimes 
                    style={{visibility: shapeHandlesShow[index]}} 
                    onClick={() => {
                        let newArr = [...shapeHandlesShow];
                        newArr[index] = 'hidden';
                        setShapeHandlesShow([...newArr]);
                        deleteShape(index, iconDisplay, setIconDisplay)
                        }
                    }
                    />
                    <img src={icon} width="100%" height="100%" />
                    {/*<span
                        className="handle" 
                        style={{visibility: shapeHandlesShow[index]}}
                    >
                        <FaArrowsAlt/>
                </span>*/}
                </>
            </ResizableBox>
            </Draggable>
            </div>
        );
    }

    return (
        <>
        <div className="whiteboard-container">
            <Messenger />
            <AudioVideo />
            <RightMenu rightMenuDisplay={rightMenuDisplay} />
            {/* replace color picker with rainbow and add color functionality */}
            <div className="color-picker-container">               
                <input type="color" />
            </div>
            {showTotalNumOfTipTaps.map((el, index) => {
            return (
                <div id={index} style={{display: showTotalNumOfTipTaps[index]}}>
                    <TipTap 
                        //setDesc={setDesc} 
                        toggleTipTapDisplay={toggleTipTapDisplay} 
                        index={index} 
                        deleteTipTap={deleteTipTap} 
                    />
                </div>
                );
            })}
            {circleIconDisplay.map((circle, index) => {
                return shapeIcon(index, CircleIcon, circleIconDisplay, setCircleIconDisplay, circleHandlesShow, setCircleHandlesShow);
            })}
            {arrowIconDisplay.map((arrow, index) => {
                return shapeIcon(index, ArrowIcon, arrowIconDisplay, setArrowIconDisplay, arrowHandlesShow, setArrowHandlesShow);
            })}
            {pentagonIconDisplay.map((pentagon, index) => {
                return shapeIcon(index, PentagonIcon, pentagonIconDisplay, setPentagonIconDisplay, pentagonHandleShow, setPentagonHandleShow);
            })}
            {trapezoidIconDisplay.map((trapezoid, index) => {
                return shapeIcon(index, TrapezoidIcon, trapezoidIconDisplay, setTrapezoidIconDisplay, trapezoidHandleShow, setTrapezoidHandleShow);
            })}
            {heptagonIconDisplay.map((heptagon, index) => {
                return shapeIcon(index, HeptagonIcon, heptagonIconDisplay, setHeptagonIconDisplay, heptagonHandleShow, setHeptagonHandleShow);
            })}
            {octagonIconDisplay.map((octagon, index) => {
                return shapeIcon(index, OctagonIcon, octagonIconDisplay, setOctagonIconDisplay, octagonHandleShow, setOctagonHandleShow);
            })}
            {lineIconDisplay.map((line, index) => {
                return shapeIcon(index, LineIcon, lineIconDisplay, setLineIconDisplay, lineHandleShow, setLineHandleShow);
            })}
            {doubleArrowIconDisplay.map((doubleArrow, index) => {
                return shapeIcon(index, DoubleArrowIcon, doubleArrowIconDisplay, setDoubleArrowIconDisplay, doubleArrowHandleShow, setDoubleArrowHandleShow);
            })}
            {rectangleIconDisplay.map((rectangle, index) => {
                return shapeIcon(index, RectangleIcon, rectangleIconDisplay, setRectangleIconDisplay, rectangleHandleShow, setRectangleHandleShow);
            })}
            {rightTriangleIconDisplay.map((rightTriangle, index) => {
                return shapeIcon(index, RightTriangleIcon, rightTriangleIconDisplay, setRightTriangleIconDisplay, rightTriangleHandleShow, setRightTriangleHandleShow);
            })}
            {starIconDisplay.map((star, index) => {
                return shapeIcon(index, StarIcon, starIconDisplay, setStarIconDisplay, starHandleShow, setStarHandleShow);
            })}
            {equitriangleIconDisplay.map((equitriangle, index) => {
                return shapeIcon(index, EquitriangleIcon, equitriangleIconDisplay, setEquitriangleIconDisplay, equitriangleHandleShow, setEquitriangleHandleShow);
            })}
            {hexagonIconDisplay.map((hexagon, index) => {
                return shapeIcon(index, HexagonIcon, hexagonIconDisplay, setHexagonIconDisplay, hexagonHandleShow, setHexagonHandleShow);
            })}
            {nonagonIconDisplay.map((nonagon, index) => {
                return shapeIcon(index, NonagonIcon, nonagonIconDisplay, setNonagonIconDisplay, nonagonHandleShow, setNonagonHandleShow);
            })}
            {squareIconDisplay.map((square, index) => {
                return shapeIcon(index, SquareIcon, squareIconDisplay, setSquareIconDisplay, squareHandleShow, setSquareHandleShow);
            })}
            {decagonIconDisplay.map((decagon, index) => {
                return shapeIcon(index, DecagonIcon, decagonIconDisplay, setDecagonIconDisplay, decagonHandleShow, setDecagonHandleShow);
            })}
            <NewMuiBox 
                addTotalNumOfTipTaps={addTotalNumOfTipTaps} 
                showHideRightMenu={showHideRightMenu}
                rightMenuDisplay={rightMenuDisplay}
                setRightMenuDisplay={setRightMenuDisplay}
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
            />
            <div className="board-container">
                <Board BGImage={BGImage} />
            </div>
        </div>
        </>
    )
}

export default Container;

// Add your other buttons where the div class is for the color picker

// Note: app was crashing due to latest electron release.  Added setting adjustment fix
// to public->main.js as fix, and will be sent up in next push. However, it is not working.
// Now reference https://bobbyhadz.com/blog/react-referenceerror-process-not-defined
// New fix is run in client folder: yarn add react-scripts@latest
