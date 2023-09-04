import styled from "styled-components";
import Container from "../Container/Container";

export const MobileHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 125%;
  letter-spacing: 0.01em;
  margin: 0px auto;
  text-align: center;
  padding: 0 10px;
  margin-bottom: 71px;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const StyledFooterContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  min-height: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 3%;
  box-sizing: border-box;
  & div {
    box-sizing: border-box;
  }
  & > div {
    z-index: 20;
  }
  & .form-container {
    width: 40%;
    @media (max-width: 1420px) {
      width: 43%;
    }
    @media (max-width: 1320px) {
      width: 45%;
    }
    @media (max-width: 1280px) {
      width: 50%;
    }
    @media (max-width: 1150px) {
      width: 55%;
    }
  }
  & .cta-button-footer {
    margin-top: 32px;
    font-size: 22px;
    text-transform: none;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 4px 57px rgba(248, 129, 27, 0.2);
      & svg {
        transform: rotate(0deg);
      }
    }
  }
  & .contacts {
    gap: 24px;
  }
  & .cta {
    width: 45%;
  }
  & .mail-box {
    gap: 6.8%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      & p,
      & a {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
  & .astronaut-icon {
    margin-right: 3%;
  }
  & .socials {
    margin-top: 61px;
    display: flex;
    gap: 40px;
    & div {
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0e0f0f;
      border-radius: 16px;
    }
    & a {
      width: 78px;
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #f49819 0%, #f45f19 100%),
        linear-gradient(0deg, #f45f19, #f45f19), #f47519;
      box-shadow: 0px 26px 22px rgba(244, 95, 25, 0.12),
        0px 12px 10px rgba(244, 95, 25, 0.14),
        0px 6px 5px rgba(244, 95, 25, 0.12), 0px 3px 3px rgba(244, 95, 25, 0.11),
        0px 2px 2px rgba(244, 95, 25, 0.08), 0px 1px 1px rgba(244, 95, 25, 0.06);
      border-radius: 2px;
    }
    @media screen and (max-width: 900px) {
      width: auto;
      margin: 64px auto;
    }
  }
  & .bottom-line {
    border-bottom: 1px solid #5d5d5d;
    margin-top: 43px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0px 24px;
    }
    & svg {
      position: relative;
      bottom: -9px;
      width: 174px;
      height: 164px;
      @media screen and (max-width: 768px) {
        width: 92px;
        height: 84.07px;
        bottom: -4px;
        align-self: flex-end;
      }
    }
  }
  & .mail-container {
    @media screen and (max-width: 768px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      & div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      & p {
        margin-bottom: 12px;
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        letter-spacing: 0.01em;
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 12px;
        margin-top: 15px;
      }
      & a {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #30D5C8;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
    height: auto;
    & .footer-image-bg {
      object-position: bottom center;
      object-fit: contain !important;
    }
    & .footer-copyrigth {
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 0px 24px;
      flex-wrap: wrap;
      flex-direction: column-reverse;
      & p {
        width: 100%;
        margin: 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        text-align: center;
        max-width: 290px;
      }
    }
  }
`;

export const StyledFooterMailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  & a {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #30D5C8;
    margin-right: 12px;
    text-decoration: none;
  }
  & svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    margin-top: 12px;
    width: 100%;
    justify-content: center;
  }
`;
export const Copyright = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 0.84vw, 16px);
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #5d5d5d;
  margin-top: 80px;
  width: 45%;
  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-top: 9px;
    margin-left: 24px;
    margin-bottom: 25px;
  }
`;
export const CopyrightWithLink = styled.p`
  font-weight: 500;
  font-size: clamp(14px, 0.84vw, 16px);
  line-height: 23px;
  letter-spacing: 0.01em;
  color: #5d5d5d;
  margin-top: 80px;
  width: 40%;
  & strong {
    font-weight: 400;
    color: #30D5C8;
    text-decoration: underline;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 20px !important;
  }
`;

export const CtaText = styled.p`
  font-weight: 500;
  font-size: 2.709vw;
  font-size: clamp(32px, 2.709vw, 52px);
  line-height: 125%;
  letter-spacing: 0.01em;
  color: #ffffff;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 1160px) {
    &.first {
      margin-top: 32px;
    }
  }
`;
export const CtaTextSmall = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #d0d0d0;
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
`;
export const StyledInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 26px;
  & .react-select__control {
    transition: 0.3s;
    box-shadow: none;
    & input {
      margin-top: -5px;
    }
  }
  & .react-select__placeholder {
    margin-top: -3px;
  }
  & .react-select__control:hover {
    border-color: #30D5C8;
  }

  & .react-select-container {
    width: 100%;
  }
  & .react-select__control {
    background: #141414;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid #5d5d5d;
    height: 56px;
    & .react-select__value-container {
      height: 100%;
      padding-left: 18.5px;
      padding-top: 0px;
      padding-bottom: 0px;
      box-sizing: border-box;
    }
  }
  & .react-select__control--is-focused {
    border-color: #30D5C8;
  }
  & .react-select__indicator-separator {
    display: none;
  }
  & .react-select__single-value {
    color: #30D5C8;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: -3px;
  }
  & .react-select__input-container {
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  & .react-select__menu {
    background: #141414;
    margin-top: 0px;
    & .react-select__option {
      background: #141414;
      padding-left: 20px;
      height: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: #d0d0d0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #5d5d5d;
      border-radius: 2px;
      &:last-child {
        border: none;
      }
      &.react-select__option--is-selected {
        background: #1c1c1c;
      }
      &:hover {
        background: #1c1c1c;
      }
    }
  }
  & input {
    background: #141414;
    outline: none;
    border: 1px solid #5d5d5d;
    border-radius: 2px;
    height: 56px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    font-size: 16px;
    line-height: 37px;
    padding-left: 18.5px;
    padding-right: 18.5px;
    width: 100%;
    color: #30D5C8;
    transition: 0.3s;
    caret-color: #30D5C8;
    box-sizing: border-box;
    &:hover {
      border-color: #30D5C8;
    }
    @media screen and (max-width: 768px) {
      height: 42px;
      font-weight: 400;
      font-size: 15px;
      line-height: 28px;
      padding: 7px 14px;
    }
  }
  & textarea {
    /* height: 100px; */
    resize: none;
    line-height: 30px;
    /* padding-top: 13px; */
    &::-webkit-scrollbar {
      height: 4px;
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #30D5C8;
    }
  }
  & .phone-input {
    & .selected-flag.open,
    & .flag-dropdown.open,
    & .flag-dropdown,
    & .selected-flag,
    & .flag-dropdown.open .selected-flag,
    & input,
    & .country-list {
      background: #141414 !important;
      & .country.highlight,
      & li:hover {
        background: #1c1c1c;
      }
    }
    & .flag-dropdown {
      transition: border 0.3s;
    }
    &:hover {
      & input,
      & .flag-dropdown {
        border-color: #30D5C8;
      }
    }
    & input {
      border: 1px solid #5d5d5d;
      border-radius: 2px;
      height: 56px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      font-size: 16px;
      line-height: 37px;
      padding-left: 85px;
      width: 100%;
      transition: border 0.3s;
      caret-color: #30D5C8;

      @media screen and (max-width: 768px) {
        height: 42px;
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
      }
    }
    & .selected-flag {
      padding-left: 26px;
      width: 80px;
    }
    & .flag-dropdown {
      border: 1px solid #5d5d5d;
      border-right: none;
      border-radius: 2px;
    }
    & .flag {
      transform: scale(1.7);
    }
    & .flag .arrow {
      border: 1.0715px solid #30D5C8;
      border-top: none;
      border-right: none;
      width: 6px;
      height: 6px;
      transform: rotate(-45deg);
      margin-left: 5px;
      transition: 0.3s;
      position: relative;
      top: 3px;
      &.up {
        top: 5px;
        transform: rotate(135deg);
        border-bottom: 1.0715px solid #30D5C8;
      }
    }
    & .country-list {
      margin-top: 1px;
      padding-top: 20px;
      width: 283px;
    }
    & .country-list li {
      padding: 10px;
      padding: 0px 28px;
      height: 40px;
      display: flex;
      align-items: center;
      transition: background 0.3s;
      & .country-name {
        margin-left: 5px;
      }
    }
    & .country-list::-webkit-scrollbar {
      height: 4px;
      width: 4px;
    }
    & .country-list::-webkit-scrollbar-track {
      background-color: transparent;
    }
    & .country-list::-webkit-scrollbar-thumb {
      background-color: #30D5C8;
    }
  }
`;
export const AttachButton = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-top: -16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  &:hover {
    & p {
      color: #30D5C8;
    }
    & svg {
      stroke: #30D5C8;
    }
  }
  & p {
    transition: 0.3s;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: ${({ $attached }) => ($attached ? "#8B8C8C" : "#5d5d5d")};
  }
  &&&& .file-name {
    margin-left: 16px;
    color: #d0d0d0;
  }
  & svg {
    transition: 0.3s;
    stroke: #5d5d5d;
    margin-right: 14px;
    width: 20px;
  }
  @media (max-width: 900px) {
    margin-top: -4px;
    display: none;
  }
`;
export const SecretCodeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 345px;
  margin-top: 26px;
  &:hover {
    & input,
    & button {
      border-color: #30D5C8;
    }
    & button {
      border-left: 1px solid #5d5d5d;
    }
  }
  & input {
    background: #0e0f0f;
    border: ${({ $applied }) =>
      $applied ? "1px solid #1c1c1c !important" : "1px solid #1c1c1c"};
    color: ${({ $applied }) =>
      $applied ? "rgba(93, 183, 55, 1)" : "rgba(255, 255, 255, 0.8)"};
    border-radius: 2px 0px 0px 2px;
    padding: 3px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    border-right: none;
    background: transparent;
    outline: none;
    height: 40px;
    transition: border 0.3s;
    caret-color: #30D5C8;
    text-shadow: ${({ $applied }) =>
      $applied ? "0px 0px 4px rgba(93, 183, 55, 0.5)" : "none"};
    width: 65%;
  }
  & button {
    margin-left: -10px;
    width: 106px;
    height: 48px;
    cursor: pointer;
    background: ${(props) =>
      props.$applied ? "#141414 !important" : "#141414"};
    border-radius: 2px;
    border: ${(props) =>
      props.$applied ? "1px solid #5d5d5d !important" : "1px solid #5d5d5d"};
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.$applied ? "#5d5d5d !important" : "#5d5d5d")};
    transition: 0.3s;
    &:hover {
      background: #232323;
      color: #30D5C8;
      border-color: #30D5C8;
    }
  }
  @media (max-width: 900px) {
    margin-top: 20px;
    & input {
      height: 36px;
    }
    & button {
      height: 44px;
    }
  }
`;

export const StyledCtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

  & .form-submit-button {
    height: 48px;
    width: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 93%;
    text-transform: none;
    z-index: 0;
    & svg {
      width: 21px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 26px;

    & .form-submit-button {
      max-width: inherit;
      font-size: 22px;

      & > div {
        padding-left: 35px;
        font-size: 22px;
      }
    }
  }
`;
export const StyledSocialsContainer = styled(Container)`
  @media (max-width: 1360px) {
    &&& a {
      width: 50px;
      height: 50px;
    }
  }
`;

export const StyledWrapper = styled(Container)`
  padding: 0 236px 0 140px;
  @media (max-width: 1600px) {
    padding: 0 140px;
  }
  @media (max-width: 1160px) {
    padding: 0 100px;
    flex-direction: column-reverse;
    & .cta,
    .form-container {
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    padding: 0 24px;
    margin-top: 70px;
    & .contacts {
      margin-bottom: 24px;
      flex-wrap: wrap;
      & > div {
        width: 100%;
        margin-bottom: 0px;
      }
    }
    & .react-select__control {
      height: 42px;
      & .react-select__value-container {
        padding-left: 14px;
      }
    }
    & .secret-code-flex-container,
    & .issue-block,
    & .about-project {
      display: none;
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
`;
