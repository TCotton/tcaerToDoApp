import axios from 'axios';
import { createStore, compose } from 'redux';

export const changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}
};

export const addHobby = (name) => {
	return {
		type: 'ADD_HOBBY',
		name
	}
};

export const removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
};

export const addMovie = (title, genre) => {
	return {
		type: 'ADD_HOBBY',
		title,
		genre
	}
};

export const removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
};

export const startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

export const completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url,
	}
};

export const fetchLocation = (store) => {

	return (dispatch, getState) => {
		store.dispatch(startLocationFetch());

		axios.get('https://ipinfo.io/').then((res) => {
			const loc = res.data.loc;
			const baseUrl = 'https://www.google.com/maps?q=';

			dispatch(completeLocationFetch(baseUrl + loc));
		});
	}
};

