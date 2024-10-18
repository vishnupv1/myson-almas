import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
// image....
import Logo from '../assets/Logo.svg';
import './style.scss';
import { useAuth } from '../hooks/useAuth';
import { setData } from '../redux-store/actions/actions';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  width: '100%',
  // zIndex: 1400,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    position: 'fixed',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    // top: `calc(100% - 40px)`,
    position: 'fixed',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      top: theme.spacing(8),
      height: `calc(100% - ${theme.spacing(8)}px)`,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      top: theme.spacing(8),
      height: `calc(100% - ${theme.spacing(8)}px)`
    })
  })
);

const allMenus: any = [
  {
    id: 'home',
    title: 'Home',
    route: '/home',
    icon: 'home',
    roles: ['ALL_ROLES']
  },
  {
    id: 'tenant-management',
    title: 'Tenants',
    route: '/tenants',
    icon: 'tenants',
    roles: ['SUPER_ADMIN', 'VENDOR_ADMIN']
  },
  {
    id: 'user-management',
    title: 'Users',
    route: '/users',
    icon: 'users',
    roles: ['ORG_ADMIN']
  },
  {
    id: 'user-groups',
    title: 'User Groups',
    route: '/usergroups',
    icon: 'usergroups',
    roles: ['ORG_ADMIN']
  },
  {
    id: 'rolesperms-management',
    title: 'Roles & Permissions',
    route: '/roles',
    icon: 'roles-permissions',
    roles: ['ORG_ADMIN']
  }
];
import { useSelector, useDispatch } from 'react-redux';
import { UserService } from '../services/UserService';
const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: any) => state.localdata.data);

  const { i18n } = useTranslation();

  const { signOut, getAuthMethodType, user, isAuthenticated } = useAuth();

  const [open, setOpen] = React.useState(false);
  const [menus, setMenus] = React.useState([]);
  const [selectedMenu, setSelectedMenu] = React.useState(
    localStorage.getItem('menu') ? localStorage.getItem('menu') : 'home'
  );

  const [heading, setHeading] = React.useState(
    localStorage.getItem('heading') ? localStorage.getItem('heading') : 'Home'
  );
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    signOut();
  };

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const getMenuIcon = (icon: string) => {
    switch (icon) {
      case 'home':
        return <HomeIcon />;
      case 'tenants':
        return <BusinessIcon />;
      case 'users':
        return <ManageAccountsIcon />;
      case 'usergroups':
        return <GroupIcon />;
      case 'roles-permissions':
        return <AssignmentIndIcon />;
      default:
        return '';
    }
  };
  const handleSelectedMenu = (menu: string, title: string) => {
    setSelectedMenu(menu);
    localStorage.setItem('menu', menu);
    setHeading(title);
    localStorage.setItem('heading', title);
  };

  const handleNavigate = (index: number) => {
    const temp: any = data.split('/').filter((ic: any) => ic !== '');
    let s: string = '';
    for (let i = 0; i <= index; i++) {
      s = s + '/' + temp[i];
    }
    navigate(s);
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      const fetchCurrentUser = async () => {
        const userDetails = await UserService.getCurrentUser();
        console.log(userDetails);

        const permissions = ['CREATE_TENANT', 'UPDATE_TENANT', 'VIEW_TENANT', 'DELETE_TENANT'];
        const currentUserRoles = ['SUPER_ADMIN'];
        if (allMenus) {
          allMenus.forEach((menu: any) => {
            const hasRequiredRole = currentUserRoles.some((item) => menu?.roles.includes(item));
            if (hasRequiredRole || menu.roles.includes('ALL_ROLES')) {
              menu.hasAccess = true;
            }
          });
          const activeMenus = allMenus.filter((m: any) => m.hasAccess) || [];
          setMenus(activeMenus);
        }
      };
      fetchCurrentUser();
    }
    dispatch(setData(window.location.pathname));
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          anchor="left"
          classes={{
            paper: 'drawerPaper'
          }}
        >
          <div className="drawerContent">
            <List>
              {allMenus.map((menu: any) => (
                <ListItem
                  key={menu.title}
                  disablePadding
                  sx={{ display: 'block' }}
                  onClick={() => handleSelectedMenu(menu.id, menu.title)}
                  component={NavLink}
                  to={menu.route}
                  className={selectedMenu === menu.id ? 'menuItem activeMenu' : 'menuItem '}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      textDecoration: 'none',
                      margin: 0
                    }}
                    onClick={() => handleSelectedMenu(menu.id, menu.title)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center'
                      }}
                      // className={selectedMenu === menu.id ? 'menuItem activeMenu' : 'menuItem '}
                    >
                      {getMenuIcon(menu.icon)}
                    </ListItemIcon>
                    <ListItemText
                      // className={selectedMenu === menu.id ? 'menuItem activeMenu' : 'menuItem '}
                      primary={menu.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <AppBar position="fixed" open={open} elevation={1} className="appBar">
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                marginRight: 5,
                marginLeft: -0.5
              }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                marginLeft: '-32px'
              }}
            >
              <img src={Logo} className="elix9Logo" />
            </div>
            <div className="appBarRight">
              <Typography variant="h4" className="customerLogo">
                NHR Technologies
              </Typography>
              {/* <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedLanguage}
                                label="Age"
                                onChange={(event) => handleLanguageChange(event?.target.value)}
                                size='small' 
                                >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="hindi">Hindi</MenuItem>
                            </Select> */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <div className={open ? 'contentWrapper contentLeft' : ''}></div>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: open ? -2 : 6 }}>
          <DrawerHeader sx={{ marginBottom: 1 }} />
          <div className="breadcrumbContainer">
            <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
              {heading}
            </Typography>
            <Typography
              variant="caption"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: 'flex' }}
            >
              {/* Tenant Management &gt;  */}
              {data &&
                data
                  .split('/')
                  .filter((ic: any) => ic !== '')
                  .map((item: string, i: number) => (
                    <p style={{ marginLeft: '2px' }} onClick={() => handleNavigate(i)}>
                      {/* <Link to={`/${item}`} key={i}> </Link>  */}
                      {item} /{' '}
                    </p>
                  ))}
            </Typography>
          </div>
          <div className="contentWrapper">
            <Outlet />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
