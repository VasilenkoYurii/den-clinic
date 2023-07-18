import { useState } from 'react';

import arrow from '../../images/arrow.svg';

import {
  StyledPriceSection,
  PriceTitle,
  AccordionTitle,
  AccordionPrg,
  AccordionArrow,
  AccordionList,
  AccordionItem,
  AccordionItemPrg,
  BoxForAccordion,
} from './PriceSection.styled';

export const PriceSection = () => {
  const [openTeeth, setOpenTeeth] = useState(false);
  const [openSurgery, setOpenSurgery] = useState(false);

  const handleOpen = action => {
    switch (action) {
      case 'teeth':
        setOpenTeeth(prevState => !prevState);
        break;

      case 'surgery':
        setOpenSurgery(prevState => !prevState);
        break;

      default:
        break;
    }
  };

  return (
    <StyledPriceSection>
      <PriceTitle>Прайс</PriceTitle>

      <div>
        <AccordionTitle
          onClick={() => {
            handleOpen('teeth');
          }}
        >
          <AccordionPrg>Лікування зубів</AccordionPrg>
          <AccordionArrow
            src={arrow}
            alt="arrow"
            transform={openTeeth ? 'rotate(0)' : 'rotate(3.142rad)'}
          />
        </AccordionTitle>
        <BoxForAccordion open={openTeeth}>
          {openTeeth && (
            <AccordionList>
              <AccordionItem>
                <AccordionItemPrg>
                  Мікроінвазивне пломбування без використання бормашини
                </AccordionItemPrg>
                <AccordionItemPrg>550 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Склоіономерна пломба - середній карієс
                </AccordionItemPrg>
                <AccordionItemPrg>450 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Склоіономерна пломба - глибокий карієс
                </AccordionItemPrg>
                <AccordionItemPrg>550 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Фотополімерна пломба - початковий карієc
                </AccordionItemPrg>
                <AccordionItemPrg>750 грн</AccordionItemPrg>
              </AccordionItem>
            </AccordionList>
          )}
        </BoxForAccordion>

        <AccordionTitle
          onClick={() => {
            handleOpen('surgery');
          }}
        >
          <AccordionPrg>Видалення зуба (хірургія)</AccordionPrg>
          <AccordionArrow
            src={arrow}
            alt="arrow"
            transform={openSurgery ? 'rotate(0)' : 'rotate(3.142rad)'}
          />
        </AccordionTitle>

        <BoxForAccordion open={openSurgery}>
          {openSurgery && (
            <AccordionList>
              <AccordionItem>
                <AccordionItemPrg>
                  Мікроінвазивне пломбування без використання бормашини
                </AccordionItemPrg>
                <AccordionItemPrg>550 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Склоіономерна пломба - середній карієс
                </AccordionItemPrg>
                <AccordionItemPrg>450 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Склоіономерна пломба - глибокий карієс
                </AccordionItemPrg>
                <AccordionItemPrg>550 грн</AccordionItemPrg>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemPrg>
                  Фотополімерна пломба - початковий карієc
                </AccordionItemPrg>
                <AccordionItemPrg>750 грн</AccordionItemPrg>
              </AccordionItem>
            </AccordionList>
          )}
        </BoxForAccordion>
      </div>
    </StyledPriceSection>
  );
};
