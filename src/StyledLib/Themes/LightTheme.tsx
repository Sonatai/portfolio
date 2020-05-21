import { DefaultTheme } from 'styled-components';
import ColorPalette from './ColorPalette';

const LightTheme: DefaultTheme = {
	colors: {
		background: {
			main: ColorPalette.white,
		},
		fonts: {
			main: ColorPalette.grey.dark,
		},
	},
};

export { LightTheme };
