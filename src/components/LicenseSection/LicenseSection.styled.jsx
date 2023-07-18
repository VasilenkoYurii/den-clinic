import styled from '@emotion/styled';

export const StyledLicenseSection = styled.section`
  width: 1200px;

  display: flex;
  gap: 30px;

  margin-bottom: 100px;
`;

export const LicenseButton = styled.button`
  width: 382px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #39ade0;
  background: #39ade0;
  padding: 19px 0 19px 24px;

  display: flex;
  gap: 17px;
  align-items: center;

  cursor: pointer;

  transition: all 500ms;

  &:hover,
  &:focus {
    background: #1d779f;
  }
`;

export const LicensePrg = styled.p`
  width: 272px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: #fbfdff;

  text-align: left;
`;
