import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profileActions';
import { viewProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import jwtDecode from 'jwt-decode';

class ViewProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfile: '',
            vProfile: '',
        };

        this.onLoad = this.onLoad.bind(this);
    }

 

    onLoad(e) {
      
        var decoded = jwtDecode(localStorage['jwtToken']);
        console.log(decoded);
        
        this.props.viewProfile(this.state, vProfile).then(() => {
            console.log(vProfile);
           // this.context.router.push('/')
        }
        );
    }

    render() {
        console.log(vProfile);
        const { vProfile } = this.state;

        return (
            <div>
                <h1>My Profile</h1>
                {this.state.about}
                {this.photo}
                {this.location}
                <hr />
            </div>

        );
    }
}


ViewProfileForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { viewProfile })(ViewProfileForm);
