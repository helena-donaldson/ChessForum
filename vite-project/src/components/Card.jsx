import { Link } from "react-router-dom"

function Card({title, upvote, created_at, id, comment_length}) {

  return (
    <div key={id} id="overallCard">
    <div class="card">
        <span><p ><Link style={{ color: "Black" }} to={`/viewPost/${id}`}>{title}</Link></p></span>
        <span><p id="date">Posted {created_at.toDateString()}</p></span>
    </div>
    <div class="card">
       <span><p >{upvote} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i></p></span>
        <span><p >{comment_length} Comments</p></span>
    </div>
    
    <hr></hr>
    </div>
  )
}

export default Card