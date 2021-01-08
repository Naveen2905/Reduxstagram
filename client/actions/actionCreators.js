import comments from "../data/comments"
import posts from "../data/posts"

// increment
export function increment(index) {
    return {
        type: "Increment Likes",
        index: index,
    }
}

//  Add Comment

export function addComment (postId, author, comment) {
    console.log('Dipatching the add comment');
    
    return {
        type: 'Add Comment',
        postId : postId,
        author: author,
        comment: comment,
    }
}


//  remove comment

export function removeComment (postId, i) {
    return {
        type: 'Remove Comment',
        i : i,
        postId: postId
    }
}