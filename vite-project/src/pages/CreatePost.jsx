import { useState } from 'react'
import { supabase } from '../client'

function CreatePost() {

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
        .from('Post')
        .insert({title: post.title, edit_key: post.edit_key, description: post.description, img: post.img, game_id: post.game_id})
        .select();

        window.location = "/";
    }

    const [post, setPost] = useState({title: "", edit_key: "", description: "", img: "", game_id: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

  return (
    <div >
      <h1>Create Post</h1>
      <form>
                <div id="entry">
                <div class="inputType">
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="edit_key">Edit Key</label> <br />
                <input type="text" id="edit_key" name="edit_key" onChange={handleChange} /><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="description">Description</label> <br />
                <textarea rows="5" cols="50" id="description" name="description" placeholder="Optional" onChange={handleChange} ></textarea><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="img">Image Link</label><br />
                <input type="text" id="img" name="img" placeholder="Optional" onChange={handleChange} />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="game_id">Lichess Game ID</label><br />
                <input type="text" id="game_id" name="game_id" placeholder="Optional" onChange={handleChange} />
                <br/>
                </div>
                </div> 
                <br></br>
                <input id="addBtn" type="submit" value="Submit" onClick={(post.title != "" && post.edit_key) ? createPost : null} />
        </form>
    </div>
  )
}

export default CreatePost