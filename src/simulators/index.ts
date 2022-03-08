import { useEffect } from 'react';
import {
	activeHeavyBlurFilter,
	activeLightBlurFilter,
	removeBlurFilter,
} from './blurFilters';
import { activeDrunkenMouse, removeDrunkenMouse } from './drunkenMouse';
import { activeScrambleLetter, removeScrambleLetter } from './scrambleLetter';
import { SIMULATE_EFFECT } from './types';
import { activeFullZoom, resetZoom } from './zoom';

export const useSimulator = (effects: SIMULATE_EFFECT[]) => {
	useEffect(() => {
		activateSimulators(effects);

		return () => removeSimulations();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, effects);
};

export const activateSimulators = (effects: SIMULATE_EFFECT[]) => {
	effects.forEach((effect) => {
		switch (effect) {
			case SIMULATE_EFFECT.ZOOM:
				activeFullZoom();
				break;
			case SIMULATE_EFFECT.HIGHT_CONTRAST_FILTER:
				// TODO
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
		}
	});
};

export const removeSimulations = () => {
	resetZoom();
	removeBlurFilter();
	removeDrunkenMouse();
	removeScrambleLetter();
};
