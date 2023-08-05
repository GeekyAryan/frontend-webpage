// import * as React from 'react';
// // import {AppBar,Paper} from '@mui/material';
// import {useState} from 'react';
// import {AppBar,Paper,useMediaQuery,TextField} from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// // import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonIcon from '@mui/icons-material/Person';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CallIcon from '@mui/icons-material/Call';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { AddShoppingCart } from '@mui/icons-material';
// import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color:'#009432'
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

// export default function Header() {
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down('sm'))
//     const [open,setOpen]=useState(false)
//     const handleOpenDrawer=()=>{
     
//       setOpen(true)
//     }
//   return (

//     <div style={{display:'flex',flexDirection:'column'}}>
//     <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static" style={{display:'flex',alignItems:'left',justifyContent:'center',  background:'#0e4b09',height:40}}>
//         <div style={{marginLeft:10,display:'flex',alignItems:'center' }}>
//            {matches?<MenuIcon onClick={handleOpenDrawer} />:<></>}
//             <div style={{marginLeft:30,display:'flex',alignItems:'center'}}>
//             <LocalPhoneOutlinedIcon />
//             <span style={{fontFamily:'Poppins',fontWeight:'bold',marginLeft:5}}>+91 9981291756</span>
            
//             </div>
//             <div  style={{display:'flex',justifyContent:'space-evenly', marginLeft:'30%'}}>
//             <span>Get 50% off On Selected Items  |</span>
           
//             <span style={{marginLeft:10}} >Shop Now</span>
//             </div>
//             <div style={{marginLeft:'auto',fontFamily:'Poppins', fontWeight:500,width:!matches?250:50,display:'flex',justifyContent:'space-between',paddingRight:20}}>
//             {!matches?<>
           
//             <span style={{marginLeft:40}}>Eng</span>
//             <KeyboardArrowDownOutlinedIcon/>
//             <span style={{marginRight:50 ,display:'flex',justifyContent:'center'}}>Location<KeyboardArrowDownOutlinedIcon /></span>
            
            
//             </>
//             :<><span><ShoppingCartIcon/></span>
//             <span><PersonIcon/></span></>}
            
//             </div>
//         </div>

//           </AppBar>
//     </Box>

//               <Paper style={{width:'100vw',height:50,display:'flex',alignItems:'left',justifyContent:'left'}}  elevation={1}>
              //   <img src="/assets/logo.png" style={{marginLeft:20,width:55}} />
              //  <div style={{fontSize:24,fontWeight:'bold',color:'#009432'}}>Shopcart</div>

//                 <div>
//                     <Button style={{margin:5,marginRight:15,color:'#009432',fontWeight:'600'}}>Category</Button>
//                     <Button style={{margin:5,marginRight:15,color:'#009432',fontWeight:'600'}}>Deals</Button>
//                     <Button style={{margin:5,marginRight:15,color:'#009432',fontWeight:'600'}}>What's New</Button>
//                     <Button style={{margin:5,marginRight:15,color:'#009432',fontWeight:'600'}}>Delivery</Button>

//                 </div>

             
//                 {/* <Search  style={{background:'white',alignItems:'center',justifyContent:'space-Between'}}>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search> */}

// <Search style={{ color: '#009432', display: 'flex', justifyContent: "space-between", marginLeft: '300px', borderRadius: 20, width: '320px', height: '40px' }}>
            
//             <StyledInputBase
//               style={{ color: '#000', fontWeight: '400' }}
//               placeholder="Search Product"
//               inputProps={{ 'aria-label': 'search' }}
//             />
           
//             {/* <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
//               <img src='https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg' />
//             </div> */}
//              <SearchIconWrapper>
//               <SearchIcon style={{ color: '#222' }} />
//             </SearchIconWrapper>
//           </Search>

//           <div>

//           <Button style={{margin:5,marginRight:30,color:'#009432',fontWeight:'600',justifyContent:'space-Between'}}>
//             <PermIdentityIcon />
//             Account
//           </Button>
//           </div>

          
//           <div>
//           <Button style={{margin:5,marginRight:30,color:'#009432',fontWeight:'600',justifyContent:'space-Between'}}>
//            <AddShoppingCart />
//             Cart
//           </Button>
//           </div>
//               </Paper>

      

//     </div>
//   );
// }

// // import {useState} from 'react';
// // import {AppBar,Paper,Button,useMediaQuery,TextField,styled} from '@mui/material';
// // import { useTheme } from '@mui/material/styles';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import PersonIcon from '@mui/icons-material/Person';
// // import HomePageDrawer from './HomePageDrawer';
// // import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// // import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// // // import IconButton from "@material-ui/core/IconButton";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// // // import SearchIcon from "@material-ui/icons/Search";
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import InputBase from '@mui/material/InputBase';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// // import SearchIcon from '@mui/icons-material/Search';
// // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// // // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import { Link } from 'react-router-dom';

// // import LocationOnIcon from '@mui/icons-material/LocationOn';


// // const Search = styled('div')(({ theme }) => ({
// //   position: 'relative',
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: "#d5ddd6",
// //   '&:hover': {
// //     backgroundColor: '#FFF',
// //   },
// //   marginLeft: 0,
// //   width: '10%',
// //   [theme.breakpoints.up('sm')]: {
// //     marginLeft: theme.spacing(1),
// //     width: 'auto',
// //   },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: '100%',
// //   position: 'absolute',
// //   pointerEvents: 'none',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: 'inherit',
// //   '& .MuiInputBase-input': {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     // vertical padding + font size from searchIcon
// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create('width'),
// //     width: '100%',
// //     [theme.breakpoints.up('sm')]: {
// //       width: '20ch',
// //       '&:focus': {
// //         width: '25ch',
// //       },
// //     },
// //   },
// // }));


