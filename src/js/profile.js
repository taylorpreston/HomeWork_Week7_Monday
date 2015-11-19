import React, { PropTypes } from 'react'

class Profile extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <section className="profile">
        <section className="name">
          <img src={this.props.profileInfo.avatar_url}/>
          <h1> {this.props.profileInfo.name} </h1>
          <h2> {this.props.profileInfo.login}</h2>
        </section>
        <section className="profileNav">
          <span className="octicon octicon-location"></span><div>{this.props.profileInfo.location}</div>
          <h3>{this.props.profileInfo.email}</h3>
          <span className="octicon octicon-clock"></span><div>{this.props.profileInfo.created_at}</div>
        </section>
      </section>
    )
  }
}

export default Profile;
