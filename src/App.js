import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import { Skeleton } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CircularProgress from '@mui/material/CircularProgress';
import { BarChart } from './BarChart';
import { DoughnutChart } from './Doughnut';
import SideMenuBar from './SideMenu';
import DashboardTest from './DashboardTest';
import TextField from '@mui/material/TextField';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@mui/material/Avatar';
import { Bar } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <DashTest />
    </div>
  );
}


function DashTest() {
  return(
    <div className='main-container'>
      <div className='first-container'>
        <DashboardHome />
      </div>
      <div className='second-container'>
        <SummaryBoxList />
      </div>
      <div className='third-container'>
        <div className='barchart'><BarChart /></div>
      </div>
      <div className='fourth-container'>
        <div className='doughnut'>
          <DoughnutChart />
        </div>
        
      </div>
      <div className='fifth-container'>e</div>
    </div>
  )
}

function Dashboard() {
  return(
    <div className='dashboard-container'>
      <div className='dashboard-item1'><DashboardHome /></div>
      <div className='dashboard-item2'><SummaryBoxList /></div>
      <div >
        <OverviewBox className="dashboard-item3"/>
        <CustomerBox className="dashboard-item4"/>
      </div>
    </div>
  )
}

function DashboardHome() {
  return(
    <div>
      <SideMenuBar />
    </div>
  )
}

function OverviewBox() {
  return(
    <div className='overview-box-container'>
      <BarChart />
    </div>
  )
}

function CustomerBox() {
  return(
    <div className='customer-box-container'>
      <div className='customer-header'>
        <h3 className=''>Customers</h3>
        <p className='customer-header-subtext'>Customers that buy products</p>
      </div>
      <div className='customer-chart'>
        <DoughnutChart />
      </div>
    </div>
  )
}

function SummaryBoxList() {
  return(
    <div >
      <div className='header-container'>
        <div>Hello Tharun 👋,</div>
        {/* <div style={{width: '200px', height: 5}}><TextField label="Search" /></div> */}
      </div>
    <div className='summary-box-list'>
      <SummaryBox />
      <SummaryBox />
      <SummaryBox />
      <SummaryBox />
    </div>
    </div>
  )
}

function SummaryBox() {
  const data = {
    num: "$198K",
    icon: faDollarSign,
    text: "Earning" ,
    percent: "35.7% this year"
  }
  return(
    <div className='summary-box-container'>
      <div className='summary-box-icon'>
        <Avatar sx={{ width: 70, height: 70,bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </div>
      <div className='summary-box-specs'>
        <text>Earning</text>
        <text>75</text>
        <text>⬆37.8 this month</text>
      </div>
    </div>
  )
}

export default App;
