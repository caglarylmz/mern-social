import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="/assets/person/profile2.jpg"
              className="post-prfile-image"
              alt=""
            />
            <span className="post-top-username">Profile-2</span>
            <span className="post-top-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center"></div>
        <div className="post-bottom"></div>
      </div>
    </div>
  );
}
