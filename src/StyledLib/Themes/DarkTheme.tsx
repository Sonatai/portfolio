import { DefaultTheme } from 'styled-components';
import ColorPalette from './ColorPalette';

const DarkTheme: DefaultTheme = {
	colors: {
		background: {
			main: ColorPalette.grey.dark,
		},
		fonts: {
			main: ColorPalette.grey.light,
		},
	},
};

export { DarkTheme };
