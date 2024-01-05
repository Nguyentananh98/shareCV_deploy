"use client";
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Box, Button } from '@mui/material';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
      setIsPlaying(true);
    };
      
    return <div className={`video-player ${isPlaying ? 'playing' : ''}`}>
    {!isPlaying && (
        <Box width="500px" height="600px" 
        sx={{backdropFilter: "blur(5px)",
            backgroundColor:'rgba(0,0,0,0.1)',
            borderRadius:"50px"}} >
            <Button onClick={handlePlayClick}>
                Play
            </Button>
        </Box>
    )}
    {/* <div className="video-container"> */}
      {isPlaying && (
        <Box sx={{
            "& .player-wrapper":{
                width: 'auto',
                // Reset width  
                height: 'auto',
            },
            "& .react-player":{
                width: '500px',
                paddingTop: "0", // Percentage ratio for 16:9 
                position: 'relative', // Set to relative}
            },
            "& .react-player > div": {

                position: 'absolute' // Scaling will occur since parent is relative now
              
              }
        }}>
        <ReactPlayer width="500px" controls file='mp4' url='./video.mp4' />
        </Box>
        // <video controls poster={posterUrl}>
        //   <source src={videoUrl} type="video/mp4" />
        //   Your browser does not support the video tag.
        // </video>
      )}
    {/* </div> */}
  </div>

    // <ReactPlayer width="700" controls file='mp4' url='./video.mp4' />
}