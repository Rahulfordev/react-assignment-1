/* eslint-disable react/prop-types */
const UserProfile = ({ user: { name, avatar, bio } }) => {
  return (
    <div className="user__container">
      <img className="user__image" src={avatar} alt="user-image" />
      <div className="user__details">
        <h4 className="user__name">{name}</h4>
        <p className="user__bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
