import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import {
  StyledSection,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledLabel,
  StyledPercentage,
} from './Stats.styled';

const Stats = ({ title, stats }) => (
  <StyledSection>
    {title && <StyledTitle>Upload stats</StyledTitle>}

    <StyledList>
      {stats.map(stat => (
        <StyledItem key={stat.id} bcgc={randomColor()}>
          <StyledLabel>{stat.label}</StyledLabel>
          <StyledPercentage>{stat.percentage}%</StyledPercentage>
        </StyledItem>
      ))}
    </StyledList>
  </StyledSection>
);

Stats.defaultProps = {
  title: 'Hi',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
