// src/components/HorizontalShowcase.js
import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { products } from '../data';

const ProductCard = ({ product }) => (
  <Box 
    component={Link} 
    to={`/product/${product.id}`}
    sx={{ 
      minWidth: { xs: '260px', md: '320px' }, // Kart genişliği sabit
      mr: 4, 
      textDecoration: 'none', 
      color: 'white',
      position: 'relative',
      group: 'hover' // Hover efekti için grup
    }}
  >
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      {/* Görsel Alanı */}
      <Box sx={{ 
        height: '450px', 
        overflow: 'hidden', 
        mb: 2,
        border: '1px solid rgba(197, 160, 89, 0.1)', // Çok ince gold çizgi
        position: 'relative'
      }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {/* Hoverda görünen fiyat etiketi */}
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0,0,0,0.7)',
          p: 2,
          backdropFilter: 'blur(5px)',
          opacity: 0,
          transition: 'opacity 0.3s',
          '.MuiBox-root:hover &': { opacity: 1 } // CSS hilesi: karta gelince göster
        }}>
          <Typography variant="h6" align="center" color="primary">{product.price} ₺</Typography>
        </Box>
      </Box>

      {/* Yazı Alanı */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', mb: 0.5 }}>
          {product.name}
        </Typography>
        <Typography variant="caption" sx={{ color: 'grey.500', letterSpacing: 1, textTransform: 'uppercase' }}>
          {product.notes}
        </Typography>
      </Box>
    </motion.div>
  </Box>
);

const HorizontalShowcase = () => {
  const scrollRef = useRef(null);

  // Butonla kaydırma fonksiyonları
  const scroll = (direction) => {
    if(scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ position: 'relative', py: 10, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Başlık */}
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ 
          mb: 6, 
          fontFamily: '"Cinzel", serif', 
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        KOLEKSİYON
      </Typography>

      {/* Kaydırma Butonları */}
      <IconButton 
        onClick={() => scroll('left')} 
        sx={{ 
          position: 'absolute', left: 20, top: '55%', zIndex: 2, 
          border: '1px solid rgba(197, 160, 89, 0.5)', 
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'primary.main',
          display: { xs: 'none', md: 'flex' }, // Mobilde gizle
          '&:hover': { bgcolor: 'primary.main', color: 'black' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton 
        onClick={() => scroll('right')} 
        sx={{ 
          position: 'absolute', right: 20, top: '55%', zIndex: 2, 
          border: '1px solid rgba(197, 160, 89, 0.5)', 
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'primary.main',
          display: { xs: 'none', md: 'flex' },
          '&:hover': { bgcolor: 'primary.main', color: 'black' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Yatay Liste (Scroll Container) */}
      <Box 
        ref={scrollRef}
        sx={{ 
          display: 'flex', 
          overflowX: 'auto', // Yatay kaydırma açık
          scrollBehavior: 'smooth',
          px: { xs: 2, md: 8 }, // Mobilde dar, masaüstünde geniş kenar boşluğu
          pb: 4,
          // Scroll barı gizleme stilleri
          '::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalShowcase;