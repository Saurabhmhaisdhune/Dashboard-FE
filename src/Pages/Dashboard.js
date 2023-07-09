import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { MdNotificationsNone } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FaMoneyBills } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import {SlOptionsVertical} from "react-icons/sl"
import Chart from "../Chart/Chart";
import DataChart from "../Chart/DataChart";
import SideBar from "../Components/SideBar";

function Dashboard() {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("https://rajwadi.onrender.com/basic")
      .then((response) => response.json())
      .then((data) => setVal(data));
  }, []);

  function getIcon(iconName) {
    {
      switch (iconName) {
        case "money":
          return <FaMoneyBills />;
        case "likes":
          return <AiOutlineLike />;
        case "users":
          return <FiUsers />;
        case "trans":
          return <BsTags />;

        default:
        // code block
      }
    }
  }
  return (
    <div className="Dashboard-main">
      <SideBar />
      <div className="main-content">
        <div className="d-headline">
          <h1 className="d-title">Dashboard</h1>
          <div className="search-main">
          <span className="option">
            <SlOptionsVertical/>
            <div className="sub-option">
              <ul>
                <li>Dashboard</li>
                <li>Transactions</li>
                <li>Schedules</li>
                <li>Users</li>
                <li>Settings</li>
              </ul>
            </div>
          </span>
            <div className="searchbar">
              <input
                type="search"
                placeholder="Search..."
                className="input-search"
              />
              <BiSearch className="bisearch-icon" />
            </div>
            <MdNotificationsNone className="MdNotificationsNone" />
            <img
              src="https://media.licdn.com/dms/image/D5603AQG3hLlbwPvWTw/profile-displayphoto-shrink_800_800/0/1684917539446?e=2147483647&v=beta&t=2vZNEmLFSE7u7yVnbl_jqP5jqZEdY37Y4Uq4RDg4ty0"
              className="pro-pic"
              alt="profile"
            />
          </div>
        </div>
        <div className="d-data">
          {val.map((item, index) => {
            return (
              <div
                className="data-4"
                style={{ backgroundColor: [item.color] }}
                key={item._id}
              >
                <span className="FaMoneyBills">{getIcon(item.icon)}</span>
                <p className="d-topic">{item.topic}</p>
                <p className="d-value">{item.value}</p>
              </div>
            );
          })}
        </div>
        <div className="chart">
          <Chart />
        </div>
        <div className="top-products">
          <div className="pie-chart">
            <div className="test-marg">
              <div className="chart-headline">
                <h1 className="line-1">Top products</h1>
                <h1 className="line-2">May-June 2021</h1>
              </div>
              <div className="porduct-data">
                <DataChart className="datachart" />
                <div>
                  <h1 className="percentage">
                    Basic Tees
                    <br />
                    <span className="percentage-value">55%</span>
                  </h1>
                  <h1 className="percentage">
                    Custom Short Pants
                    <br />
                    <span className="percentage-value">31%</span>
                  </h1>
                  <h1 className="percentage">
                    Super Hoodies
                    <br />
                    <span className="percentage-value">14%</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="pie-chart">
            <div className="schedules">
              <div className="chart-headline">
                <h1 className="line-1">Today's Schedule</h1>
                <h1 className="line-2">See all</h1>
              </div>
              <div className="meeting">
                <div className="liner">
                  <li className="meet">
                    Meeting with suppliers from Kuta Bali
                  </li>
                  <li className="common">14.00-15.00</li>
                  <li className="common">at Sunset Road, Kuta, Bali.</li>
                </div>
                <div className="liner1">
                  <li className="meet">Check operation at Giga Factory 2</li>
                  <li className="common">18.00-20.00</li>
                  <li className="common">at Central Jakarta</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
