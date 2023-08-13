import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const Widget = () => {
  const { user, logout } = useAuth();
  async function handleLogout(e) {
    e.preventDefault();
    logout();
  }
  return (
    <div class="widget">
      <div class="rounded-circle customsize">
        <img src="img/logo_200x200.png" class="topupset" alt="logo" />
      </div>
      <div class="admin-box">
        <div class="user">
          <div class="username colorcodebage">
            <h3 className="cap-first-letter">{user.username ?? "Profile"}</h3>
          </div>
        </div>
        <nav class="navdashboard">
          <ul>
            <li>
              <a href="/dashboard">
                <i class="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/myprofile">
                <i class="fa fa-user"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <a href="/myads">
                <span data-icon="V" class="icon"></span>
                <span>My Ads</span>
              </a>
            </li>
            <li>
              <a href="/#" onClick={handleLogout}>
                <i class="fa fa-sign-out"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