// // export default function Header(props) {
// //   const theme = useTheme();
// //   const matches = useMediaQuery(theme.breakpoints.down('sm'))
// //   const [open,setOpen]=useState(false)
// //   const handleOpenDrawer=()=>{
   
// //     setOpen(true)
// //   }
// //   return (
// //     <div style={{display:'flex',flexDirection:'column'}}>
     
//       // <AppBar position="static" style={{display:'flex',alignItems:'left',justifyContent:'center',  background:'#0e4b09',height:40}}>
//       //   <div style={{marginLeft:10,display:'flex',alignItems:'center' }}>
//       //      {matches?<MenuIcon onClick={handleOpenDrawer} />:<></>}
//       //       <div style={{marginLeft:30,display:'flex',alignItems:'center'}}>
//       //       <LocalPhoneOutlinedIcon />
//       //       <span style={{fontFamily:'Poppins',fontWeight:'bold',marginLeft:5}}>+0001234567890</span>
            
//       //       </div>
//       //       <div  style={{display:'flex',justifyContent:'space-evenly', marginLeft:'30%'}}>
//       //       <span>Get 50% off On Selected Items  |</span>
           
//       //       <span style={{marginLeft:10}} >Shop Now</span>
//       //       </div>
//       //       <div style={{marginLeft:'auto',fontFamily:'Poppins', fontWeight:500,width:!matches?250:50,display:'flex',justifyContent:'space-between',paddingRight:20}}>
//       //       {!matches?<>
           
//       //       <span style={{marginLeft:40}}>Eng</span>
//       //       <KeyboardArrowDownOutlinedIcon/>
//       //       <span style={{marginRight:50 ,display:'flex',justifyContent:'center'}}>Location<KeyboardArrowDownOutlinedIcon /></span>
            
            
//       //       </>
//       //       :<><span><ShoppingCartIcon/></span>
//       //       <span><PersonIcon/></span></>}
            
//       //       </div>
//       //   </div>

//       //     </AppBar>
          
// //           <Paper style={{width:'100vw',height:70,display:'flex',alignItems:'center',justifyContent:'left'}} elevation={1}>
// //            <img src="logo.png" style={{marginLeft:50,width:35,height:35}}/>
// //            <div style={{fontSize:24,fontWeight:'bold',fontColor:'#0e4b09'}}>Shopcart</div>
// //            <div style={{marginLeft:30,width:500,display:'flex',justifyContent:'space-between'}}>
// //             <Button style={{color:'#000',fontWeight:600,marginLeft:24}}>Categories<KeyboardArrowDownOutlinedIcon/></Button>
            
// //             <Button style={{color:'#000',fontWeight:600,marginLeft:24}}>Deals</Button>
// //             {/* <Button style={{color:'#000',fontWeight:600,marginLeft:20}}>What's New</Button> */}
// //             <Button style={{color:'#000',fontWeight:600,marginLeft:30}}>Delivery</Button>
//         // <Search style={{ display: 'flex', justifyContent: "space-between", marginLeft: '300px', borderRadius: 20, width: '320px', height: '40px' }}>
            
//         //     <StyledInputBase
//         //       style={{ color: '#000', fontWeight: '400' }}
//         //       placeholder="Search Product"
//         //       inputProps={{ 'aria-label': 'search' }}
//         //     />
           
//         //     {/* <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
//         //       <img src='https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg' />
//         //     </div> */}
//         //      <SearchIconWrapper>
//         //       <SearchIcon style={{ color: '#222' }} />
//         //     </SearchIconWrapper>
//         //   </Search>
          
// //         <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'70%',fontWeight:600,position:'absolute'}}>
// //         <PermIdentityIcon/>
// //           <span>Account</span>
// //           <ShoppingCartOutlinedIcon style={{marginLeft:20}}/>
// //           <span style={{marginLeft:2}}>Cart</span>
// //           </div> 
// //            </div>
          
// //           </Paper>
// //        <HomePageDrawer open={open} setOpen={setOpen} />            
       
// //        </div>
// // );
// // }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paperBar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: theme.spacing(1, 2),
    },
  },
  options: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      justifyContent: 'flex-start',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} style={{background:'#009432'}}>
      {/* <AppBar position="static" style={{background:'#009432' ,width:'100%',height:'80px'}}> */}
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <img src="logo.png" style={{height:25}}/>
             ShopCart
          </Typography>

          <div className={classes.paperBar}>
            <Typography variant="subtitle2" className={classes.icon} style={{flexDirection:'row'}}>
              {/* <LocationOnIcon  /> */}
              Location |
            </Typography>
            <Typography variant="subtitle2" className={classes.icon}>
              Mobile No: +91 9981291756 |
            </Typography>
            <Typography variant="subtitle2" className={classes.icon}>
              50% Off
            </Typography>
            <Typography variant="subtitle2" className={classes.icon}>
              | Shop Now
            </Typography>
            <div className={classes.options}>
              <Typography variant="subtitle2" className={classes.icon} style={{flexDirection:'row'}}>
               | English
                {/* <KeyboardArrowDownOutlinedIcon /> */}
              </Typography>
              <Typography variant="subtitle2" className={classes.icon}>
               | Account |
              </Typography>
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Paper elevation={0} square>
        <Toolbar>
          <Typography variant="subtitle2" className={classes.icon}>
            Category 
            {/* <KeyboardArrowDownOutlinedIcon/> */}
          </Typography>
          <Typography variant="subtitle2" className={classes.icon}>
            Deals 
          </Typography>
          <Typography variant="subtitle2" className={classes.icon}>
            What's New 
          </Typography>
          <Typography variant="subtitle2" className={classes.icon}>
            Delivery
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </Paper>
    </div>
  );
}

export default Header;
