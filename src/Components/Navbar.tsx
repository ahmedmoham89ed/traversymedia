import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import imageicon from "../assets/images/M18chhoRNSya0PenWCQA_logo_long.webp"
import avaterIcon from "../assets/images/download.jpeg"


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='fixed top-0 z-50'>
      <Container maxWidth="xl" className='bg-black h-24 pt-[14px] '  >
        <Toolbar disableGutters>
            {/* icon */}
            <Link to={"/"}>
                  <div className=""><img src={imageicon} className='pl-24' /></div>
            </Link>
            {/* pages */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {/* courses */}
                <Link to="/Courses" style={{ textDecoration: 'none' }}>
                  <div className="">
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                    Courses
                  </Button>
                  </div>
                </Link>
                {/*ebook  */}
                <Link  to="/EBook#bradtraversy" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>
                    EBook
                  </Button>
                </Link>
                {/* FreelanceMastery */}
                <Link to="/FreelanceMastery" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    Freelance Mastery 
                  </Button>
                </Link>
                {/* Youtube */}
                <Link to="/Youtube" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    Youtube
                  </Button>
                </Link>
                {/* FAQ */}
                <Link to="/FAQ" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    FAQ
                  </Button>
                </Link>
                {/* Blog */}
                <Link to="/Blog" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    Blog
                  </Button>
                </Link>
                {/* Guide */}
                <Link to="/Guide" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    Guide
                  </Button>
                </Link>
                {/* Log In*/}
                <Link to="/LogIn" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                  Log In
                  </Button>
                </Link>
              </Menu>
            </Box>
            {/* pages */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="flex items-center justify-center gap-5 " >
                {/* courses */}
                <Link to="/Courses" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>
                    Courses
                  </Button>
                </Link>
                  {/*ebook  */}
                <Link to="/EBook" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>
                    EBook
                  </Button>
                </Link>
                {/* FreelanceMastery */}
                <Link to="/FreelanceMastery" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                    Freelance Mastery 
                  </Button>
                </Link>
                {/* Youtube */}
                <Link to="/Youtube" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                    Youtube
                  </Button>
                </Link>
                {/* FAQ */}
                <Link to="/FAQ" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                    FAQ
                  </Button>
                </Link>
                {/* Blog */}
                <Link to="/Blog" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                    Blog
                  </Button>
                </Link>
                {/* Guide */}
                <Link to="/Guide" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                    Guide
                  </Button>
                </Link>
                {/* Log In*/}
                <Link to="/LogIn" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }} className='hover:scale-110 transition-all duration-500 ease-in-out'>                 
                  Log In
                  </Button>
                </Link>
            
            </Box>
            {/* profile icon */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avaterIcon} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* Profile */}
                <Link to="/Profile" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    Profile
                  </Button>
                </Link>
                {/* FAQ */}
                <Link to="/FAQ" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                    FAQ
                  </Button>
                </Link>
                {/* Log in */}
                <Link to="/LogIn" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                  Log in
                  </Button>
                </Link>
                {/* Sign Up */}
                <Link to="/SignUp" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: 'black', display: 'block' }}>                 
                  Sign Up
                  </Button>
                </Link>
                
                
              
              </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
