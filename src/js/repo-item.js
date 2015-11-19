import React, { PropTypes } from 'react'

class RepoItem extends React.Component {

  constructor(props){
    super(props);
  }

  render () {

    return(
      <div>
        <section>
          <h2>{this.props.repo.name}</h2>
          <p>{this.props.repo.updated_at}</p>
        </section>
        <section>
          <span>{this.props.repo.language}</span>
          <span>{this.props.repo.stargazers_count}</span>
          <span>{this.props.repo.watchers_count}</span>
        </section>



      </div>
    )
  }
}

export default RepoItem;
