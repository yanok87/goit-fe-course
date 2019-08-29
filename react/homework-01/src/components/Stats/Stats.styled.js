import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 300px;
  margin: 0 auto 50px;
  text-align: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  color: #5d6164;
  margin: 0 auto;
  padding: 30px 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  background-color: ${props => props.bcgc};
  padding: 15px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.span`
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
`;

export const StyledPercentage = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;
