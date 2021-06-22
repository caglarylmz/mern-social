import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-top">
        <div className="topbar-top-left">
          <span className="topbar-top-logo">SocialApp</span>
        </div>
        <div className="topbar-top-center">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for friend,post or video..."
            />
          </div>
        </div>
        <div className="topbar-top-right">
          <div className="topbar-top-links">
            <span className="topbar-top-link">Home</span>
            <span className="topbar-top-link">Timeline</span>
          </div>
          <div className="topbar-top-icons">
            <div className="topbar-top-icon">
              <Person />
              <span className="topbar-top-icon-badge">1</span>
            </div>
            <div className="topbar-top-icon">
              <Chat />
              <span className="topbar-top-icon-badge">2</span>
            </div>
            <div className="topbar-top-icon">
              <Notifications />
              <span className="topbar-top-icon-badge">5</span>
            </div>
          </div>
          <img
            src="/assets/person/profile3.jpg"
            alt=""
            className="topbar-top-img"
          />
        </div>
      </div>
      <div className="topbar-bottom">
        <div className="topbar-bottom-links">
          <span className="topbar-bottom-link">Endeksler</span>
          <span className="topbar-bottom-link"></span>
          <span className="topbar-bottom-link">Timeline</span>
        </div>
      </div>
    </div>
  );
}
