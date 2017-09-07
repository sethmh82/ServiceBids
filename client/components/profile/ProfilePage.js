import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import EditProfileForm from './EditProfile';
import ViewProfileForm from './ViewProfile';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/authActions';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="row">
         <div className="col-md-6">
          <ViewProfileForm />
        </div>
        <div className="col-md-6">
          <EditProfileForm />
          </div>
         
      </div>
    );
  }
}

export default ProfilePage;