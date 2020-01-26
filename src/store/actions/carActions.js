export const createAd = details => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // creating a new request using thunk and redux
        const firestore = getFirestore();
        // const studentName = getState().firebase.profile.name;
        const userUid = getState().firebase.auth.uid;

        firestore.collection('cars').add({
            ...details,
            status: 'active',
            userUid: userUid,
        }).then(() => {
            dispatch({
                type: 'CREATE_AD',
                details
            })
        }).catch(err => {
            dispatch({
                type: 'CREATE_AD_ERR',
                err
            })
        })


    }
}