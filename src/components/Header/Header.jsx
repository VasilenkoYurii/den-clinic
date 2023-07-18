import logoImg from '../../images/logo.png';
import phoneSvg from '../../images/phone.svg';
import instSvg from '../../images/instagram.svg';
import teleSvg from '../../images/telegram.svg';
import youSvg from '../../images/youtube.svg';

import { Navigation } from 'components/Navigation/Navigation';

import {
  StyledHeader,
  TopPart,
  Container,
  BottomPart,
  LogoImage,
  AddressNumberPrg,
  CallLink,
  AddressBox,
  ContactBox,
  SocialBox,
  ContactLink,
} from './Header.styled';

export const Header = () => {
  const handleClick = () => {
    window.location.href =
      'https://www.google.com/search?sxsrf=AB5stBg8nAzxMOB2SuJzljCOBhtWQPQwag:1689669845256&q=%D1%84%D0%BE%D1%82%D0%BE+%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D1%96%D0%B2&tbm=isch&sa=X&ved=2ahUKEwiJ06fX7peAAxVPFBAIHbelDcsQ0pQJegQIDBAB&biw=2133&bih=977&dpr=0.9';
  };

  return (
    <StyledHeader>
      <TopPart>
        <Container>
          <LogoImage src={logoImg} alt="Company logo" />
          <AddressBox>
            <a href="https://maps.google.com?q=м. Київ вул. Красноткацькая, 42">
              <AddressNumberPrg>
                м. Київ вул. Красноткацькая, 42
              </AddressNumberPrg>
            </a>

            <a href="https://maps.google.com?q=м. Бровари вул. Героїв України, 28">
              <AddressNumberPrg>
                м. Бровари вул. Героїв України, 28
              </AddressNumberPrg>
            </a>
          </AddressBox>

          <ContactBox>
            <ContactLink href="tel:+380952510111">
              <img src={phoneSvg} alt="phone" />
              <AddressNumberPrg>(095) 251 01 11</AddressNumberPrg>
            </ContactLink>

            <ContactLink href="tel:+380952510111">
              <img src={phoneSvg} alt="phone" />
              <AddressNumberPrg>(095) 251 01 11</AddressNumberPrg>
            </ContactLink>
          </ContactBox>

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

          <CallLink onClick={handleClick}>Замовити дзвінок</CallLink>
        </Container>
      </TopPart>
      <BottomPart>
        <Container>
          <Navigation />
        </Container>
      </BottomPart>
    </StyledHeader>
  );
};
