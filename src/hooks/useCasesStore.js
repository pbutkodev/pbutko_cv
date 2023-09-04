import { makeObservable } from "../utils/observable";
import { useEffect, useState } from "react";
const casesState = makeObservable("All");

export const useCasesStore = () => {
  const [casesStore, setState] = useState(casesState.get());
  const setCasesStore = (data) => casesState.set(data);
  useEffect(() => {
    return casesState.subscribe(setState);
  }, []);

  return {
    casesStore,
    setCasesStore,
  };
};

const filtersState = makeObservable(["All"]);

export const useFiltersStore = () => {
  const [filtersStore, setState] = useState(filtersState.get());
  const setFiltersStore = (data) => {
    const arr = new Set([...filtersStore]);
    if (arr.has(data) && data !== "All") arr.delete(data);
    else if (data === "All") {
      arr.clear();
      arr.add("All");
    } else {
      arr.add(data);
      arr.delete("All");
    }
    filtersState.set([...arr].length === 0 ? ["All"] : [...arr]);
  };
  useEffect(() => {
    return filtersState.subscribe(setState);
  }, []);

  return {
    filtersStore,
    setFiltersStore,
  };
};

const selectedCaseState = makeObservable(0);

export const useSelectedCaseStore = () => {
  const [selectedCaseStore, setState] = useState(selectedCaseState.get());
  const setSelectedCaseStore = (data) => selectedCaseState.set(data);
  useEffect(() => {
    return selectedCaseState.subscribe(setState);
  }, []);

  return {
    selectedCaseStore,
    setSelectedCaseStore,
  };
};

const selectedCaseIndex = makeObservable(4);

export const useSelectedIndexStore = () => {
  const [selectedCaseIndexStore, setState] = useState(selectedCaseIndex.get());
  const setSelectedCaseIndexStore = (data) =>
    selectedCaseIndex.set(data);
  useEffect(() => {
    return selectedCaseIndex.subscribe(setState);
  }, []);

  return {
    selectedCaseIndexStore,
    setSelectedCaseIndexStore,
  };
};
const shownCasesIndex = makeObservable(0);

export const useShownCasesIndexStore = () => {
  const [shownCasesIndexStore, setState] = useState(shownCasesIndex.get());
  const setShownCasesIndexStore = (data) => shownCasesIndex.set(data);
  useEffect(() => {
    return shownCasesIndex.subscribe(setState);
  }, []);

  return {
    shownCasesIndexStore,
    setShownCasesIndexStore,
  };
};

export const useFilteredCards = (cases) => {
  const [visibleCases, setVisibleCases] = useState(cases);
  // tab selected
  const { filtersStore } = useFiltersStore();
  // Index of shown cases
  const { shownCasesIndexStore, setShownCasesIndexStore } =
    useShownCasesIndexStore();
  useEffect(() => {
    if (!filtersStore.includes("All")) {
      setVisibleCases(
        cases.filter((el) =>
          el.filters.find((el) => filtersStore.indexOf(el) > -1)
        )
      );
    } else {
      setVisibleCases(cases);
    }
  }, [shownCasesIndexStore, filtersStore]);
  return {
    visibleCases,
    shownCasesIndexStore,
    setShownCasesIndexStore
  }
};
