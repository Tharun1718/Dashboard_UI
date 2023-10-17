import React from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from "@mui/material";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import Avatar from '@mui/material/Avatar';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 180,
    height: 700,
    backgroundColor: '#15156b',
    padding: 0,
    textAlign: 'left',
    marginLeft: 0,
    color: 'white'
  }));

function SideMenuBar() {
    return(
        <div className="sidemenu-container">
            <DemoPaper square className="">
                <div className="sidemenu-header">
                    <div><SpaceDashboardOutlinedIcon /></div>
                    <div>Dashboard</div>
                </div>
                <div className="sidemenu-list">
                    <div className="sidemenu-list-item"><Button style={{color: 'white',fontSize: 10}}><DashboardCustomizeOutlinedIcon fontSize="small"/>Dashboard</Button></div>
                    <div><Button style={{color: 'white',fontSize: 10}}><ProductionQuantityLimitsOutlinedIcon fontSize="small"/>Products</Button><ArrowForwardIosIcon sx={{fontSize: 8}} /></div>
                    <div><Button style={{color: 'white',fontSize: 10}}><PeopleOutlineOutlinedIcon fontSize="small" />Customers</Button><ArrowForwardIosIcon sx={{fontSize: 8}} /></div>
                    <div><Button style={{color: 'white',fontSize: 10}}><CurrencyRupeeOutlinedIcon fontSize="small"/>Income</Button><ArrowForwardIosIcon sx={{fontSize: 8}} /></div>
                    <div><Button style={{color: 'white',fontSize: 10}}><TaskOutlinedIcon fontSize="small"/>Promote</Button><ArrowForwardIosIcon sx={{fontSize: 8}} /></div>
                    <div><Button style={{color: 'white',fontSize: 10}}><HelpCenterOutlinedIcon fontSize="small"/>Help</Button><ArrowForwardIosIcon sx={{fontSize: 8}} /></div>
                    <div className="sidemenu-profile">
                        <div>
                            <Button style={{color: 'white',textAlign:"left", fontSize: 10,width:150,backgroundColor: "rgb(151, 151, 233)"}}><Avatar alt="React" src="./static/logo512.png" sx={{ width: 18, height: 18 }} />
                                <div style={{fontSize:10,display: 'flex',flexDirection:'column',gap:0}}>
                                    <text style={{textAlign: "left"}}>Evano</text>
                                    <text style={{fontSize: 8}}>Project Manager</text>
                                </div>      
                            </Button>
                        </div>
                    </div>
                </div>
            </DemoPaper>
        </div>
    )
}

export default SideMenuBar;