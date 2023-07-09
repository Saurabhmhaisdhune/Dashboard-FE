import React from 'react'
import "./SideBar.css"
import { FiPieChart, FiSettings } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsTags } from "react-icons/bs";
import { PiTimer } from "react-icons/pi";

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
          <h1 className="dashboard-title">Board.</h1>
          <ul className="d-ul">
            <li className="d-list-active">
              <span className="d-icons">
                <FiPieChart />
              </span>
              Dashboard
            </li>
            <li className="d-list">
              <span className="d-icons">
                <BsTags />
              </span>
              Transactions
            </li>
            <li className="d-list">
              <span className="d-icons">
                <PiTimer />
              </span>
              Scedules
            </li>
            <li className="d-list">
              <span className="d-icons">
                <FaRegCircleUser />
              </span>
              Users
            </li>
            <li className="d-list">
              <span className="d-icons">
                <FiSettings />
              </span>
              Settings
            </li>
          </ul>
          <ul className="d-ul1">
            <li className="help-list">Help</li>
            <li className="help-list">Contact Us</li>
          </ul>
        </div>
      </div>
  )
}
