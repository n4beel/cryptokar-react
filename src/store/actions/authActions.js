export const signIn = cred => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        })
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                cnic: newUser.cnic
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}
