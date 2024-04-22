import { useNavigate } from 'react-router-dom';
import { Drawer, Divider, Toolbar, List, ListItem, ListItemButton } from '@mui/material';

const JapaneZMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="base">
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        backgroundColor: '#C6DABE'
                    }
                }}
              
            >
                <Toolbar>Navigate to a lesson</Toolbar>

                <Divider />
                <List>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate("/")}>「あ」Hiragana</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=> navigate("/katakana")}>「ア」Katana</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>「漢字」Kanji</ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default JapaneZMenu;
