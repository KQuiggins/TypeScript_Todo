import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: 'rgba(168, 85, 247, .80)',
            main: 'rgba(168, 85, 247, .65)',
            dark: 'rgba(168, 85, 247, .28)',
        },
        background: {
            default: '#151515',
            paper: 'rgba(0, 0, 0, .96)',
        },
        },
    
});