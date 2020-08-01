import React from "react";
import "./profile.css";

import { ReactComponent as CompanyIcon } from "../../assets/business-24px.svg";
import { ReactComponent as LocationIcon } from "../../assets/location_on-24px.svg";
import { ReactComponent as EmailIcon } from "../../assets/email-24px.svg";

function Profile({
  avatar_url,
  name,
  login,
  bio,
  followers,
  following,
  company,
  location,
  email,
}) {
  return (
    <div className="user">
      <div className="user__avatar">
        <img src={avatar_url} alt="profile image" />
      </div>
      <div className="user__personal_details">
        <h2 className="user__name">{name}</h2>
        <p className="user__login">{login}</p>
        <p className="user__bio">{bio}</p>
        <p className="user__follower">
          <span>
            <strong>{followers}</strong> Followers
          </span>
          <span>
            <strong>{following}</strong> Following
          </span>
        </p>
        <div className="user__detail_row">
          <p className="user__contact">
            <CompanyIcon />
            <span>{company}</span>
          </p>
          <p className="user__contact">
            <LocationIcon />
            <span>{location}</span>
          </p>
        </div>
        <div className="user__detail_row">
          <p className="user__contact">
            <EmailIcon />
            <span>{email || "N/A"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
