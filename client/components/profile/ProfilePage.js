import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import EditProfileForm from './EditProfile';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/authActions';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <EditProfileForm />
        </div>
      </div>
    );
  }
}

export default ProfilePage;