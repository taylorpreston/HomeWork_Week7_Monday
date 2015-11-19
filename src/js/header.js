import React, { PropTypes } from 'react'

class Header extends React.Component {

constructor(props){
  super(props);
}

render(){

    return(
      <header className="mainHeader">
        <section className="headerSearch">
          <span className="mega-octicon octicon-mark-github"></span>
          <input type="text" className="search" name="name" value="" placeholder="Search Repos"/>
        </section>
        <section className="nav-head">
          <nav>
              <a href="#">Pull</a>
              <a href="#">Requests</a>
              <a href="#">Issues</a>
              <a href="#">Gist</a>
          </nav>
            <section className="profileNav">
              <a href="#"><span className="octicon octicon-bell"></span></a>
              <a href="#"><span className="octicon octicon-plus"></span><span className="octicon octicon-triangle-down"></span></a>
              <a href="#" className="proPicNav"><span className="octicon octicon-triangle-down"></span></a>
            </section>
        </section>
       </header>
    )
  }
}
export default Header;
