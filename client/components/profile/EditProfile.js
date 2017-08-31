import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      photo: '',
      location: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.UpdateProfile(this.state).then(
    this.context.router.push('/')
    );
  }


  

  render() {
    const { about, photo, location } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Update Your Profile</h1>

        <TextFieldGroup
          field="about"
          label="About Me"
          name="about"
          value={about}
          onChange={this.onChange}
   
        />

         <TextFieldGroup
          field="photo"
          label="Photo URL"
          name="photo"
          value={photo}
          onChange={this.onChange}
       
        />


         <TextFieldGroup
          field="location"
          label="My Location"
          name="location"
          value={location}
          onChange={this.onChange}
    
        />

        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    );
  }
}




export default connect(null, { updateProfile })(EditProfileForm);
