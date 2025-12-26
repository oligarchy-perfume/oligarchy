// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import theme from './theme'; // Önceki cevaptaki tema dosyası
import { CartProvider } from './context/CartContext';
import { Navbar, CartDrawer } from './components/Layout';
import { products } from './data';
import ProductDetail from './pages/ProductDetail';
import Story from './pages/Story';
import Contact from './pages/Contact';
import HorizontalShowcase from './components/HorizontalShowCase';
// Home Component (Mini versiyon)
const Home = () => (
  <>
    {/* Hero Bölümü */}
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      // Daha karanlık ve dramatik bir görsel (Örnek siyah mermer veya duman efekti)
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=2070&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Box sx={{ textAlign: 'center', border: '1px solid rgba(197, 160, 89, 0.3)', p: { xs: 4, md: 10 }, backdropFilter: 'blur(3px)' }}>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }}>
          
          <Typography variant="h6" color="primary" sx={{ mb: 2, fontSize: '0.8rem' }}>
            EST. 2025
          </Typography>

          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, color: 'white', mb: 1 }}>
            OLIGARCHY
          </Typography>
          
          <Typography variant="h3" sx={{ color: '#aaa', mb: 6, fontSize: { xs: '1.2rem', md: '1.8rem' } }}>
            "Power in a Bottle"
          </Typography>

          <Button variant="outlined" color="primary" size="large" onClick={() => document.getElementById('shop').scrollIntoView({behavior: 'smooth'})}>
            KOLEKSİYONU İNCELE
          </Button>
        </motion.div>
      </Box>
    </Box>

    {/* Ürün Listesi */}
    {/* <Container id="shop" maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 8, fontFamily: '"Playfair Display"' }}>Özel Seçimler</Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <motion.div whileHover={{ y: -10 }}>
              <Box component={Link} to={`/product/${product.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
                <Box sx={{ overflow: 'hidden', height: 350, mb: 2 }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">{product.notes}</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>{product.price} ₺</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container> */}
    <div id="collection">
      <HorizontalShowcase />
    </div>

    <Box sx={{ py: 15, px: 2, textAlign: 'center', bgcolor: '#080808' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Cinzel"', mb: 3, color: 'primary.main' }}>SINIRLI ÜRETİM</Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto', color: 'grey.400' }}>
            Her bir şişe, Oligarchy atölyelerinde elle doldurulur ve mühürlenir. 
            Sahip olduğunuz sadece bir parfüm değil, bir statü sembolüdür.
        </Typography>
    </Box>
  </>
);

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <CartDrawer />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Box sx={{ py: 4, bgcolor: 'black', textAlign: 'center', borderTop: '1px solid #222' }}>
          <Typography variant="caption" color="text.secondary">© 2025 GLORIA VIP PERFUME. Tüm hakları saklıdır.</Typography>
        </Box>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;