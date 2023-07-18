import styled from '@emotion/styled';

export const StyledPriceSection = styled.section`
  width: 1000px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 111px;
`;

export const PriceTitle = styled.h3`
  color: #133a4b;

  font-family: 'Jura';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const AccordionTitle = styled.div`
  width: 944px;

  border-radius: 4px;
  background: #39ade0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 24px 11px 32px;

  transition: transform 500ms ease;

  margin-bottom: 5px;
`;

export const AccordionPrg = styled.p`
  color: #fbfdff;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const AccordionArrow = styled.img`
  transform: ${props => props.transform};
  stroke-width: 2px;
  width: 30px;
  height: 15px;

  transition: transform 500ms ease;
`;

export const BoxForAccordion = styled.div`
  height: ${props => (props.open ? '185px' : '0')};
  overflow: hidden;
  transition: all 500ms ease;
`;

export const AccordionList = styled.ul`
  margin-left: 16px;
  width: 100%;

  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AccordionItem = styled.li`
  width: 935px;
  padding: 9px 24px 6px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  background: #daecfa;
`;

export const AccordionItemPrg = styled.p`
  color: #455d72;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
