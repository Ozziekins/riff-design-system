// .storybook/storybook-utils.ts
import { colors } from '../src/tokens/colors';
import { radii } from '../src/tokens/radii';
import { spacing } from '../src/tokens/spacing';
import { typography } from '../src/tokens/typography';
import { shadows } from '../src/tokens/shadows';
import { borderWidths } from '../src/tokens/borders';
import { zIndex } from '../src/tokens/zIndex';
import { transitions } from '../src/tokens/transitions';
import { breakpoints } from '../src/tokens/breakpoints';
import { opacity } from '../src/tokens/opacity';
import { sizes } from '../src/tokens/widths';

// Transform token keys into array for Storybook selects
export const colorOptions = Object.keys(colors);
export const radiusOptions = Object.keys(radii);
export const spacingOptions = Object.keys(spacing);
export const fontSizeOptions = Object.keys(typography.sizes);
export const fontWeightOptions = Object.keys(typography.weights);
export const lineHeightOptions = Object.keys(typography.lineHeights);
export const shadowOptions = Object.keys(shadows);
export const borderWidthOptions = Object.keys(borderWidths);
export const zIndexOptions = Object.keys(zIndex);
export const transitionOptions = Object.keys(transitions);
export const breakpointOptions = Object.keys(breakpoints);
export const opacityOptions = Object.keys(opacity);
export const sizeOptions = Object.keys(sizes);
