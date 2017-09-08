import React from 'react';
import GoBid from './GoBid';

class GoBidPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <GoBid />
        </div>
      </div>
    );
  }
}

export default GoBidPage;