import React, { useMemo } from "react";
import { Cards, CasesBlockContainer } from "./styles";
import ProjectsCard from "../ProjectsCard/index";
import {useSelectedCaseStore, useSelectedIndexStore} from "../../../hooks/useCasesStore";
import {useIsMobile} from "../../../hooks/useWidthDevice";

const CasesBlock = ({
  visibleCases,
  shownCasesIndexStore,
}) => {
  const { selectedCaseIndexStore, setSelectedCaseIndexStore } =
    useSelectedIndexStore();
  const { setSelectedCaseStore } = useSelectedCaseStore();
  const isMobile = useIsMobile();

  const cards = useMemo(() => {
    let size = isMobile ? 2 : 3;
    let subarray = [];
    for (let i = 0; i < Math.ceil(visibleCases.length / size); i++) {
      subarray[i] = visibleCases.slice(i * size, i * size + size);
    }

    return subarray[shownCasesIndexStore]?.map((item, index) => {
      return (
        <ProjectsCard
          index={index}
          data={item}
          order={item.id}
          key={index}
        />
      );
    });
  }, [visibleCases, shownCasesIndexStore, isMobile]);
  return (
    <CasesBlockContainer
      onMouseLeave={() => {
        setSelectedCaseIndexStore(4);
        setSelectedCaseStore(0);
      }}
    >
      <Cards $selected={selectedCaseIndexStore}>{cards}</Cards>
    </CasesBlockContainer>
  );
};

export default CasesBlock;
