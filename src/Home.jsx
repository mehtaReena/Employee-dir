import './styles.css';
import UserCard from './UserCard';
import users from './users';
function Home(props) {
    users.map((item, index) => {
        console.log(item.email);

        return (
            <div>
              
                <UserCard name={item.name.first} email={item.email} />



            </div>
        )

    });
}
export default Home;
