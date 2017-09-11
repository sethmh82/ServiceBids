import React from 'react';
import GoBid from './GoBid';
import ProjectDetail from './ProjectDetail'

class GoBidPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bidVisible: true,
      Project:null
    
    }

    this.setProject = this.setProject.bind(this);

  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.Project !== this.state.Project){
 
      
     
      
    }


  }

  setProject(chosenProject){
    this.setState({Project:chosenProject});
    this.setState({bidVisible: false});
    
    
    
  }

  goBack(){
    this.setState({bidVisible: true});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
        { this.state.bidVisible ? <GoBid bidVisible={this.state.bidVisible}  setProject={this.setProject} /> : <ProjectDetail goBack={this.goBack} Project={this.state.Project}/> }

        
        </div>
      </div>
    );
  }
}

export default GoBidPage;