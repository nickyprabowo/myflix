/*
ex:
	type: <action_name>,
	payload: {
		id: <whatever_id>,
		title: <whatever_title>
	}

*/

export const makeActionCreator = type => payload => ({type, payload})