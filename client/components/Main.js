import React from 'react'
import {Link} from 'react-router'

class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>
        <Link to="/"> Reduxstagram!!</Link>
        </h1>
      {/* props will be undefined until we pass in children*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;