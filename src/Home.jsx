import './styles.css';
import UserCard from './UserCard';
import users from './users';
function Home(props) {



    return (
        <div className='container' >
            <h1>Users</h1>
            <div className='user-container'>
                {users.map((user) => <UserCard name={user.name.first} email={user.email} image={user.picture.thumbnail} />)

                }
            </div>

        </div>
    )


}
export default Home;
