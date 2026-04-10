export const scrollHelper = (ref: React.RefObject<HTMLDivElement> | null, direction: "left" | "right") => {
  if (!ref?.current) return;
  const { clientWidth, scrollLeft } = ref.current;
  const scrollAmount = clientWidth * 0.8;
  ref.current.scrollTo({
    left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
    behavior: "smooth",
  });
};