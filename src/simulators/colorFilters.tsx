import { COLOR_FILTER_ID } from "./types";

export const activeHighContrastFilter = () => {
  throw new Error("Function not implemented.");
};

export const activeBlackAndGreyFilter = () => {
  document.body.style.filter = "grayscale(1)";
};

export const activeColorFilterById = (filterId: COLOR_FILTER_ID) => {
  document.body.style.filter = `url(#${filterId})`;
};

export const removeColorFilter = () => {
  document.body.style.filter = "";
};
