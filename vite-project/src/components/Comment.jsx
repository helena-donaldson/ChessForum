function Comment({key, content}){
    return (
        <div key={key}>
        <p>{content}</p>
        <hr></hr>
        </div>
    )
}

export default Comment