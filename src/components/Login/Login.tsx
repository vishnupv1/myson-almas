import * as React from 'react';
import { useEffect, useState } from 'react';
import src from '../../assets/Logo.svg';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthUser } from '../../context/Auth/auth.model';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useLoader } from '../../hooks/useLoader';
import { useAuth } from '../../hooks/useAuth';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Divider } from '@mui/material';

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const { isLoading } = useLoader();
  const [searchParams] = useSearchParams();
  const defaultName: string = searchParams.get('email') || '';
  const { isAuthenticated, signIn, logo } = useAuth();
  const [authUser, setAuthUser] = useState<AuthUser>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const { setIsLoading } = useLoader();

  const [isAzureEnabled, setIsAzureEnabled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);
    setAuthUser({
      username: defaultName || '',
      password: ''
    });
    if (import.meta.env.VITE_AZURE_CLIENT_ID) {
      setIsAzureEnabled(true);
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
    if (isAuthenticated) {
      const { from } = location.state || { from: { pathname: '/home' } };
      navigate(from);
    }
  }, [isAuthenticated, location.state, navigate, setIsLoading]);
  useEffect(() => {
    setIsLoading(false);
    if (isAuthenticated) {
      const { from } = location.state || { from: { pathname: '/home' } };
      navigate(from);
    }
  }, [isAuthenticated, location.state, navigate, setIsLoading]);

  function handleSignInAzure() {
    signIn('AZURE');
  }

  function handleSignInBasicAuth() {
    if (!authUser.username) {
      return;
    }
    function handleSignInBasicAuth() {
      if (!authUser.username) {
        return;
      }

      if (!authUser.password) {
        return;
      }
      signIn('BASIC', authUser);
    }
    if (!authUser.password) {
      return;
    }
    signIn('BASIC', authUser);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(src/assets/sustain.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <img src={logo || src} style={{ width: 120, height: 40, marginRight: '15px' }} />
              <Divider orientation="vertical" flexItem />
              <Typography component="h1" variant="h5" style={{ marginLeft: '15px' }}>
                Sign in
              </Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Email Address"
                name="username"
                autoComplete="username"
                autoFocus
                type="email"
                defaultValue={authUser.username || defaultName}
                onChange={(e) => setAuthUser({ ...authUser, username: e.target.value })}
                disabled={!!defaultName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue={authUser.password}
                onChange={(e) => setAuthUser({ ...authUser, password: e.target.value })}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleSignInBasicAuth()}>
                Sign In
              </Button>
              <Divider>OR</Divider>
              <Button
                disabled={!isAzureEnabled}
                onClick={() => handleSignInAzure()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<MicrosoftIcon />}
                color="error">
                Login Using Microsoft
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
