import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profileActions';
import { viewProfile } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import jwtDecode from 'jwt-decode';
import Input from 'react-placeholder-support';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vProfile: {},
      about: '',
      location: '',
      photo: ''  
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }

  //onFocus(e) {
  //  this.setState({ [e.target.value]: e.target.defv });
  //}
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //this.setState({ [e.target.value]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    var decoded = jwtDecode(localStorage['jwtToken']);
    this.props.updateProfile(this.state, decoded.id).then(() => {

      this.props.addFlashMessage({
        type: 'success',
        text: 'Your profile was updated successfully'
      });
      this.context.router.push('/profile');
    }
    );
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
    const { about, photo, location } = this.state;
    const { vProfile } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Update Your Profile</h1>

        <TextFieldGroup
          field="about"
          label="About Me"
          name="about"
          value={about}
          defaultValue={vProfile.about}
          onChange={this.onChange}
         // onFocus={this.onFocus}
        />

        <TextFieldGroup
          field="photo"
          label="Photo URL"
          name="photo"
          value={photo}
          defaultValue={vProfile.photo}
          onChange={this.onChange}
       //   onFocus={this.onFocus}
        />

        <TextFieldGroup
          field="location"
          label="My Location"
          name="location"
          value={location}
          defaultValue={vProfile.location}
          onChange={this.onChange}
         // onFocus={this.onFocus}
        />

        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    );
  }
}


EditProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { updateProfile })(EditProfileForm);
