import {
  ArrowsContainer,
  Progress,
  StyledNavContainer,
  StyledProgressContainer,
} from "./styles";
import {useIsMobile} from "../../../hooks/useWidthDevice";

const NavBlock = ({
  visibleCases,
  shownCasesIndexStore,
  setShownCasesIndexStore,
}) => {
  const isMobile = useIsMobile();
  const size =  isMobile ? 2 : 3;

  return (
    <StyledNavContainer>
      <StyledProgressContainer>
        <hr />
        <Progress
          $position={shownCasesIndexStore}
          $width={100 / (visibleCases.length / size)}
        />
      </StyledProgressContainer>
      <ArrowsContainer>
        <button
          onClick={() => {
            if (shownCasesIndexStore !== 0) {
              setShownCasesIndexStore(shownCasesIndexStore - 1);
            } else {
              setShownCasesIndexStore(0);
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3916 9.38166L11.2249 1.215C10.9998 0.99617 10.6751 0.914044 10.3731 0.999555C10.071 1.08506 9.83752 1.32522 9.76055 1.62955C9.68358 1.93389 9.77482 2.25617 9.9999 2.475L16.6616 9.12499H1.22656C0.743313 9.12499 0.351562 9.51675 0.351562 9.99999C0.351562 10.4832 0.743313 10.875 1.22656 10.875H16.6499L9.9999 17.525C9.83312 17.6875 9.73906 17.9105 9.73906 18.1433C9.73906 18.3762 9.83312 18.5992 9.9999 18.7617C10.1607 18.9304 10.3852 19.0236 10.6182 19.0183C10.8505 19.0194 11.0734 18.9269 11.2366 18.7617L19.4032 10.595C19.7444 10.2534 19.7444 9.69995 19.4032 9.35833L19.3916 9.38166Z"
              fill="#30D5C8"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            if (shownCasesIndexStore * size + size <= visibleCases.length) {
              setShownCasesIndexStore(shownCasesIndexStore + 1);
            } else {
              setShownCasesIndexStore(shownCasesIndexStore);
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3916 9.38166L11.2249 1.215C10.9998 0.99617 10.6751 0.914044 10.3731 0.999555C10.071 1.08506 9.83752 1.32522 9.76055 1.62955C9.68358 1.93389 9.77482 2.25617 9.9999 2.475L16.6616 9.12499H1.22656C0.743313 9.12499 0.351562 9.51675 0.351562 9.99999C0.351562 10.4832 0.743313 10.875 1.22656 10.875H16.6499L9.9999 17.525C9.83312 17.6875 9.73906 17.9105 9.73906 18.1433C9.73906 18.3762 9.83312 18.5992 9.9999 18.7617C10.1607 18.9304 10.3852 19.0236 10.6182 19.0183C10.8505 19.0194 11.0734 18.9269 11.2366 18.7617L19.4032 10.595C19.7444 10.2534 19.7444 9.69995 19.4032 9.35833L19.3916 9.38166Z"
              fill="#30D5C8"
            />
          </svg>
        </button>
      </ArrowsContainer>
    </StyledNavContainer>
  );
};

export default NavBlock;
