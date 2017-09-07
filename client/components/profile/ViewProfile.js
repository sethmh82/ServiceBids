import React from 'react';
import { connect } from 'react-redux';
import { viewProfile } from '../../actions/profileActions';
import jwtDecode from 'jwt-decode';


class ViewProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vProfile: {},
        };
    }


    componentWillMount() {
      
        var decoded = jwtDecode(localStorage['jwtToken']);
        viewProfile(this.state, decoded.id)
            .then(res => {
            console.log(res.data);
            this.setState({ vProfile: res.data })
          });
    }

    render() {
        const { vProfile } = this.state;

        return (
            <div>
                <h1>My Profile</h1>
                {vProfile.about}
                {vProfile.photo}
                {vProfile.location}
                <hr />
            </div>

        );
    }
}


ViewProfileForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { viewProfile })(ViewProfileForm);
