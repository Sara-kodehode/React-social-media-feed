import thumbsUpIcon from "./assets/thumbsUpIcon.png";
import blankUser from "./assets/blank-user.jpg";
export default function Post({
  username,
  contenttext,
  contentlikes,
  contenttimestamp,
}) {
  return (
    <div className="post-style">
      <img src={blankUser} className="profile-image" alt="" />

      <div className="post-content">
        <h1>{username}</h1>
        <p>{contenttext}</p>
        <div className="post-info">
          <div className="likes-info">
            <img
              src={thumbsUpIcon}
              className="lincon-img"
              alt="thumbs_up_img"
            />
            <p>{contentlikes}</p>
          </div>
          <p>{contenttimestamp}</p>
        </div>
      </div>
    </div>
  );
}
