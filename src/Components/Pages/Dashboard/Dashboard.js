import React,{useState} from 'react';
import './dashboard.css'
import box1 from '../../../assets/sidebar/boxx1.png'
import box2 from '../../../assets/sidebar/boy2x.png'
import box3 from '../../../assets/sidebar/box3.png'
import paymentcash from '../../../assets/dashboard/payment-cash.png'
import courier from '../../../assets/dashboard/courier.png'
import {Bar} from 'react-chartjs-2';
import { UserData } from "./ChartData";
import BarChart from "./BarChart";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "red"
          // "rgba(75,192,192,1)",
          // "#ecf0f1",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <>
      <div className='row'>
        <div className="backgroundImage col-sm-12 col-md-12 col-lg-12 ">
          <h3 className='text-white'>Dashboard</h3>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm-12 col-md-6 col-lg-3  '>
          <div className='form-group'>
            <input type='text' placeholder='Search' style={{width:"100%"}}/>

          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2  '>
          <div className='form-group'>
            <input type='text' placeholder='Date type' style={{width:"100%"}}/>
          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-2  '>
          <div className='form-group'>
            <input type='date' placeholder='From Date' style={{width:"100%"}}/>

          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-2  '>
          <div className='form-group'>
            <input type='date' placeholder='To Date' style={{width:"100%"}} />

          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-2  '>
          <div className='form-group'>
            <input type='date' placeholder='To Date' style={{width:"100%"}}/>

          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-1  '>

          <button type="button" style={{ backgroundColor: "rgb(149, 0, 20)", borderColor: "rgb(149, 0, 20)" }}>
            <span className="text-white">Filter</span></button>

        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card' >
            <img className='img-fluid' src={box1} alt='box1'  />
            <div className='text-white'>Today's Pickups</div>

          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card'>
            <img className='img-fluid' src={box2} alt='box1'  />
            <div className='text-white'>Today's Manifest</div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card'>
            <img className='img-fluid' src={box3} alt='box1'  />
            <div className='text-white'>Order's Pending</div>
          </div>
        </div><div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card'>
            <img className='img-fluid' src={box3} alt='box1'  />
            <div className='text-white'>Order's Deliver</div>
          </div>
        </div>

      </div>
      <div className='row mt-3'>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card_2' >
            <img src={box1} alt='box1' style={{ width: '100px' }} />
            <div className='text-white'>Total Pickups</div>

          </div>

        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card_2'>
            <img src={courier} alt='box1' style={{ width: '100px' }} />
            <div className='text-white'>Total Manifest</div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card_2'>
            <img src={courier} alt='box1' style={{ width: '100px' }} />
            <div className='text-white'>Total Couriers</div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-3 '>
          <div className='card_2'>
            <img src={courier
            } alt='box1' style={{ width: '100px' }} />
            <div className='text-white'>Supervisor</div>
          </div>
        </div>

      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-4 '>
        <div className='mt-5' style={{background:'white',padding:'15px'}}>
        <BarChart chartData={userData} />
      </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 '>
        
        </div>
        <div className='col-sm-12 col-md-12 col-lg-3 offset-lg-1 '>
          <div className='row mt-3'>
            <div className='col-sm-12 col-md-6 col-lg-12 '>
              <div className='card_2 p-3'>
                <img src={paymentcash} alt='box1' />
                <div className='text-white'>Total Revenue</div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-12  mt-3'>
              <div className='card_2 p-3'>
                <img src={paymentcash} alt='box1' />
                <div className='text-white'>Cash on Delivery</div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-12  mt-3'>
              <div className='card_2 p-3'>
                <img src={paymentcash} alt='box1' />
                <div className='text-white'>
                  Export Consignme</div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-12  mt-3'>
              <div className='card_2 p-3'>
                <img src={paymentcash} alt='box1' />
                <div className='text-white'>
                  Export Manifest</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
