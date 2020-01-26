const initState = {
};

const carReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_AD':
            console.log('ad posted: ', action.request);
            return state;

        case 'CREATE_AD_ERR':
            console.log('ad not posted: ', action.request);
            return state;

        default:
            return state;
    }
}

export default carReducer;