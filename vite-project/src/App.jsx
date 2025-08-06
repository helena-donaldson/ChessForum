import { useState, useEffect } from 'react'
import { supabase } from './client.js'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)

  const [numPosts, setNumPosts] = useState(0)
  const [numUpvotes, setNumUpvotes] = useState(0)
  const [numComments, setNumComments] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
          const fetchPosts = async () => {
          const {data , error} = await supabase
              .from('Post')
              .select();
  
          // set state of posts
          if (error) {
              console.error('Supabase fetch error:', error.message)
              } else {
                setNumPosts(data.length)
                let upvote_number = 0;
                let num_comments = 0;
                for(let k=0; k<data.length; k++){
                  upvote_number = upvote_number + data[k].upvote;
                  if(data[k].comments != null){
                    num_comments = num_comments + data[k].comments.length
                  }
                }
                setNumUpvotes(upvote_number)
                setNumComments(num_comments)
              }
          }
          fetchPosts()
      }, [])

    useEffect(() => {
    const fetchDailyData = async () => {
      const response = await fetch("https://lichess.org/api/puzzle/daily")
      const json = await response.json()
      setRating(json.puzzle.plays)
    }
    fetchDailyData().catch(console.error)
    // setAverageYearPublished()
  }, [])

  return (
    <div>
      <h1>Welcome</h1>
    <div id="App">
      <p>Explore the world of chess through our forums and daily puzzle challenge!</p>
      <hr></hr>
    <div>
      { numPosts != null ?
      <div>
        <h2>Site Stats:</h2>
        <p>Number of Posts: {numPosts}</p>
        <p>Number of Comments: {numComments}</p>
        <p>Number of Upvotes: {numUpvotes}</p>
        <p>Current Puzzle Plays: {rating}</p>
        </div>
        : 
        null
      }
    </div>
    </div>
    </div>
  )
}

export default App
