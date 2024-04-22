import React from 'react';
import './Hiragana.css';
import JapaneZMenu from '../components/JapaneZMenu';
import { Box, Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFCF7',
    textAlign: 'center',
    color: '#00000'
}));

const BlankItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#00000',
    textAlign: 'center',
    color: '#00000'
}));

const characters = [
    'ア',
    'カ',
    'サ',
    'タ',
    'ナ',
    'ハ',
    'マ',
    'ラ',
    'ヤ',
    'ワ',
    'イ',
    'キ',
    'シ',
    'チ',
    'ニ',
    'ヒ',
    'ミ',
    'リ',
    'ウ',
    'ク',
    'ス',
    'ツ',
    'ヌ',
    'フ',
    'ム',
    'ユ',
    'ル',
    'イ',
    'ケ',
    'セ',
    'テ',
    'ネ',
    'ヘ',
    'メ',
    'レ',
    'オ',
    'コ',
    'ソ',
    'ト',
    'ノ',
    'ホ',
    'モ',
    'ヨ',
    'ロ',
    'ウ',
    'ン'
];

const pronounciation = [
    'a',
    'ka',
    'sa',
    'ta',
    'na',
    'ha',
    'ma',
    'ra',
    'ya',
    'wa',
    'i',
    'ki',
    'shi',
    'chi',
    'ni',
    'hi',
    'mi',
    'ri',
    'u',
    'ku',
    'su',
    'tsu',
    'nu',
    'fu',
    'mu',
    'yu',
    'ru',
    'e',
    'ke',
    'se',
    'te',
    'ne',
    'he',
    'me',
    're',
    'o',
    'ko',
    'so',
    'to',
    'no',
    'ho',
    'mo',
    'yo',
    'ro',
    'wo',
    'n'
];

const Katakana = () => {
    return (
        <Box sx={{ backgroundColor: '#4E6151', ml: '240px' }}>
            <Typography variant="h2"> Katakana </Typography>
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
                    {characters.map((char, index) => (
                        <Grid key={index} item xs={1.2}>
                            <Paper square={false} sx={{ backgroundColor: '#FFFCF7', textAlign: 'center', maxWidth: '80px', minHeight: '50px' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '18px' }}>
                                    {char}
                                </Typography>
                                <Typography variant="caption">{pronounciation[index]}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Katakana;
