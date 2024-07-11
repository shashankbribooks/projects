import React, { useReducer } from 'react';

let user = null;
let book = null;
let cart = null;
let locale = null;

if (typeof window !== "undefined") {
	user = localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null;
	book = localStorage.getItem('book')
		? JSON.parse(localStorage.getItem('book'))
		: null;
	cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: null;
	locale = localStorage.getItem('locale')
		? JSON.parse(localStorage.getItem('locale'))
		: null;
}

export const initialState = {
	user: null || user,
	userBook: null || book,
	userCart: null || cart,
	userLocale: null || locale,
	data: {},
	loading: false,
	error: null,
	school_id : null
};

const AppReducer = (initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			localStorage.setItem('user', JSON.stringify(action.payload.user))
			return {
				...initialState,
				user: action.payload.user,
				loading: false
			};
		case 'LOGOUT':
			localStorage.removeItem('user')
			localStorage.removeItem('book')
			return {
				...initialState,
				user: null,
			};
		case 'UPDATE_BOOK':
			localStorage.setItem('book', JSON.stringify(action.payload.book))
			return {
				...initialState,
				userBook: action.payload.book,
				loading: false
			};
		case 'UPDATE_CART':
			localStorage.setItem('cart', JSON.stringify(action.payload.cart))
			return {
				...initialState,
				userCart: action.payload.cart,
				loading: false
			};
		case 'UPDATE_LOCALE':
			localStorage.setItem('locale', JSON.stringify(action.payload.locale))
			return {
				...initialState,
				userLocale: action.payload.locale,
				loading: false
			};
		case 'UPDATE_CAPTCHA':
			return {
				...initialState,
				captcha: action.payload.captcha,
				loading: false
			};
		case 'UPDATE_SCHOOL_ID':
				return {
					...initialState,
					school_id: action.payload.school_id,
					loading: false
				};
		case 'UPDATE_DATA':
			return {
				...initialState,
				data: {
					...initialState.data,
					[action.payload.key]: action.payload.value
				}
			}

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

export default AppReducer
