import { useRef } from "react";
import {
  AppearenceContainer,
  CasesCardContainer,
  InfoContainer,
  InfoFullSizeContainer,
  StyledParagraph,
  StyledTitle,
  TagsContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import {useSelectedCaseStore, useSelectedIndexStore} from "../../../hooks/useCasesStore";
import Container from "../../Container/Container";

const CasesCard = ({
  order,
  data,
  index,
}) => {
  const { selectedCaseStore, setSelectedCaseStore } = useSelectedCaseStore();
  const { selectedCaseIndexStore, setSelectedCaseIndexStore } =
    useSelectedIndexStore();
  const ref = useRef(null);
  return (
    <AppearenceContainer
      key={data.title}
      initial={{
        top: "5px",
        opacity: 0,
      }}
      animate={{
        top: 0,
        opacity: 1,
      }}
      transition={{
        delay: index / 10,
      }}
      ref={ref}
      onMouseEnter={() => {
        setSelectedCaseIndexStore(index === selectedCaseIndexStore ? 4 : index);
        setSelectedCaseStore(order === selectedCaseStore ? 0 : order);
      }}
    >
      <CasesCardContainer $selected={order === selectedCaseStore}>
        {/*<img alt="card-background" src={data.img} style={{height: '33vw', width: '33vw'}} />*/}

        <InfoContainer>
          <Container
            width="100%"
            height="100%"
            className="container"
            direction="column"
            justify="space-between"
            align="flex-start"
            gap="75px"
          >
            <p>{data.title}</p>
            <TagsContainer>
              {data.tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </TagsContainer>
          </Container>
        </InfoContainer>
        <AnimatePresence>
          {selectedCaseStore === order && (
            <InfoFullSizeContainer
              initial={{
                top: "100%",
              }}
              animate={{
                top: 0,
              }}
              exit={{
                top: "100%",
              }}
              transition={{
                delay: index / 15,
                duration: 0.3,
                ease: "easeInOut",
              }}
              $active={selectedCaseStore === order}
            >
              <Container
                width="100%"
                justify="space-between"
                align="center"
              >
                {/* <FlexContainer
                  className="icon-container"
                  width={"76px"}
                  height={"76px"}
                  justify="center"
                  align="center"
                >
                  <Image
                    alt="card-icon"
                    width={28}
                    height={28}
                    src={"/images/cases/icons/icon.png"}
                  />
                </FlexContainer> */}
                <AnimatePresence>
                  {/*{selectedCaseStore === order && (*/}
                  {/*  <MotionTeamDetails team={team} data={data} />*/}
                  {/*)}*/}
                </AnimatePresence>
                {/* temporary hidden */}
                {/* {selectedCaseStore === order && (
                  <GoToProject
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                    onClick={() => {
                      router.push(`/case/${order}`);
                    }}
                  >
                    <p>{goToProject}</p>
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
                  </GoToProject>
                )} */}
              </Container>
              <div>
                {selectedCaseStore !== order && (
                  <StyledTitle
                    initial={{ opacity: 0, top: "20px" }}
                    animate={{ opacity: 1, top: "0px" }}
                    transition={{
                      delay: 0.3,
                      duration: 0.3,
                    }}
                  >
                    {data.title}
                  </StyledTitle>
                )}
                <AnimatePresence>
                  {selectedCaseStore === order && (
                    <>
                      <StyledTitle
                        initial={{ opacity: 0, top: "0px" }}
                        animate={{ opacity: 1, top: "-10px" }}
                        transition={{
                          delay: 0.3,
                          duration: 0.5,
                        }}
                      >
                        {data.title}
                      </StyledTitle>

                      <StyledParagraph
                        initial={{ opacity: 0, top: "20px" }}
                        animate={{ opacity: 1, top: "0px" }}
                        transition={{
                          delay: 0.5,
                          duration: 0.3,
                        }}
                      >
                        {data.description}
                      </StyledParagraph>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <Container
                align="flex-end"
                justify="space-between"
                width={"100%"}
                className="relative"
              >
                <TagsContainer>
                  {data.tags.map((tag) => (
                    <div key={tag}>{tag}</div>
                  ))}
                </TagsContainer>
              </Container>
            </InfoFullSizeContainer>
          )}
        </AnimatePresence>
      </CasesCardContainer>
    </AppearenceContainer>
  );
};

export default CasesCard;
