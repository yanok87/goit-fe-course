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
} from './Profile.styled';

const Profile = props => {
  const { user } = props;

  return (
    <StyledProfile>
      <StyledDescription>
        <StyledImg src={user.avatar} alt="user avatar" />
        <StyledName>{user.name}</StyledName>
        <StyledTagLocation>{user.tag}</StyledTagLocation>
        <StyledTagLocation>{user.location}</StyledTagLocation>
      </StyledDescription>

      <StyledStats>
        <StyledItem>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{user.stats.followers}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{user.stats.views}</StyledQuantity>
        </StyledItem>
        <StyledItem>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{user.stats.likes}</StyledQuantity>
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
