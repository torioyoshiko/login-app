import {useEffect} from 'react';
import firebase from "../utils/firebaseApp";
import {setUser} from "../actions/user.action";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {user: state.user}
}

const UserProvider = (props) => {
    useEffect(() => firebase.auth().onAuthStateChanged(async (newUser) => {
        props.dispatch(setUser(firebase.auth().currentUser))
    }), [])

    return null;
}

export default connect(mapStateToProps)(UserProvider)
