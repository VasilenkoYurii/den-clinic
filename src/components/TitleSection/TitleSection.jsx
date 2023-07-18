import titleImg from '../../images/titleImg.png';

import {
  TitleSection,
  SectionTitle,
  SectionPrg,
  SectionDescriptions,
  SectionTitleSecond,
  RadioContainer,
  Radio,
} from './TitleSection.styled';

export const ClinicSection = () => {
  return (
    <>
      <TitleSection>
        <SectionDescriptions>
          <div>
            <SectionTitle>Про клініку</SectionTitle>
            <SectionPrg>
              Ми професійно і комплексно вирішуємо всі випадки, пов'язані з
              зубами і порожниною рота, при розумному співвідношенні ціни і
              якості отримуваних послуг, для всіх членів вашої родини. Завдяки
              високому професіоналізму і чуйності наших лікарів, Ви не будете
              відчувати болю під час лікування. Ми використовуємо найкращі
              анестетики і перед уколом місцеву анестезію, обробляємо
              спеціальним кремом місце для уколу.
            </SectionPrg>
          </div>

          <div>
            <SectionTitleSecond>Боїшся стоматологів</SectionTitleSecond>
            <RadioContainer>
              <Radio>
                <input type="radio" name="rb" id="rb1" />
                <label for="rb1">Так</label>
              </Radio>

              <Radio>
                <input type="radio" name="rb" id="rb2" />
                <label for="rb2">Ні</label>
              </Radio>

              <Radio>
                <input type="radio" name="rb" id="rb3" />
                <label for="rb3">Боюсь мовчки</label>
              </Radio>
            </RadioContainer>
          </div>
        </SectionDescriptions>
        <div>
          <img src={titleImg} alt="dental office" />
        </div>
      </TitleSection>
    </>
  );
};
