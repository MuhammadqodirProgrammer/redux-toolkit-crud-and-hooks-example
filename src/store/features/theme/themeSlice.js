import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: 'light',
	},

	reducers: {
		changeTheme: (state) => {
			if (state.theme === 'light') {
				state.theme = 'dark';
			} else {
				state.theme = 'light';
			}
		},
	},
});
