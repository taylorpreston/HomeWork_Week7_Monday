console.log('hi')

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Profile from './profile'
import Header from './header';
import Repos from './repos'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      profileInfo:[]
    }
  }

  componentDidMount() {
    jQuery.ajax('https://api.github.com/users/taylorpreston').then( response => {
      this.setState({
          profileName: response.login,
          profileImgUrl: response.avatar_url,
      });
      console.log(this.state.profileName)
    });
  }

  render () {
    return(
      <main>
        <Header data={this.state.profileName}/>
        <Profile/>
        <Repos/>
      </main>
    )
  }
}

export default App;



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
