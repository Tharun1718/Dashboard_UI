import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import { Skeleton } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  return (
    <div className="App">
      <SummaryBoxList />
      <CustomerBox />
    </div>
  );
}

function CustomerBox() {
  return(
    <div className='customer-box-container'>
      <div className='customer-header'>
        <h3 className=''>Customers</h3>
        <p className='customer-header-subtext'>Customers that buy products</p>
      </div>
      <div className='customer-chart'>
        <CircularProgress variant="determinate" value={100} />
      </div>
    </div>
  )
}

function SummaryBoxList() {
  return(
    <div className='summary-box-list'>
      <SummaryBox />
      <SummaryBox />
      <SummaryBox />
      <SummaryBox />
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
      <FontAwesomeIcon color='green' icon={faCircle} size='2xl'/>
      {/* <Brightness1RoundedIcon color='blue' /> */}
      {/* <Skeleton variant="circular" width={40} height={40} /> */}
      </div>
      <div className='summary-box-specs'>
        <p className='summary-box-text'>{data.text}</p>
        <p className='summary-box-number'>{data.num}</p>
        <p className='summary-box-percent'><ArrowUpwardIcon className='icon-size' />{data.percent}</p>
      </div>
    </div>
  )
}

export default App;
