
const Comment = (props) => {
    let day = props.date.toLocaleString("e-US", {day: '2-digit'})
    let month = props.date.toLocalesString('en-US',{month: 'long'} )
    return (
       <div className="comment">
<UserInfo author={props.author}
        <div className="commentText">{props.text}</div>
      <CommentDate date={props.date}/>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        
       </div>
    )
}