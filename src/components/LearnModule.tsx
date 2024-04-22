import React, { createRef } from 'react';
import { Box, Button, Dialog, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import CanvasDraw from 'react-canvas-draw';

// https://www.npmjs.com/package/react-canvas-draw
import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import { Hira_data } from '../constants/hira_data';

interface props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    char_data:Hira_data;
}

const LearnModule: React.FC<props> = ({ open, setOpen, char_data }) => {
    const sigRef = createRef<CanvasDraw>();

    const clear = () => {
        sigRef.current?.clear();
    };
    const undo = () => {
        sigRef.current?.undo();
    };

    return (
        <Dialog open={open}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Learn about {char_data.char}</Typography>
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Typography> Stroke order matters! </Typography>
            <img src={char_data.howToImg} alt='hira_how'></img>
            <Box>
                <Typography>Try here~</Typography>
                <CanvasDraw canvasWidth={200} canvasHeight={200} brushRadius={4} imgSrc={char_data.img} ref={sigRef} lazyRadius={0} />
                <IconButton>
                    <VolumeUpIcon />
                </IconButton>
                <Button variant="contained" onClick={undo}>
                    undo
                </Button>
                <Button variant="contained" onClick={clear}>
                    Clear
                </Button>
            </Box>
        </Dialog>
    );
};

export default LearnModule;
