const initState = {
	projects: [
		{ id: '1', title: 'Help me find Peach', content: 'blah blah blah' },
		{ id: '2', title: 'Collect all the stars', content: 'blah blah blah' },
		{ id: '3', title: 'Egg hunt with Yoshi', content: 'blah blah blah' }
	]
};
export const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('Error:', action.err);
			return state;
		default:
			return state;
	}
};

export default projectReducer;
