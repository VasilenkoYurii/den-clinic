import licenseSvg from '../../images/license.svg';

import {
  StyledLicenseSection,
  LicenseButton,
  LicensePrg,
} from './LicenseSection.styled';

export const LicenseSection = () => {
  return (
    <StyledLicenseSection>
      <LicenseButton>
        <img src={licenseSvg} alt="license blank" />
        <LicensePrg>Ліцензія на стоматологічну практику</LicensePrg>
      </LicenseButton>

      <LicenseButton>
        <img src={licenseSvg} alt="license blank" />
        <LicensePrg>Медичний персонал стоматології</LicensePrg>
      </LicenseButton>

      <LicenseButton>
        <img src={licenseSvg} alt="license blank" />
        <LicensePrg>Реєстрація стомат-бізнесу</LicensePrg>
      </LicenseButton>
    </StyledLicenseSection>
  );
};
