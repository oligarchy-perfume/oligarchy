// src/pages/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 20, pb: 10 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" sx={{ fontFamily: '"Playfair Display"', mb: 4 }}>Bize Ulaşın</Typography>
          <Typography color="text.secondary" paragraph>
            Nişantaşı, Abdi İpekçi Cad. No: 42<br />
            İstanbul, Türkiye
          </Typography>
          <Typography color="primary" variant="h6">info@gloriavip.com</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField label="Adınız Soyadınız" variant="standard" fullWidth InputLabelProps={{ sx: { color: 'text.secondary' } }} sx={{ input: { color: 'white' } }} />
            <TextField label="E-Posta Adresiniz" variant="standard" fullWidth InputLabelProps={{ sx: { color: 'text.secondary' } }} sx={{ input: { color: 'white' } }} />
            <TextField label="Mesajınız" multiline rows={4} variant="standard" fullWidth InputLabelProps={{ sx: { color: 'text.secondary' } }} sx={{ textarea: { color: 'white' } }} />
            <Button variant="outlined" size="large" sx={{ mt: 2 }}>GÖNDER</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;