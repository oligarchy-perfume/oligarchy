// src/components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, Drawer, Box, IconButton, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" elevation={0} sx={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        {/* LOGO ALANI */}
        <Typography 
          variant="h5" 
          onClick={() => navigate('/')} 
          sx={{ 
            cursor: 'pointer', 
            color: 'primary.main',
            // Aşağıdaki ayarlar logo'yu "imparatorluk" tarzı yapar
            textShadow: '0px 0px 20px rgba(197, 160, 89, 0.3)', 
          }}
        >
          OLIGARCHY
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {/* Linklerdeki fontları da küçültüp aralarını açıyoruz */}
          <Button color="inherit" component={Link} to="/story" sx={{ fontSize: '0.75rem', opacity: 0.8 }}>MİRAS</Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ fontSize: '0.75rem', opacity: 0.8 }}>İLETİŞİM</Button>
          <IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={cart.length} color="primary" sx={{ '& .MuiBadge-badge': { fontSize: 10, height: 16, minWidth: 16 } }}>
              <ShoppingBagIcon sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const CartDrawer = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
      <Box sx={{ width: 350, p: 3, height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#121212', color: 'white' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h5" fontFamily='"Playfair Display"'>SEPETİNİZ</Typography>
          <IconButton onClick={() => setIsCartOpen(false)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
        </Box>

        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {cart.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" secondaryAction={
                <IconButton edge="end" onClick={() => removeFromCart(item.id)} sx={{ color: 'grey.500' }}>
                  <DeleteOutlineIcon />
                </IconButton>
              }>
                <Avatar src={item.image} variant="square" sx={{ width: 60, height: 60, mr: 2 }} />
                <ListItemText 
                  primary={item.name} 
                  secondary={<Typography variant="body2" color="primary">{item.price} ₺</Typography>} 
                />
              </ListItem>
              <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            </React.Fragment>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography>TOPLAM</Typography>
            <Typography variant="h6" color="primary">{cartTotal} ₺</Typography>
          </Box>
          <Button variant="contained" fullWidth color="primary" size="large">ÖDEMEYE GEÇ</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export { Navbar, CartDrawer };