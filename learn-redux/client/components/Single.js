import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render() {
    // i is the index of the component in the photoGrid array.
    const {postId} = this.props.params;
    const i = this.props.posts.findIndex((post) =>
        post.code === postId)
    console.log('i is', i);
    // should be the post we click on.
    const post = this.props.posts[i];
    console.log('post is', post);
    // the postID is the specific photo a user clicks on, so this
    // should find all the comments for this specific post.  
    // if there are no comments for this photo, postComments will
    // be an empty array.
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single;