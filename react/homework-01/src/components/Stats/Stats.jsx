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
} from './Stats.styled.js';

const Stats = ({ title, stats }) => (
  <StyledSection class="stats-section">
    {title && <StyledTitle class="title">Upload stats</StyledTitle>}

    <StyledList class="stat-list">
      {stats.map(stats => (
        <StyledItem class="item" key={stats.id} bcgc={randomColor()}>
          <StyledLabel class="label">{stats.label}</StyledLabel>
          <StyledPercentage class="percentage">
            {stats.percentage}%
          </StyledPercentage>
        </StyledItem>
      ))}
    </StyledList>
  </StyledSection>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired,
  ),
};

export default Stats;
