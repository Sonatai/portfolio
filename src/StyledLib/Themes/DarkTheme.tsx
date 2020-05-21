import { DefaultTheme } from 'styled-components';
import ColorPalette from './ColorPalette';

const DarkTheme: DefaultTheme = {
	colors: {
		background: {
			main: ColorPalette.black,
		},
		fonts: {
			main: ColorPalette.grey.light,
		},
	},
};

export { DarkTheme };
