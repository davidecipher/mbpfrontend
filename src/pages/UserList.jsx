import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from './Error';


export default function UserList(){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [branchName, setBranchName] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));


    const getUsers = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/${id}`);
        const json = await response.json();
        setData(json);
    }

    const getBranchName = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/branches/${id}`);
        const json = await response.json();
        setBranchName(json.name);
    }

    useEffect(() => {
        getUsers();
        getBranchName();
    }, []);

    if(data.length == 0){
        return(

            <>
                <div className='no_users'>
                    <h3>No users have been created yet.</h3>
                    <Link to={`/createuser/${id}`}>
                        <button 
                        className='button radius'>
                        Create New User
                        </button>
                    </Link>
                </div>
            </>
        )
    }

    return(
        <div>

            <div className='container'>
            <h3 className='user_list_header'>{branchName} Branch</h3>
            {user.role == 'System Admin' && 
            <Link to={`/createuser/${id}`}><button className='button radius'>
            Create New User
        </button></Link>}
            <div className='user_list'>
                {data.map((user) => {
                    return(
                        <div key={user._id} className='flex align user_list_container'>
                            <p className='user_list_name'>{ user.name }</p>
                            <div className='user_list_buttons'>
                                <Link to={`/users/${user._id}`}><button className='button radius user_list_button'>More Info</button></Link>
                            </div>
                        </div>
                    )
                })}

            </div>
            </div>
        </div>
    )
} 