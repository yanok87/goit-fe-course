import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProfile,
  StyledDescription,
  StyledImg,
  StyledName,
  StyledTagLocation,
  StyledStats,
  StyledItem,
  StyledLabel,
  StyledQuantity,
} from './Profile.styled.js';

const Profile = props => {
  const { user } = props;

  return (
    <StyledProfile>
      <StyledDescription>
        <StyledImg src={user.avatar} alt="user avatar" class="avatar" />
        <StyledName class="name">{user.name}</StyledName>
        <StyledTagLocation class="tag">{user.tag}</StyledTagLocation>
        <StyledTagLocation class="location">{user.location}</StyledTagLocation>
      </StyledDescription>

      <StyledStats class="stats">
        <StyledItem>
          <StyledLabel class="label">Followers</StyledLabel>
          <StyledQuantity class="quantity">
            {user.stats.followers}
          </StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel class="label">Views</StyledLabel>
          <StyledQuantity class="quantity">{user.stats.views}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel class="label">Likes</StyledLabel>
          <StyledQuantity class="quantity">{user.stats.likes}</StyledQuantity>
        </StyledItem>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
