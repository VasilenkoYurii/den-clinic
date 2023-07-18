import logoImg from '../../images/logo.png';
import instSvg from '../../images/instagram.svg';
import teleSvg from '../../images/telegram.svg';
import youSvg from '../../images/youtube.svg';

import {
  StyledFooter,
  Container,
  LogoImage,
  FooterPrg,
  SocialBox,
  PrgBox,
} from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <LogoImage src={logoImg} alt="Company logo" />
        <PrgBox>
          <FooterPrg>Про клініку</FooterPrg>
          <FooterPrg>Наші послуги</FooterPrg>
        </PrgBox>
        <PrgBox>
          <FooterPrg>Прайс</FooterPrg>
          <FooterPrg>Наші лікарі</FooterPrg>
        </PrgBox>
        <PrgBox>
          <FooterPrg>Акції</FooterPrg>
        </PrgBox>
        <SocialBox>
          <a href="https://www.google.com">
            <img src={instSvg} alt="instagram" />
          </a>
          <a href="https://www.google.com">
            <img src={teleSvg} alt="telegram" />
          </a>
          <a href="https://www.google.com">
            <img src={youSvg} alt="youtube" />
          </a>
        </SocialBox>
        <PrgBox>
          <FooterPrg>Ліцензії</FooterPrg>
          <FooterPrg>Політика конфіденційності</FooterPrg>
        </PrgBox>
      </Container>
    </StyledFooter>
  );
};
