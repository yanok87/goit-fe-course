import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 334px;
  padding-top: 30px;
  border-radius: 2%;
  margin: 0 auto 50px;
  text-align: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const StyledDescription = styled.div`
  text-align: center;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
`;

export const StyledName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const StyledTagLocation = styled.p`
  font-size: 14px;
  color: #929eab;
`;

export const StyledStats = styled.ul`
  background-color: #f3f6f9;
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  border-radius: 2%;
`;

export const StyledItem = styled.li`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  border: 1px solid #d1d5da;
  border-radius: 2%;

  margin: 0;
  padding: 30px 0;
`;

export const StyledLabel = styled.span`
  font-size: 14px;
  color: #929eab;
  margin-bottom: 5px;
`;

export const StyledQuantity = styled.span`
  font-weight: 600;
`;
