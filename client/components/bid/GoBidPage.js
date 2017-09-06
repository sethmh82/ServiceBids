import React from 'react';
import GoBid from './GoBid';

class GoBidPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <GoBid />
        </div>
      </div>
    );
  }
}

export default GoBidPage;