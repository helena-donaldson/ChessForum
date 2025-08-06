import { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import Card from '../components/Card'

function Home() {
  //const [count, setCount] = useState(0)

  const [posts, setPosts] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
   const [searchInput, setSearchInput] = useState("")

  const sortPopular = () => {
    const sorted = [...posts].sort((a, b) => b.upvote - a.upvote )
    setPosts(sorted)
  }

   const sortDate = () => {
    const sorted = [...posts].sort((a, b)  => new Date(b.created_at) - new Date(a.created_at) )
    setPosts(sorted)
  }

  const searchItems = searchValue => {
  setSearchInput(searchValue)
  if (searchValue !== "") {
    const filteredData = posts.filter((post) => 
      (post.title?.toLowerCase().includes(searchValue.toLowerCase())
    ))
    setFilteredResults(filteredData)
    console.log(filteredData)
  } else {
    setFilteredResults(posts)
  }
}

    useEffect(() => {
        const fetchPosts = async () => {
        const {data , error} = await supabase
            .from('Post')
            .select();

        // set state of posts
        if (error) {
            console.error('Supabase fetch error:', error.message)
            } else {
            setPosts(data)
            }
        }
        fetchPosts()
    }, [])

  return (
    <div >
        <h1>Forum</h1>
        <br></br>
        <div id="ordering">
        <input
       type="text"
        placeholder="Search for Post Title..."
       onChange={(inputString) => searchItems(inputString.target.value)}
       id="filter"
      />
        <p>Order By:</p>
        <button class="sortButton" onClick={sortDate}>Newest</button>
        <button class="sortButton" onClick={sortPopular}>Most Popular</button>
        </div>
        <br></br>
      <div class="grid">
        {searchInput.length > 0 ?
                filteredResults &&
                [...filteredResults]
                // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at) )
                .map((filteredResult,index) => 
                    <Card 
                        title={filteredResult.title}
                        upvote={filteredResult.upvote}
                        created_at={new Date(filteredResult.created_at)}
                        key={filteredResult.id}
                    />
                ) 
        :
                posts &&
                [...posts]
                // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at) )
                .map((post,index) => 
                    post.comments != null ?
                    <Card 
                        title={post.title}
                        upvote={post.upvote}
                        created_at={new Date(post.created_at)}
                        game_id={post.game_id}
                        id={post.id}
                        comment_length={post.comments.length}
                    /> :
                    <Card 
                        title={post.title}
                        upvote={post.upvote}
                        created_at={new Date(post.created_at)}
                        game_id={post.game_id}
                        id={post.id}
                        comment_length={0}
                    />
                )
        }
        </div>
    </div>
  )
}

export default Home