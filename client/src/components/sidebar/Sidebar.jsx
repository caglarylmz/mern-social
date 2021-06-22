import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircleFilled className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Bookmark</span>
          </li>{" "}
          <li className="sidebar-list-item">
            <Help className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Questions</span>
          </li>{" "}
          <li className="sidebar-list-item">
            <Work className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Jobs</span>
          </li>{" "}
          <li className="sidebar-list-item">
            <Event className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Event</span>
          </li>{" "}
          <li className="sidebar-list-item">
            <School className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-title">Course</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friendlist">
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile1.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-1</span>
          </li>{" "}
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile2.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-2</span>
          </li>{" "}
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile1.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-3</span>
          </li>{" "}
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile2.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-4</span>
          </li>
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile1.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-5</span>
          </li>
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile2.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-6</span>
          </li>
          <li className="sidebar-friendlist-item">
            <img
              src="/assets/person/profile1.jpg"
              alt=""
              className="sidebar-friendlist-item-img"
            />
            <span className="sidebar-friendlist-item-title">Friend-7</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
