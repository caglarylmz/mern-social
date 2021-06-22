import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src="/assets/person/profile2.jpg" alt="" />
          <input
            className="share-top-input"
            type="text"
            placeholder="What's in your mind Profile-1"
          />
        </div>
        <hr className="share-top-hr" />
        <div className="share-bottom">
          <div className="share-bottom-options">
            <div className="share-bottom-options-item">
              <PermMedia
                htmlColor="tomato"
                className="share-bottom-option-item-icon"
              />
              <span className="share-bottom-option-item-text">
                Photo or Video
              </span>
            </div>
            <div className="share-bottom-options-item">
              <Label
                htmlColor="blue"
                className="share-bottom-option-item-icon"
              />
              <span className="share-bottom-option-item-text">Tag</span>
            </div>
            <div className="share-bottom-options-item">
              <Room
                htmlColor="green"
                className="share-bottom-option-item-icon"
              />
              <span className="share-bottom-option-item-text">Location </span>
            </div>
            <div className="share-bottom-options-item">
              <EmojiEmotions
                htmlColor="black"
                className="share-bottom-option-item-icon"
              />
              <span className="share-bottom-option-item-text">Feelings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
