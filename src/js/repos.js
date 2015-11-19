import React, { PropTypes } from 'react';

import RepoItem from './repo-item';

class Repos extends React.Component {

  constructor(props){
    super(props);
  }

  render (){

    let allRepos = this.props.repos.map( repo => {
        return <RepoItem key={repo.id}
                         repo={repo}/>
    })

    return(
      <secetion>
        <header className="tabs">className=
          <button href="#" className="tabBtn cont active" data-target=".contributions"><span className="octicon octicon-diff-added"></span>Contributions</button>
          <button href="#" className="tabBtn reposit" data-target=".all-repos"><span className="octicon octicon-repo"></span> Repositories</button>
          <button href="#" className="pubAct"><span className="octicon octicon-rss"></span>Public Acticity</button>
          <a type="button" name="button"><span className="octicon octicon-pencil"></span> Edit Profile</a>
        </header>
        <section className="all-repos repo tabContainer">
          <nav className="all-repo-nav">
            <section className="all-repo-search">
              <input type="text" className="search" name="name" value="" placeholder="Find a repository..."/>
              <input type="button" className="searchBtn" name="name" value="Search"/>
            </section>
            <section className="all-repo-buttons">
              <button className ="allRepos" >All</button>
              <button className= "pubRepos">Public</button>
              <button className="privateRepos">Private</button>
              <button className="sourceRepos">Source</button>
              <button className="forkRepos">Forks</button>
              <button className="mirrorRepos">Mirrors</button>
              <button className="NEW"type="button" name="button"><span className="octicon octicon-repo"></span>NEW</button>
            </section>
          </nav>
          <section className="posted-repos">
            {allRepos}
          </section>
    </section>
    )
  }
}

export default Repos;
