import { useState , useEffect} from 'react'
import { supabase } from '../client'
import { useParams } from "react-router-dom"

function EditPost() {

  const { index } = useParams()

  const [post, setPost] = useState({title: "", edit_key: "", description: "", img: "", game_id: ""})
  const [compPost, setCompPost] = useState(null)
  

  useEffect(() => {
            const fetchPost = async () => {
            const {data} = await supabase
                .from('Post')
                .select()
                .eq('id', index);     // 🔍 filter where id === someId
            // set state of posts
            setCompPost(data[0])
            setPost({title: data[0].title, edit_key: "", description: data[0].description, img: data[0].img, game_id: data[0].game_id})
            }
            fetchPost()
        }, [])

  const handleChange = (event) => {
        const {name, value} = event.target
        console.log(value)
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const editPost = async (event) => {
        event.preventDefault();

        
        await supabase
            .from('Post')
            .update({title: post.title, description: post.description, img: post.img, game_id: post.game_id})
            .eq('id', index);

        window.location = "/";
    }

    const deletePost = async (event) => {
    event.preventDefault();

    await supabase
        .from('Post')
        .delete()
        .eq('id', index);

        window.location = "/";
    }


  return (
    <div >
      <h1>Edit Post</h1>
      {compPost &&
      <form>
                <div id="entry">
                <div class="inputType">
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" defaultValue={compPost.title} onChange={handleChange} /><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="edit_key">Edit Key</label> <br />
                <input type="text" id="edit_key" name="edit_key" placeholder="Enter edit key" onChange={handleChange} /><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="description">Description</label> <br />
                <textarea rows="5" cols="50" id="description" name="description" defaultValue={compPost.description} onChange={handleChange} ></textarea><br />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="img">Image Link</label><br />
                <input type="text" id="img" name="img" defaultValue={compPost.img} onChange={handleChange} />
                <br/>
                </div>
                <div class="inputType">
                <label htmlFor="game_id">Lichess Game ID</label><br />
                <input type="text" id="game_id" name="game_id" defaultValue={compPost.game_id} onChange={handleChange} />
                <br/>
                </div>
                </div> 
                <br></br>
                <input id="addBtn" type="submit" value="Edit" onClick={(post.title != "" && post.edit_key == compPost.edit_key) ? editPost : null} />
                <input id="addBtn" type="submit" value="Delete" onClick={post.edit_key == compPost.edit_key ? deletePost : null} />
        </form>
}
    </div>
  )
}

export default EditPost