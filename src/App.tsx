import React, { useState } from 'react';

import Footer from './Component/Footer';
import Header from './Component/Header';
import HomePage from './Pages/Home';
import { DarkTheme } from './StyledLib/Themes/DarkTheme';
import GlobalStyle from './StyledLib/Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './StyledLib/Themes/LightTheme';

const App: React.FC = () => {
	const [theme, setTheme] = useState(LightTheme);
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header setTheme={setTheme} />
				<HomePage />
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
