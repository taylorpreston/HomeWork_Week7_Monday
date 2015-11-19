console.log('hi')

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Profile from './profile';
import Header from './header';
import Repos from './repos';
import blah from './token';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hasLoaded: false,
      profileInfo:{},
      repos:[]
    }
  }

  componentDidMount() {
    this.grabProfileInfo()
    this.grabRepos()
  }

  grabProfileInfo(){
    jQuery.ajax('https://api.github.com/users/taylorpreston').then( response => {
      this.setState({
          hasLoaded: true,
          profileInfo: response
      });

    });
  }

  grabRepos(){
    jQuery.ajax('https://api.github.com/users/taylorpreston/repos').then( response => {
      this.setState({
          hasLoaded: true,
          repos: response
      });

    });
  }

  render () {
    console.log('Rendered');
    if (this.props.hasLoaded === false) {
     return <div>Loading...</div>
   }

    return(
      <main>
        <Header/>
        <Profile  key = {this.state.profileInfo.id}
                  profileInfo={this.state.profileInfo}
                  hasLoaded={this.state.hasLoaded}/>
        <Repos
               repos={this.state.repos}
               hasLoaded={this.state.hadLoaded}/>
      </main>
    )
  }
}

export default App;



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
