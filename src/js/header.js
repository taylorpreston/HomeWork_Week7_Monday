import React, { PropTypes } from 'react'

class Header extends React.Component {

constructor(props){
  super(props);
  console.log(props.data)
}

render(){
    return(
      <header>
        I am the header
        <h1>{this.props.data}</h1>
       </header>
    )
  }
}
export default Header;
