"use client"
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  const { user } = useAuth();

  const isAdmin = user?.role === "ADMIN";
  const isManager = user?.role === "MANAGER";
  const isStaff = user?.role === "STAFF";

  return (
    <aside className="left-panel nicescroll-box">
      <nav className="navigation">
        <ul className="list-unstyled main-menu">
          <li className="has-submenu active">
            <Link href="/">
              <i className="fas fa-th-large" />
              <span className="nav-label">Dashboard</span>
            </Link>
          </li>

          {!isStaff && (
            <li className="has-submenu">
              <Link href="#" className="has-arrow mm-collapsed">
                <i className="fas fa-user-md" />
                <span className="nav-label">Nhân viên</span>
              </Link>
              <ul className="list-unstyled mm-collapse">
                {isAdmin && (
                  <li>
                    <Link href="/add-staff">Thêm nhân viên</Link>
                  </li>
                )}
                <li>
                  <Link href="/staff">Tất cả nhân viên</Link>
                </li>
              </ul>
            </li>
          )}

          <li className="has-submenu">
            <Link href="#" className="has-arrow mm-collapsed">
              <i className="fas fa-crow" />
              <span className="nav-label">Chim</span>
            </Link>
            <ul className="list-unstyled mm-collapse">
              <li>
                <Link href="/add-bird">Thêm Chim</Link>
              </li>
              <li>
                <Link href="/bird">Tất Cả Chim</Link>
              </li>
            </ul>
          </li>

          <li className="has-submenu">
            <Link href="#" className="has-arrow mm-collapsed">
              <i className="fas fa-igloo" />
              <span className="nav-label">Lồng chim</span>
            </Link>
            <ul className="list-unstyled mm-collapse">
              <li>
                <Link href="/add-cage">Thêm lồng</Link>
              </li>
              <li>
                <Link href="/cage">Tất cả Lồng</Link>
              </li>
            </ul>
          </li>

          {/* <li className="has-submenu">
            <a href="/add-process">
              <i className="fas fa-heart" />
              <span className="nav-label">Tạo quá trình ghép giống</span>
            </a>
          </li> */}

          <li className="has-submenu">
            <Link href="/cage-diagram">
              <i className="fas fa-heart" />
              <span className="nav-label">Sơ đồ khu ghép giống</span>
            </Link>
          </li>

          <li className="has-submenu">
            <Link href="/cage-diagram-single">
              <i className="fas fa-kiwi-bird" />
              <span className="nav-label">Sơ đồ khu nuôi chim</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-widgets"></div>
    </aside>
  );
};

export default SideBar;
