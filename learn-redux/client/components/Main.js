import React from 'react'
import {Link} from 'react-router'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
        <Link to="/"> SUXstagram lol</Link>
        </h1>
      {/* props will be undefined until we pass in children*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;