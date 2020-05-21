import React, { useState, useEffect } from 'react';
import { DarkTheme } from '../StyledLib/Themes/DarkTheme';
import { LightTheme } from '../StyledLib/Themes/LightTheme';

const Header: React.FC<{ setTheme: any }> = (props) => {
	const [Checked, setChecked] = useState(false);
	useEffect(() => {
		const setTheme = (): void => {
			Checked ? props.setTheme(DarkTheme) : props.setTheme(LightTheme);
		};
		return setTheme();
	}, [Checked]);

	return (
		<h3>
			Home | Game Projects | Software Projects | Jams | Resume | Contact Me |{' '}
			<label htmlFor='theme'>Dark Theme</label>{' '}
			<input
				type='checkbox'
				id='theme'
				checked={Checked}
				onClick={() => setChecked(!Checked)}
				onChange={() => {}}
			/>
		</h3>
	);
};
export default Header;
