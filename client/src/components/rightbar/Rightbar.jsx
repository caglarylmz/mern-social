import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birtday-container">
          <img src="/assets/gift.jpg" alt="" />
          <span className="birtday-text">
            <b>Çağlar</b> and <b>3 other </b> friend have a birthday today
          </span>
        </div>
        <img className="rightbar-ad" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friendlist">
          <li className="rightbar-firendlist-item">
            <div className="rightbar-profileImg-container">
              <img src="/assets/person/profile1.jpg" alt="" />
              <span className="rightbar-person-online"></span>
            </div>
            <span className="rightbar-person-username">John Doe</span>
          </li>
          <li className="rightbar-firendlist-item">
            <div className="rightbar-profileImg-container">
              <img src="/assets/person/profile2.jpg" alt="" />
              <span className="rightbar-person-online"></span>
            </div>
            <span className="rightbar-person-username">John Doe</span>
          </li>
          <li className="rightbar-firendlist-item">
            <div className="rightbar-profileImg-container">
              <img src="/assets/person/profile3.jpg" alt="" />
              <span className="rightbar-person-online"></span>
            </div>
            <span className="rightbar-person-username">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
