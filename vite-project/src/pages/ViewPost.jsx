import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import PostDetails from '../components/PostDetails.jsx'
import Comment from '../components/Comment.jsx'

function ViewPost() {
    const { index } = useParams()

    const [post, setPost] = useState(null)
    const [comment, setComment] = useState(null)

    const handleChange = (event) => {
        const {name, value} = event.target
        setComment(value)
    }


        useEffect(() => {
          const fetchPost = async () => {
          const {data} = await supabase
              .from('Post')
              .select()
              .eq('id', index);     // 🔍 filter where id === someId
          // set state of posts
          setPost(data[0])
          }
          fetchPost()
      }, [])

    const editPost = async (event) => {
    event.preventDefault();

    post.comments != null ?

    await supabase
        .from('Post')
        .update({comments: post.comments.concat([comment])})
        .eq('id', index)

    :

    await supabase
        .from('Post')
        .update({comments: [comment]})
        .eq('id', index)

    const fetchPost = async () => {
          const {data} = await supabase
              .from('Post')
              .select()
              .eq('id', index);     // 🔍 filter where id === someId
          // set state of posts
          setPost(data[0])
          }
          fetchPost()

    }

      return (
        <div >
            {post && <PostDetails 
                        title={post.title}
                        upvote={post.upvote}
                        created_at={new Date(post.created_at)}
                        game_id={post.game_id}
                        description={post.description}
                        id={post.id}
                        img={post.img} />}
            <h1>Comments:</h1>

            <div class="viewDisplay">
            <div class="formatting" >
            <input type="text" id="addComment" name="addComment" placeholder="Leave a Comment" onChange={handleChange} />
            <button id="createBtn" onClick={comment != "" ? editPost : null} ><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            </div>
            <br></br>

            {post &&
                post.comments != null ? [...(post.comments)].map((comment, index) =>
                    <Comment key={index} content={comment}/>
                ):
                    <div></div>
            }
            </div>

    )

}

export default ViewPost