import React from "react";
const UserInfo =  (props) => {
    return (
 <div className="userInfo">

    <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
    <div className="userInfo-name">{props.author.name}</div>
 </div>
 
    )
}
export default UserInfo;