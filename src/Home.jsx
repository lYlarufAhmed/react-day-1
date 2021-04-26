import './styles.css'
import UserCard from "./userCard";
import users from "./user";

function Home(props){
    console.log(users)
    return (
        <div className={'container'}>
            <h1>Users at ACME Inc.</h1>
            <div className="cards">
                {users.map(user=>(
                    <UserCard name={user.name.title+user.name.first+user.name.last} email={user.email} thumbUrl={user.picture.thumbnail}/>
                ))}
                {/*{[<UserCard name={'Rightfull Ass'} email={'right@email'}/>, <UserCard name={'Left Ass'} email={'yes@email.com'}/>]}*/}
            </div>
        </div>
    )
}


export default Home