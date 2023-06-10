import { useEffect, useState } from "react";

const useDebounce = ({ initialValue, delay = 1000 }) => {
  const [debouncedVal, setDebouncedVal] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(initialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [initialValue]);

  return debouncedVal;
};
export default useDebounce;
