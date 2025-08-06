import { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import { Link } from "react-router-dom"

function PostDetails({title, upvote, created_at, game_id, description, id, img}) {

    const [upvote_new, setUpvote] = useState(upvote)

    const editPost = async (event) => {
        event.preventDefault();

        setUpvote(upvote_new + 1)
        await supabase
            .from('Post')
            .update({upvote: upvote_new + 1})
            .eq('id', id);
        }

    return (
        <div>
            <h1>{title}</h1>
            <p>Posted {created_at.toDateString()}</p>
            {game_id != "" ?  <iframe
  src={`https://lichess.org/embed/${game_id}?theme=auto&bg=auto`}
  width="600"
  height="397"
  frameborder="0"
/> : <p></p>}
{img != "" ?  <img
  src={`${img}`}
  width="600"
  height="397"
  frameborder="0"
/> : <p></p>}
            <p>{description}</p>
            <div id="detailBar">
            <p>{upvote_new} <i class="fa fa-thumbs-o-up" aria-hidden="true" onClick={editPost}></i></p>
            <p><Link style={{ color: "Black" }} to={`/editPost/${id}`}><i class="fa fa-pencil" aria-hidden="true"></i> Edit</Link></p>
            </div>
        </div>
    )
}

export default PostDetails
