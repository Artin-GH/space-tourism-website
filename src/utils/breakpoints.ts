import { theme } from "../../tailwind.config";

const breakpointValues = Object.values(
  theme.screens as {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  }
).map((val) => parseInt(val.replace(/[a-zA-Z]+$/, "")));
const breakpoints = {
  sm: breakpointValues[0],
  md: breakpointValues[1],
  lg: breakpointValues[2],
  xl: breakpointValues[3],
  "2xl": breakpointValues[4],
};

export default breakpoints;
