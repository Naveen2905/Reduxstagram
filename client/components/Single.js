import React from 'react';
import { Link } from 'react-router';
import Photo from './photo'

// Import Comments
import Comments from './comment'

const Single = React.createClass({
    render() {
        // index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        console.log(i);

        // get us the posts
        const post = this.props.posts[i]
        console.log(post);

        const postComments = this.props.comments[this.props.params.postId] || []
        console.log(postComments);
        

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>

            </div>
        )
    }
});

export default Single; 