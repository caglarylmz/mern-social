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
        <div className="post-center">
          <span className="post-text">Hey! Its my first post</span>
          <img src="/assets/post/1.webp" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="post-bottom-icon" src="/assets/like.png" alt="" />
            <img className="post-bottom-icon" src="/assets/hearth.png" alt="" />
            <span className="post-bottom-likeCounter">12 people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-bottom-commentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
