import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from './Component/Footer';
import Header from './Component/Header';
import { HomePage } from './Pages/HomePage';
import { DarkTheme } from './StyledLib/Themes/DarkTheme';
import GlobalStyle from './StyledLib/Themes/GlobalStyle';

const App: React.FC = () => {
	const [Theme, setTheme] = useState(DarkTheme);
	return (
		<>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Header />
				<HomePage />
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
