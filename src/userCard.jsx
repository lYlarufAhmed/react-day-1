

function UserCard(props){
    return (
        <div className="card">
            <img className="profile-pic" src={props.thumbUrl ? props.thumbUrl:'https://randomuser.me/api/portraits/thumb/men/72.jpg'} alt="porfile pic"/>
            <div className="user-info">
                <h2>{props.name ? props.name:'Maruf Ahemd'}</h2>
                <p>{props.email ? props.email:'placeholder@email'}</p>
            </div>
        </div>
    )
}

export default UserCard;