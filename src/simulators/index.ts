import { useEffect } from "react";

import {
  activeHeavyBlurFilter,
  activeLightBlurFilter,
  removeBlurFilter,
} from "./blurFilters";
import {
  activeBlackAndGreyFilter,
  activeColorFilterById,
  activeHighContrastFilter,
  removeColorFilter,
} from "./colorFilters";
import { activeDistractions, removeDistractions } from "./distractions";
import { activeDrunkenMouse, removeDrunkenMouse } from "./drunkenMouse";
import { activeScrambleLetter, removeScrambleLetter } from "./scrambleLetter";
import { COLOR_FILTER_ID, SIMULATE_EFFECT } from "./types";
import { activeFullZoom, resetZoom } from "./zoom";

export const useSimulator = (
  effects: SIMULATE_EFFECT[],
  texts: string[] = []
) => {
  useEffect(() => {
    activateSimulators(effects, texts);

    return () => removeSimulations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, effects);
};

export const useColorFilterSimulator = (filterIds: COLOR_FILTER_ID[]) => {
  useEffect(() => {
    filterIds.forEach((filterId) => activeColorFilterById(filterId));

    return () => removeColorFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, filterIds);
};

export const activateSimulators = (
  effects: SIMULATE_EFFECT[],
  texts: string[]
) => {
  effects.forEach((effect) => {
    switch (effect) {
      case SIMULATE_EFFECT.ZOOM:
        activeFullZoom();
        break;
      case SIMULATE_EFFECT.HIGHT_CONTRAST_FILTER:
        activeHighContrastFilter();
        break;
      case SIMULATE_EFFECT.BLACK_GREY_FILTER:
        activeBlackAndGreyFilter();
        break;
      case SIMULATE_EFFECT.LIGHT_BLUR_FILTER:
        activeLightBlurFilter();
        break;
      case SIMULATE_EFFECT.HEAVY_BLUR_FILTER:
        activeHeavyBlurFilter();
        break;
      case SIMULATE_EFFECT.DRUNKEN_MOUSE:
        activeDrunkenMouse();
        break;
      case SIMULATE_EFFECT.SCRAMBLE_LETTER:
        activeScrambleLetter();
        break;
      case SIMULATE_EFFECT.DISTRACTIONS:
        activeDistractions(texts);
        break;
    }
  });
};

export const removeSimulations = () => {
  resetZoom();
  removeColorFilter();
  removeBlurFilter();
  removeDrunkenMouse();
  removeScrambleLetter();
  removeDistractions();
};
