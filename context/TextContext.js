import { createContext, useContext, useReducer } from 'react';

const initialValue = {
	text: 'Hello there!',
};

const TextContext = createContext();

function textReducer(state, action) {
	switch (action.type) {
		case 'UPDATE': {
			return {
				...state,
				text: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

function TextProvider({ children }) {
	const [state, dispatch] = useReducer(textReducer, initialValue);

	const value = { state, dispatch };

	return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
}

function useText() {
	const context = useContext(TextContext);

	if (context === undefined) {
		throw new Error('useText must be used withing a TextProvider!');
	}

	return context;
}

export { useText };

export default TextProvider;
