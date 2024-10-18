import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography
      mt={0.5}
      px={{ xs: 0, md: 3.75 }}
      py={3}
      color="text.secondary"
      variant="body2"
      sx={{ textAlign: { xs: 'center', md: 'right' } }}
      letterSpacing={0.5}
      fontWeight={500}
    >
      Made with ❤️
    </Typography>
  );
};

export default Footer;
