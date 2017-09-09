import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import EditProfileForm from './EditProfile';
import ViewProfileForm from './ViewProfile';
import CheckoutApp from '../../src/CheckoutApp';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ProfilePage extends React.Component {
  render() {
        const { addFlashMessage } = this.props;
    return (
      <div className="row">
         <div className="col-md-12">
          <ViewProfileForm />
           <CheckoutApp />
        </div>
        <div className="col-md-12">
          <EditProfileForm 
          addFlashMessage={addFlashMessage}
          />
         
         
          </div>
         
      </div>
    );
  }
}

ProfilePage.propTypes = {

  addFlashMessage: React.PropTypes.func.isRequired

}

export default ProfilePage;