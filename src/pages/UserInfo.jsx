
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function UserInfo() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [logs, setLogs] = useState([]);

    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setUser(json);
    } 

    const getLogs = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/logs/${id}`);
        const json = await response.json();
        setLogs(json);
    }
    
    
    useEffect(() => {
        getData();
        getLogs();
    }, [])

    return(
        
        <div>

            <div className='container'>
                <div className='user_info'>
                    <p>Name: { user.name }</p>
                    <p>Email: { user.email }</p>
                    <p>Role: { user.role }</p>
                </div>
                <div className='logs'>
                    <h3 className='logs_title'>Logs</h3>
                    {logs.length  > 0 ?
                    <table className='logs_table'>
                        <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                                {logs.map((log) => {
                                    return(
                                        <tr key={log._id}>
                                            <td>{ log.ip }</td>
                                            <td>{formatDistanceToNow(new Date(log.createdAt), { addSuffix: true })}</td>
                                        </tr>
                                    )
                                })}       
                         </tbody>
                    </table> : 
                    <div>
                        <h4>User is yet to login</h4>
                    </div>
                    }   
                </div>
            </div> 
        </div>
    )
}