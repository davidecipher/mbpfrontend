import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Error from './Error'

export default function DataAdminIEGFree() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState({});
    const { id } = useParams();


    if(!user.role || user.role == 'System Admin'){
        return <Error />
    }



    const getData = async () => {  
        const response = await fetch(`https://mbp-server.onrender.com/api/freemeals/${id}`);
        const json = await response.json();
        await setData(json[0])

    }
    
    useEffect(() => {
        getData();
    }, [])

    if(!data){
        window.location.assign(`/datafreeeditpost/${id}`)
    }

    return (

        <>
            <div className='container'>
            <h3 className="ieg_free">Income Eligibility Guidelines Form</h3>
            <h4 className="ieg_free">Free Meals</h4>
            { user.role == 'Data Admin' && <Link to={`/datafreeedit/${id}`}><button className="button radius">Edit Guidelines</button></Link> }

            {data && 
                <table className="submitted_forms">
                    <thead>
                        <tr>                        
                            <th>Household</th>
                            <th>Annual</th>
                            <th>Monthly</th>
                            <th>Twice A Week</th>
                            <th>Every Two Weeks</th>
                            <th>Weekly</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>{ data.houseHoldOne }</td>
                            <td>{ Math.ceil(data.houseHoldOne / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldOne / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldOne / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldOne / 52) }</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>{ data.houseHoldTwo }</td>
                            <td>{ Math.ceil(data.houseHoldTwo / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldTwo / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldTwo / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldTwo / 52) }</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>{ data.houseHoldThree }</td>
                            <td>{ Math.ceil(data.houseHoldThree / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldThree / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldThree / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldThree / 52) }</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>{ data.houseHoldFour }</td>
                            <td>{ Math.ceil(data.houseHoldFour / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldFour / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldFour / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldFour / 52) }</td>
                        </tr>
                        
                        <tr>
                            <td>5</td>
                            <td>{ data.houseHoldFive }</td>
                            <td>{ Math.ceil(data.houseHoldFive / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldFive / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldFive / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldFive / 52) }</td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>{ data.houseHoldSix  }</td>
                            <td>{ Math.ceil(data.houseHoldSix / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldSix / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldSix / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldSix / 52) }</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>{ data.houseHoldSeven }</td>
                            <td>{ Math.ceil(data.houseHoldSeven / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldSeven / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldSeven / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldSeven / 52) }</td>
                        </tr>

                        <tr>
                            <td>8</td>
                            <td>{ data.houseHoldEight }</td>
                            <td>{ Math.ceil(data.houseHoldEight / 12) }</td>
                            <td>{ Math.ceil(data.houseHoldEight / 24) }</td>
                            <td>{ Math.ceil(data.houseHoldEight / 26) }</td>
                            <td>{ Math.ceil(data.houseHoldEight / 52) }</td>
                        </tr>

                        <tr>
                            <td>For Each Additional Family Member </td>
                            <td>{ data.AdditionalHousehold }</td>
                            <td>{ Math.ceil(data.AdditionalHousehold / 12) }</td>
                            <td>{ Math.ceil(data.AdditionalHousehold / 24) }</td>
                            <td>{ Math.ceil(data.AdditionalHousehold / 26) }</td>
                            <td>{ Math.ceil(data.AdditionalHousehold / 52) }</td>
                        </tr>
                    </tbody>
                </table>
            }   
            </div>
        </>
    )
}