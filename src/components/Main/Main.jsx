import { ClinicSection } from 'components/TitleSection/TitleSection';
import { LicenseSection } from 'components/LicenseSection/LicenseSection';
import { PriceSection } from 'components/PriceSection/PriceSection';

import { StyledMain } from './Main.styled';

export const Main = () => {
  return (
    <StyledMain>
      <ClinicSection />
      <LicenseSection />
      <PriceSection />
    </StyledMain>
  );
};
