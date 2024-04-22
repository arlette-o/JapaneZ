import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import './Hiragana.css';

import JapaneZMenu from '../components/JapaneZMenu';
import LearnModule from '../components/LearnModule';

import { Hira_data } from '../constants/hira_data';
import * as hira from '../constants/hira_data'

// prettier-ignore
const characters = ['あ','か','さ','た','な','は','ま',
                    'ら','や','わ','い','き','し','ち',
                    'に','ひ','み','り','う','く','す',
                    'つ','ぬ','ふ','む','ゆ','る','え',
                    'け','せ','て','ね','へ','め','れ',
                    'お','こ','そ','と','の','ほ','も',
                    'よ','ろ','を','ん'];
// prettier-ignore
const pronounciation = ['a','ka','sa','ta','na','ha',
                        'ma','ra','ya','wa','i','ki',
                        'shi','chi','ni','hi','mi','ri',
                        'u','ku','su','tsu','nu','fu',
                        'mu','yu','ru','e','ke','se',
                        'te','ne','he','me','re','o',
                        'ko','so','to','no','ho','mo',
                        'yo','ro','wo','n'];

const Hiragana = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [currChar, setCurrChar] = useState<Hira_data>(hira.hira_a_data);

    const learn = (char_data:Hira_data) => {
        setCurrChar(char_data);
        setOpen(true);
    };

    return (
        <Box sx={{ backgroundColor: '#4E6151', ml: '240px' }}>
            <Typography variant="h2"> Hiragana </Typography>
            <LearnModule open={open} setOpen={setOpen} char_data={currChar} />
            <Button variant="contained" sx={{ backgroundColor: '#A1B5D8' }}>
                {' '}
                Practice
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#1F336F' }}>
                {' '}
                Test Me
            </Button>
            <Box sx={{ flexGrow: 1, ml: '90px', mr: 2 }}>
                <JapaneZMenu />
                <Grid container item spacing={1}>
                    {hira.hiragana.map((char_data, index) => (
                        <Grid key={index} item xs={1.2}>
                            <Button
                                onClick={() => learn(char_data)}
                                sx={{
                                    display: 'block',
                                    backgroundColor: '#FFFCF7',
                                    color: '#000',
                                    textAlign: 'center',
                                    maxWidth: '80px',
                                    minHeight: '50px',
                                    textTransform: 'lowercase'
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '18px' }}>
                                    {char_data.char}
                                </Typography>
                                <Typography variant="caption">{char_data.pronounce}</Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Hiragana;
