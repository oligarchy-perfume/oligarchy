// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C5A059', // Daha mat, şampanya sarısı/altın (Sarı değil, Gold)
    },
    background: {
      default: '#000000', // Tamamen simsiyah (Derinlik için)
      paper: '#050505',   // Çok hafif ton farkı
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#888888',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif', // Genel yazı tipi
    h1: {
      fontFamily: '"Cinzel", serif', // Logo ve Dev Manşetler
      fontWeight: 500,
      letterSpacing: '0.15em', // Harfler arası geniş boşluk (Lüks hissi)
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 400,
      letterSpacing: '0.1em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif', // Alt başlıklar
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Cinzel", serif', // Logo (Navbar için)
      fontWeight: 700,
      letterSpacing: '0.2em',
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
    },
    body1: {
      fontWeight: 300, // İnce yazı
      lineHeight: 1.8,
    },
    button: {
      fontFamily: '"Cinzel", serif',
      letterSpacing: '0.2em', // Buton yazıları geniş
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Sıfır ovalleşme, jilet gibi keskin
          padding: '16px 32px',
          border: '1px solid rgba(197, 160, 89, 0.3)', // Çok ince altın çizgi
          '&:hover': {
            border: '1px solid #C5A059',
            backgroundColor: 'rgba(197, 160, 89, 0.05)',
          },
        },
        contained: {
          backgroundColor: '#C5A059',
          color: '#000',
          '&:hover': {
            backgroundColor: '#DECBA5',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.8)', // Hafif transparan siyah
          backdropFilter: 'blur(20px)', // Buzlu cam efekti
        },
      },
    },
  },
});

export default theme;