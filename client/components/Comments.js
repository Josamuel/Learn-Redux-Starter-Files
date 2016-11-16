import React from 'react';


// when making React components in this style, 
// we can just return, no need to write a render function.
// had an issue with 'this' binding using class syntax, so I switched to es5.  
// would like to explore that .this binding issue more.  
const Comments = React.createClass( {
  renderComment(comment, i ) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong> {comment.user} </strong>
          {comment.text}
          <button className="remove-comment" 
          // this.props.removeComment is an action defined in our action creators.
          onClick={this.props.removeComment
            .bind(null, this.props.params.postId, i)}> &times; </button>
        </p>
      </div>
    )
  },
  // in order to make sure the comments have params, they have
  // to be passed from the single-photo view, as that is rendering the comments.  
  handleSubmit(e){
    e.preventDefault();
    const { postId }= this.props.params;
    const author = this.refs.author.value; // can call .value on this html elemnt because it is an html element.
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
    console.log(postId, author, comment);
  },
// for every postComment, do renderComment to it, this is called a render function
// setting key {i} to avoid that annoying react error.  
  render(){
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form"
        onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
})

export default Comments;
