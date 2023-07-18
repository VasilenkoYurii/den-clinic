import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  margin-bottom: 70px;
`;

export const Container = styled.div`
  width: 1200px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopPart = styled.div`
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  background: #39ade0;

  display: flex;
  justify-content: center;
`;

export const BottomPart = styled.div`
  width: 100%;
  height: 40px;
  flex-shrink: 0;

  background: #fbfdff;
  box-shadow: 0px 4px 11px 0px rgba(53, 84, 97, 0.1);

  display: flex;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 114px;
  height: 50px;

  margin-right: 76px;
`;

export const AddressNumberPrg = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #fbfdff;

  display: flex;
  align-items: center;
`;

export const ContactLink = styled.a`
  display: flex;
  gap: 4px;
`;

export const CallLink = styled.button`
  width: 242px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #fbfdff;
  background: #39ade0;

  color: #fbfdff;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  cursor: pointer;

  transition: all 500ms;

  &:hover,
  &:focus {
    background: #1d779f;
  }
`;

export const AddressBox = styled.div`
  margin-right: 103px;

  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ContactBox = styled.div`
  margin-right: 59px;

  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const SocialBox = styled.div`
  margin-right: 123px;

  display: flex;
  gap: 10px;
`;
