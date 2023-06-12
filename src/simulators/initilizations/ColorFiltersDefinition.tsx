import { COLOR_FILTER_ID } from "../types";

const ColorFiltersDefinition = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="wds-colorBlindnessFilter"
    height="0"
  >
    <defs>
      <filter id={COLOR_FILTER_ID.PROTANOPIA}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.567, 0.433, 0,     0, 0
				0.558, 0.442, 0,     0, 0
				0,     0.242, 0.758, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.PROTANOMALY}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.817, 0.183, 0,     0, 0
				0.333, 0.667, 0,     0, 0
				0,     0.125, 0.875, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.DEUTERANOPIA}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.625, 0.375, 0,   0, 0
				0.7,   0.3,   0,   0, 0
				0,     0.3,   0.7, 0, 0
				0,     0,     0,   1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.DEUTERANOMALY}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.8,   0.2,   0,     0, 0
				0.258, 0.742, 0,     0, 0
				0,     0.142, 0.858, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.TRITANOPIA}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.95, 0.05,  0,     0, 0
				0,    0.433, 0.567, 0, 0
				0,    0.475, 0.525, 0, 0
				0,    0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.TRITANOMALY}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.967, 0.033, 0,     0, 0
				0,     0.733, 0.267, 0, 0
				0,     0.183, 0.817, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.ACHROMATOPSIA}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.299, 0.587, 0.114, 0, 0
				0.299, 0.587, 0.114, 0, 0
				0.299, 0.587, 0.114, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
      <filter id={COLOR_FILTER_ID.ACHROMATOMALY}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.618, 0.320, 0.062, 0, 0
				0.163, 0.775, 0.062, 0, 0
				0.163, 0.320, 0.516, 0, 0
				0,     0,     0,     1, 0"
        ></feColorMatrix>
      </filter>
    </defs>
  </svg>
);

export default ColorFiltersDefinition;
