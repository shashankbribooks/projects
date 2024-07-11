import React, {
	useState,
	useRef,
	useEffect,
	createContext,
	useContext,
	useReducer,
} from 'react'

import AppReducer, { initialState } from './AppReducer'

const AppStateContext = createContext();
const AppDispatchContext = createContext();

// export function useAppState() {
// 	const context = useContext(AppStateContext);
// 	if (context === undefined) {
// 		throw new Error('useAppState must be used within a AuthProvider');
// 	}

// 	return context;
// }

// export function useAppDispatch() {
// 	const context = useContext(AppDispatchContext);
// 	if (context === undefined) {
// 		throw new Error('useAppDispatch must be used within a AuthProvider');
// 	}

// 	return context;
// }

const AppProvider = ({ children }) => {
	const [user, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppStateContext.Provider value={user}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppStateContext.Provider>
	);
}

export default AppProvider
