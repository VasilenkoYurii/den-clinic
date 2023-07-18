import styled from '@emotion/styled';

export const TitleSection = styled.section`
  width: 1200px;

  display: flex;
  gap: 30px;

  margin-bottom: 70px;
`;

export const SectionDescriptions = styled.div`
  width: 588px;

  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const SectionTitle = styled.h2`
  color: #133a4b;
  font-family: 'Jura';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  margin-bottom: 14px;
`;

export const SectionTitleSecond = styled.h2`
  color: #133a4b;
  font-family: 'Jura';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  margin-bottom: 24px;
`;

export const SectionPrg = styled.p`
  color: #133a4b;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  width: 588px;
  height: 175px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Radio = styled.div`
  input[type='radio']:checked,
  input[type='radio']:not(:checked) {
    opacity: 0;
  }

  input[type='radio']:checked + label,
  input[type='radio']:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
  }

  input[type='radio']:checked + label:before,
  input[type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    border: 1px solid #d3d3d3;
    background-color: #ffffff;
  }

  input[type='radio']:checked + label:before,
  input[type='radio']:not(:checked) + label:before {
    border-radius: 100%;
  }

  input[type='radio']:checked + label:after,
  input[type='radio']:not(:checked) + label:after {
    content: '';
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input[type='radio']:checked + label:after,
  input[type='radio']:not(:checked) + label:after {
    left: 3px;
    top: 3px;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #39ade0;
  }

  input[type='radio']:not(:checked) + label:after {
    opacity: 0;
  }

  input[type='radio']:checked + label:after {
    opacity: 1;
  }

  input[type='radio']:hover + label:before,
  input[type='radio']:hover + label:after {
    border-color: #39ade0;
  }
`;
