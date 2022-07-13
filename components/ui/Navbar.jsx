import React,{useState} from 'react';
import {AppBar,Toolbar,IconButton,MenuIcon,Typography,Button,Box,Drawer, Divider,List,
    ListItem,ListItemText,ListItemIcon
  } from "../../assets";
import { logo } from '../../assets/images';
import { CustomLink,CustomIconLink } from '../../components/styledComponents/CustomLinks';
import Image from 'next/image'
import Link from 'next/link';
import { HomeIcon,KeyboardBackspaceIcon,FamilyRestroom,SummarizeIcon,BookIcon,
    NewspaperIcon,AlarmOnIcon,LiveTvIcon,ReportIcon
} from '../../assets/icons';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navlinks = [
    {title:'Apply Gharwapasi',path:'apply-gharwapasi'},
    {title:'Join Mission',path:'join-mission'},
    {title:'cases',path:'cases'},
    {title:'club',path:'club'},
  ]

  const mobileNavLink = [
    {title:'Home',path:'home',Icon:HomeIcon,color:'#3AB0FF'},
    {title:'Apply Gharwapasi',path:'apply-gharwapasi',Icon:KeyboardBackspaceIcon,color:'#FFB562'},
    {title:'Marriage Consultation',path:'marriage-consultation',Icon:FamilyRestroom,color:'#F94C66'},
    {title:'Blogs',path:'blogs',Icon:SummarizeIcon,color:'#F15412'},
    {title:'Announcement',path:'announcement',Icon:NewspaperIcon,color:'#FFC4C4'},
    {title:'Report Victim',path:'report-victim',Icon:ReportIcon,color:'#A10035'},
    {title:"Maulana's Thug Life",path:'maulanas-thug-life',Icon:AlarmOnIcon,color:'#A10035'},
    {title:'Gharwapasi Testimonials',path:'gharwapasi-testimonials',Icon:LiveTvIcon,color:'#3AB0FF'},
  ]

  return (
    <div>
      <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
              <Image
                src={logo.src}
                alt="Mission Ghar wapasi"
                style={{cursor:'pointer',marginTop:"6px"}}
                width="173px"
                height="43px"
              />
              </Link>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {navlinks.map((item,index)=>(
                <CustomLink key={index} title={item.title} path={item.path}/>
              ))}
                
            </Box>
            <Button color="inherit" disabled>Login</Button>
          </Toolbar>
          <Drawer anchor="left" open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
            <Box width='250px'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image
                src={logo.src}
                alt="The mission Gharwapasi"
                width="173px"
                height="43px"
                style={{cursor:'pointer',margin:"6px 5px"}}
              />
            </Typography>
            <Divider/>
            <List>
              {mobileNavLink.map((item,index)=>(
                <CustomIconLink key={index} title={item.title} path={item.path} Icon={item.Icon} color={item.color}/>
              ))}
            </List>
            </Box>
          </Drawer>
        </AppBar>
      </Box>
    </nav>
    </div>
  )
}

export default Navbar