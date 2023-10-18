import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import { Skeleton, Table } from '@mui/material';
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
import BasicTable from './Table';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}


function Dashboard() {
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
          <div className='doughnut-header'>
            <p>Customers</p>
            <p>Customers that buy products</p>
          </div>
          <div className='doughnut-chart'>
          <DoughnutChart />
          </div>
        </div>
        
      </div>
      <div className='fifth-container'>
        <BasicTable />
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

function SummaryBoxList() {
  const data =[
    {
   num: "$198K",
   icon: <CurrencyRupeeOutlinedIcon />,
   text: "Earning" ,
   percent: "⬆37.8%",
   increase: true,
   bgcolor: "lightgreen"
 },
 {
   num: "$2.4K",
   icon: <AccountBalanceWalletOutlinedIcon />,
   text: "Orders",
   percent: "⬇2%",
   increase: false,
   bgcolor: "lightblue"
 },
 {
   num: "$2.4K",
   icon: <AssignmentIcon />,
   text: "Balance",
   percent: "⬇2%",
   increase: false,
   bgcolor: "lightred"
 },
 {
   num: "$2.4K",
   icon: <TrendingDownOutlinedIcon />,
   text: "Total Sales",
   percent: "⬆11%",
   increase: true,
   bgcolor: "lightpink"
 },
]
  return(
    <div >
      <div className='header-container'>
        <div>Hello Tharun 👋,</div>
        {/* <div style={{width: '200px', height: 5}}><TextField label="Search" /></div> */}
      </div>
    <div className='summary-box-list'>
      {
        data.map((item) => {
          return(
            <SummaryBox data={item}/>
          )
        })
      }
    </div>
    </div>
  )
}

function SummaryBox({data}) {

 const spanColor = data.increase ?  'green' : 'red'

  return(
    <div className='summary-box-container'>
      <div className='summary-box-icon'>
        <Avatar sx={{ width: 70, height: 70,bgcolor: `${data.bgcolor}` }}>
          {data.icon}
        </Avatar>
      </div>
      <div className='summary-box-specs'>
        <text style={{color: 'gray', fontSize: '12px'}}>{data.text}</text>
        <text style={{fontWeight: 'bolder', fontSize: '18px'}}>{data.num}</text>
        <text style={{color: 'gray',fontSize: '12px'}}>
          <span style={{color:spanColor}}>{data.percent}</span> this month</text>
      </div>
    </div>
  )
}

export default App;
