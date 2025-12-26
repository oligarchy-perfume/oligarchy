// src/pages/Story.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 20, pb: 10, textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="overline" color="primary">MİRASIMIZ</Typography>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display"', mb: 6 }}>
          Koku, Anıların Sessiz Dilidir
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 2, color: 'text.secondary' }}>
          Gloria VIP, 2025 yılında, sıradanlığa bir başkaldırı olarak doğdu. 
          Biz parfümü sadece bir koku olarak değil, kişiliğin görünmez imzası olarak görüyoruz. 
          Grasse bölgesinin en nadide çiçekleri ve Doğu'nun gizemli baharatlarını, 
          modern simya yöntemleriyle birleştiriyoruz. Her şişe, anlatılmayı bekleyen bir hikayedir.
        </Typography>
        <Box sx={{ mt: 8, height: '2px', width: '100px', bgcolor: 'primary.main', mx: 'auto' }} />
      </motion.div>
    </Container>
  );
};

export default Story;