import React from "react";
import SidebarCSS from "./Sidebar.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Individual } from "../../assets/account.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as Form } from "../../assets/form.svg";
import { ReactComponent as Submission } from "../../assets/submission.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={SidebarCSS.sidebar_cover}>
      <div className={SidebarCSS.logo}>
        <Logo width={"160px"} />
      </div>
      <div className={SidebarCSS.profile}>
        <Individual width={"50px"} height={"50px"} />
      </div>
      <div className={SidebarCSS.text}>
        <div className={SidebarCSS.name}>Sorin Lupaștean</div>
        <div className={SidebarCSS.type_of_account}>individual</div>
      </div>
      <div className={SidebarCSS.buttons}>
        <div className={SidebarCSS.main_buttons}>
          <Link to="/dashboard" className={SidebarCSS.link_page}>
            <button>
              <DashboardIcon className={SidebarCSS.icon} />
              Dashboard
            </button>
          </Link>
          <Link to="/my-forms" className={SidebarCSS.link_page}>
            <button>
              <Form className={SidebarCSS.icon} />
              My Froms
            </button>
          </Link>
          <Link to="/submissions" className={SidebarCSS.link_page}>
            <button>
              <Submission className={SidebarCSS.icon} />
              Submissions
            </button>
          </Link>
        </div>
        <div className={SidebarCSS.footer_buttons}>
          <button>
            <Settings className={SidebarCSS.icon} />
            Settings
          </button>
          <Link to="/sign-in-page" className={SidebarCSS.logout_link}>
            <button>
              <Logout className={SidebarCSS.icon} />
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
