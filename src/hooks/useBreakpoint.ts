import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

function useBreakpoint(min?: number, max?: number) {
  const windowWidth = useWindowSize().width;
  const [result, setResult] = useState(false);

  useEffect(() => {
    setResult(windowWidth < (max || 50000) && windowWidth >= (min || 0))
  }, [windowWidth])

  return result;
}

export default useBreakpoint;
