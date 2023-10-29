import React from "react";

const SideBar = () => {
  return (
    <aside className="left-panel nicescroll-box">
      <nav className="navigation">
        <ul className="list-unstyled main-menu">
          <li className="has-submenu active">
            <a href="/">
              <i className="fas fa-th-large" />
              <span className="nav-label">Dashboard</span>
            </a>
          </li>

          <li className="has-submenu">
            <a href="#" className="has-arrow mm-collapsed">
              <i className="fas fa-user-md" />
              <span className="nav-label">Nhân viên</span>
            </a>
            <ul className="list-unstyled mm-collapse">
              <li>
                <a href="/add-staff">Thêm nhân viên</a>
              </li>
              <li>
                <a href="/staff">Tất cả nhân viên</a>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href="#" className="has-arrow mm-collapsed">
              <i className="fas fa-crow" />
              <span className="nav-label">Chim</span>
            </a>
            <ul className="list-unstyled mm-collapse">
              <li>
                <a href="/add-bird">Thêm Chim</a>
              </li>
              <li>
                <a href="/bird">Tất Cả Chim</a>
              </li>
            </ul>
          </li>

          <li className="has-submenu">
            <a href="#" className="has-arrow mm-collapsed">
              <i className="fas fa-igloo" />
              <span className="nav-label">Lồng chim</span>
            </a>
            <ul className="list-unstyled mm-collapse">
              <li>
                <a href="/add-cage">Thêm lồng</a>
              </li>
              <li>
                <a href="/cage">Tất cả Lồng</a>
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
            <a href="/cage-diagram">
              <i className="fas fa-heart" />
              <span className="nav-label">Sơ đồ khu ghép giống</span>
            </a>
          </li>

          <li className="has-submenu">
            <a href="/cage-diagram-single">
              <i className="fas fa-kiwi-bird" />
              <span className="nav-label">Sơ đồ khu nuôi chim</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-widgets"></div>
    </aside>
  );
};

export default SideBar;
