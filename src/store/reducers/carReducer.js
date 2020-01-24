const initState = {
};

const carReducer = (state = initState, action) => {
    switch (action.type) {
        case 'POSTED_AD':
            console.log('ad posted: ', action.request);
            return state;

        default:
            return state;
    }
}

export default carReducer;