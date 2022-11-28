import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MuiIcons({showCircleIcon, showArrowIcon, showPentagonIcon, showTrapezoidIcon, showHeptagonIcon, showOctagonIcon, showLineIcon, showDoubleArrowIcon, showRectangleIcon, showRightTriangleIcon, showStarIcon, showEquitriangleIcon, showHexagonIcon, showNonagonIcon, showSquareIcon, showDecagonIcon}) {

  return (
    <Box sx={{ width: '500px', marginTop: '30%' }}>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid
         item 
         xs={2}
         onClick={() => showCircleIcon()}
        >
          <Tooltip title="Circle" placement="left">
          <Item>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="44.000000pt" height="41.000000pt"
    viewBox="0 0 44.000000 41.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,41.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path d="M135 387 c-139 -64 -154 -251 -27 -338 51 -34 153 -34 204 0 61 42
    83 85 83 161 0 76 -22 119 -83 160 -41 29 -132 37 -177 17z m138 -21 c44 -18
    95 -78 103 -121 11 -60 -4 -106 -50 -151 -46 -46 -91 -61 -153 -49 -50 9 -119
    78 -128 128 -11 55 2 103 38 144 53 60 122 78 190 49z" />
    </g>
    </svg></Item>
    </Tooltip>
        </Grid>
        <Grid 
          item 
          xs={2}
          onClick={() => showArrowIcon()}
        >
          <Tooltip title="Arrow" placement="bottom">
          <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="29.000000pt" height="20.000000pt"
    viewBox="0 0 29.000000 20.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M190 147 l0 -27 -75 0 c-68 0 -75 -2 -75 -20 0 -18 7 -20 75 -20 l75
0 0 -32 0 -33 25 43 25 44 -25 36 c-25 37 -25 37 -25 9z" />
    </g>
</svg></Item>
        </Tooltip>
        </Grid>
        <Tooltip title="Pentagon" placement="bottom">
          <Grid 
            item 
            xs={2}
            onClick={() => showPentagonIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32.000000pt" height="30.000000pt"
      viewBox="0 0 32.000000 30.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M98 233 c-37 -27 -68 -53 -68 -59 0 -5 11 -41 23 -80 l24 -69 88 0
  88 0 24 69 c12 39 23 75 23 80 0 10 -120 106 -131 106 -2 0 -34 -21 -71 -47z
  m132 -15 l57 -43 -24 -72 -25 -73 -73 0 -73 0 -25 73 -24 72 61 43 c33 23 62
  42 64 42 2 0 30 -19 62 -42z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Trapezoid" placement="right">
          <Grid 
            item 
            xs={2}
            onClick={e => showTrapezoidIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="34.000000pt" height="25.000000pt"
      viewBox="0 0 34.000000 25.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M67 223 c-4 -7 -18 -54 -53 -175 -5 -17 7 -18 145 -18 83 0 151 3
  150 8 0 4 -15 47 -32 97 l-32 90 -87 3 c-47 1 -88 -1 -91 -5z m189 -75 c12
  -36 25 -76 29 -87 6 -21 4 -21 -124 -21 -72 0 -131 3 -131 7 0 4 11 45 25 90
  l26 84 76 -3 76 -3 23 -67z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Tooltip title="Heptagon" placement="left">
            <Grid 
              item 
              xs={2}
              onClick={e => showHeptagonIcon()}
            >
                  <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="33.000000pt" height="34.000000pt"
            viewBox="0 0 33.000000 34.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M114 273 c-60 -45 -59 -43 -73 -109 -12 -53 -12 -54 20 -94 32 -40
        32 -40 104 -40 72 0 72 0 104 40 30 38 32 44 26 94 -4 29 -10 57 -13 63 -10
        13 -103 83 -112 83 -4 0 -29 -17 -56 -37z m107 -15 c43 -30 48 -37 56 -89 9
        -54 8 -57 -23 -92 -29 -35 -35 -37 -89 -37 -54 0 -60 2 -90 37 l-32 37 14 55
        c13 49 21 60 61 88 26 18 49 33 51 33 3 0 26 -15 52 -32z" />
            </g>
        </svg></Item>
            </Grid>
          </Tooltip>
          <Tooltip title="Octagon" placement="bottom">
            <Grid 
              item 
              xs={2}
              onClick={() => showOctagonIcon()}
            >
              <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32.000000pt" height="32.000000pt"
        viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M47 262 c-35 -36 -37 -41 -37 -103 0 -62 2 -67 38 -102 37 -36 40
    -37 113 -37 l76 0 31 39 c28 35 32 47 32 101 0 54 -4 66 -32 101 l-31 39 -77
    0 c-75 0 -77 -1 -113 -38z m211 -12 c27 -32 32 -47 32 -90 0 -43 -5 -58 -32
    -90 -32 -39 -35 -40 -98 -40 -61 0 -66 2 -102 37 -35 34 -38 42 -38 92 0 50 3
    59 37 93 35 36 40 38 103 38 63 0 66 -1 98 -40z" />
        </g>
    </svg></Item>
            </Grid>
        </Tooltip>
        <Tooltip title="Line" placement="bottom">
          <Grid 
            item 
            xs={2}
            onClick={() => showLineIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="46.000000pt" height="19.000000pt"
      viewBox="0 0 46.000000 19.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,19.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M40 100 c0 -19 7 -20 175 -20 168 0 175 1 175 20 0 19 -7 20 -175 20
  -168 0 -175 -1 -175 -20z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Double Arrow" placement="right">
          <Grid 
            item 
            xs={2}
            onClick={() => showDoubleArrowIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="21.000000pt"
      viewBox="0 0 28.000000 21.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,21.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M27 145 c-16 -33 -15 -37 4 -77 18 -41 19 -41 14 -10 l-4 32 84 0 84
  0 -4 -32 c-5 -31 -4 -30 15 10 l20 43 -21 37 c-17 33 -19 34 -14 10 l5 -28
  -83 0 -84 0 5 25 c6 35 -1 31 -21 -10z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Tooltip title="Rectangle" placement="left">
            <Grid 
              item 
              xs={2}
              onClick={() => showRectangleIcon()}
            >
              <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="39.000000pt" height="28.000000pt"
        viewBox="0 0 39.000000 28.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M10 145 l0 -125 175 0 175 0 0 125 0 125 -175 0 -175 0 0 -125z m340
    0 l0 -115 -165 0 -165 0 0 115 0 115 165 0 165 0 0 -115z" />
        </g>
    </svg></Item>
            </Grid>
          </Tooltip>
          <Tooltip title="Right Triangle" placement="bottom">
            <Grid 
              item 
              xs={2}
              onClick={() => showRightTriangleIcon()}
            >
              <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="35.000000pt" height="36.000000pt"
        viewBox="0 0 35.000000 36.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M30 180 l0 -150 152 0 153 0 -150 150 c-82 83 -151 150 -152 150 -2
    0 -3 -67 -3 -150z m145 -10 l130 -130 -133 0 -132 0 0 130 c0 72 1 130 3 130
    1 0 61 -58 132 -130z" />
        </g>
    </svg></Item>
            </Grid>
        </Tooltip>
        <Tooltip title="Star" placement="bottom">
          <Grid 
            item 
            xs={2}
            onClick={() => showStarIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32.000000pt" height="31.000000pt"
      viewBox="0 0 32.000000 31.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M141 245 c-23 -43 -26 -45 -69 -45 l-46 0 35 -37 36 -38 -14 -45 c-7
  -25 -12 -48 -11 -52 2 -4 24 6 49 22 l46 28 44 -28 c24 -16 44 -28 46 -26 2 1
  -3 25 -10 54 l-14 51 36 35 36 36 -47 0 c-45 0 -46 1 -65 45 -10 25 -20 45
  -23 45 -3 0 -16 -20 -29 -45z m45 -20 c13 -31 18 -35 51 -35 l37 0 -28 -29
  c-25 -26 -27 -32 -17 -67 6 -21 9 -39 7 -41 -2 -2 -14 6 -29 17 -32 25 -42 25
  -79 -1 -16 -12 -31 -19 -33 -17 -3 2 1 21 7 41 11 35 10 39 -17 67 l-29 30 37
  0 c33 0 39 4 54 35 9 19 18 35 20 35 2 0 11 -16 19 -35z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Triangle" placement="right">
          <Grid 
            item 
            xs={2}
            onClick={() => showEquitriangleIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="37.000000pt" height="32.000000pt"
      viewBox="0 0 37.000000 32.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M102 170 l-73 -140 151 0 151 0 -73 140 c-40 77 -75 140 -78 140 -3
  0 -38 -63 -78 -140z m145 -10 l63 -120 -130 0 -130 0 63 120 c34 66 64 120 67
  120 3 0 33 -54 67 -120z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={1}>
        <Tooltip title="Hexagon" placement="left">
          <Grid 
            item 
            xs={2}
            onClick={() => showHexagonIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32.000000pt" height="34.000000pt"
      viewBox="0 0 32.000000 34.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M88 273 l-68 -48 0 -65 0 -65 71 -38 70 -39 64 39 65 38 0 65 0 65
  -64 48 c-34 26 -65 47 -67 47 -2 0 -34 -21 -71 -47z m133 -15 c58 -43 58 -43
  59 -96 l0 -52 -55 -35 c-30 -19 -60 -35 -67 -35 -7 1 -38 16 -68 34 l-55 32
  -3 55 -2 54 62 43 c34 23 64 42 66 42 2 0 31 -19 63 -42z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Nonagon" placement="bottom">
          <Grid 
            item 
            xs={2}
            onClick={() => showNonagonIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="33.000000pt" height="35.000000pt"
      viewBox="0 0 33.000000 35.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M100 325 c-36 -12 -51 -24 -74 -60 -26 -42 -28 -52 -22 -108 5 -53
  11 -66 43 -99 36 -37 38 -38 113 -38 l77 0 32 40 c46 57 53 131 21 201 -21 44
  -28 51 -74 64 -58 18 -58 18 -116 0z m103 -11 c37 -13 52 -25 71 -57 34 -59
  26 -136 -18 -189 -30 -36 -33 -38 -96 -38 -63 0 -67 2 -102 38 -29 30 -37 47
  -42 93 -5 51 -3 59 24 96 21 28 45 47 73 56 23 9 42 16 43 16 0 1 22 -6 47
  -15z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Square" placement="bottom">
          <Grid 
            item 
            xs={2}
            onClick={() => showSquareIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30.000000pt" height="29.000000pt"
      viewBox="0 0 30.000000 29.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,29.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M20 145 l0 -125 125 0 125 0 0 125 0 125 -125 0 -125 0 0 -125z m240
  0 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z" />
      </g>
  </svg></Item>
          </Grid>
        </Tooltip>
        <Tooltip title="Decagon" placement="right">
          <Grid 
            item 
            xs={2}
            onClick={() => showDecagonIcon()}
          >
            <Item><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="33.000000pt" height="29.000000pt" viewBox="0 0 33.000000 29.000000"
  preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,29.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M69 245 c-18 -14 -42 -41 -52 -60 -16 -32 -16 -37 -1 -74 47 -118
  215 -123 276 -7 19 37 19 40 3 77 -39 85 -152 118 -226 64z m156 -7 c19 -13
  42 -37 52 -55 16 -30 16 -34 -1 -70 -21 -47 -74 -83 -121 -83 -47 0 -100 36
  -121 83 -17 36 -17 40 -1 70 40 72 126 97 192 55z"/>
  </g>
  </svg>
  </Item>
          </Grid>
        </Tooltip>
      </Grid>
    </Box>
  );
}