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

export const registerCar = details => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // creating a new request using thunk and redux
        const firestore = getFirestore();
        // const studentName = getState().firebase.profile.name;
        const userUid = getState().firebase.auth.uid;

        console.log(details.car, userUid);

        firestore.collection('cars').doc(userUid).collection('registeredCars').add({
            ...details.car,
            hashCode: details.res
        }).then(() => {
            console.log('car registered');
            firestore.collection('cars').doc(details.carId).update('status', 'registered')
                .then(() => {
                    dispatch({
                        type: 'CAR_REGISTERED',
                        details
                    })
                }).catch(err => {
                    dispatch({
                        type: 'CAR_REGISTERED_ERR',
                        err
                    })
                })
        }).catch(err => {
            dispatch({
                type: 'CAR_REGISTERED_ERR',
                err
            })
        })




    }
}