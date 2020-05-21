import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: {
				main: string;
			};
			fonts: {
				main: string;
			};
		};
	}
}
