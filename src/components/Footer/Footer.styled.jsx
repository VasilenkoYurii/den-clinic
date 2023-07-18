import styled from '@emotion/styled';

export const StyledFooter = styled.header`
  height: 144px;
  flex-shrink: 0;
  background-color: #455d72;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1200px;
  padding-top: 28px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LogoImage = styled.img`
  width: 114px;
  height: 50px;

  margin-right: 76px;
`;

export const FooterPrg = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #fbfdff;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const PrgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SocialBox = styled.div`
  margin-right: 123px;

  display: flex;
  gap: 10px;
`;
