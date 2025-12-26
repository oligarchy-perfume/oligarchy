// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { products } from '../data';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <Typography>Ürün bulunamadı.</Typography>;

  return (
    <Box sx={{ minHeight: '100vh', pt: 15, pb: 5, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Sol: Görsel */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <Box 
                component="img" 
                src={product.image} 
                sx={{ width: '100%', borderRadius: '2px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
              />
            </motion.div>
          </Grid>
          
          {/* Sağ: Bilgi */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: 3 }}>
                {product.category} KOLEKSİYONU
              </Typography>
              <Typography variant="h2" sx={{ my: 2, fontFamily: '"Playfair Display"' }}>
                {product.name}
              </Typography>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 300 }}>
                {product.price} ₺
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                {product.description}
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main' }}>NOTALAR:</Typography>
                <Chip label={product.notes} variant="outlined" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }} />
              </Box>

              <Button 
                variant="contained" 
                size="large" 
                fullWidth 
                onClick={() => addToCart(product)}
                sx={{ py: 2, fontSize: '1.1rem' }}
              >
                SEPETE EKLE
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;