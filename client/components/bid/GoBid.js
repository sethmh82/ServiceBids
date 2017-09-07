import React from 'react';
import { connect } from 'react-redux';
import categories from '../../data/categories';
import map from 'lodash/map';
import { bidCategory } from '../../actions/bidActions';
import classnames from 'classnames';
import jwtDecode from 'jwt-decode';



class GoBid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        category: '',
        loading: false,
        isLoading: false,
        invalid: false
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
  
  
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
      
    }

  
    onSubmit(e) {
      e.preventDefault();
      var decoded = jwtDecode(localStorage['jwtToken']);
      this.props.bidCategory(this.state, decoded.id).then(() => {
        this.context.router.push('/bid');
      });
  
    //   if (this.isValid()) {
    //     this.setState({ errors: {}, isLoading: true });
    //     this.props.userSignupRequest(this.state).then(
    //       () => {
    //         this.props.addFlashMessage({
    //           type: 'success',
    //           text: 'You signed up successfully. Welcome!'
    //         });
    //         this.context.router.push('/');
    //       },
    //       (err) => this.setState({ errors: err.response.data, isLoading: false })
    //     );
    //   }
    }
  
    render() {
    //   const { errors } = this.state;
      const options = map(categories, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );


      
  
  
  
      return (
        <form onSubmit={this.onSubmit}>
          
          <div className={classnames("form-group")}>
            <label className="control-label">Select Category</label>
            <select
              className="form-control"
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
            >
              <option value="" disabled>Categories</option>
              {options}
            </select>
            
          </div>
  
  
  
          <div className="form-group">
            <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
              Select
            </button>
          </div>
        </form>
      );
    }
  }
  
//   SignupForm.propTypes = {
//     userSignupRequest: React.PropTypes.func.isRequired,
//     addFlashMessage: React.PropTypes.func.isRequired,
   
//   }
  
  GoBid.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  
//   export default GoBid;
  export default connect(null, { bidCategory })(GoBid);
  