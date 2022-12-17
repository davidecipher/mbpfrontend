import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ClientInfo() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = useParams();
    const [data, setData] = useState({})

    if(user.role != 'Branch User'){
        return <Error />
    }

    const getClient = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/client/${id}`);
        const json = await response.json();
        setData(json[0]);
        console.log(data)
    }

    useEffect(() => {
        getClient();
    }, [])

    return(
        <div className="container">
            <div className='client_info'>
                {data && 
                <>
                    <h3>Print Name: { data.printName }</h3>
                    <h3>Eligibility: { data.eligibility }</h3>
                    <h3>Parent Phone Number: { data.phoneNumber }</h3>
                    <h3>Address: { data.address }</h3>
                    <h3>City: { data.city }</h3>
                    <h3>State: { data.state }</h3>
                    <h3>Zip Code: { data.zipCode }</h3>
                    <h3>First Child Name: { data.childOneName || 'N/A' }</h3>
                    <h3>First Child ID or Case Number : { data.childOneID || 'N/A' }</h3>
                    <h3>Second Child Name: { data.childTwoName || 'N/A' }</h3>
                    <h3>Second Child ID or Case Number : { data.childTwoID || 'N/A' }</h3>
                    <h3>Third Child Name: { data.childThreeName || 'N/A' }</h3>
                    <h3>Third Child ID or Case Number : { data.childThreeID || 'N/A' }</h3>
                    <h3>Fourth Child Name: { data.childFourName || 'N/A' }</h3>
                    <h3>Fourth Child ID or Case Number : { data.childFourID || 'N/A' }</h3>
                    <h3>Facility Hours: {data.timeFrom }{data.timeFromHour } to { data.timeTo }{ data.timeToHour }</h3>
                    <h3>Only Before/After Care Provided: { data.beforeAfterCare ? "Yes" : "No" }</h3>
                    <h3>Child Days at the Center: { data.dayCenterSunday ? "Sunday" : "" }{ data.dayCenterMonday ? "Monday " : "" }{ data.dayCenterTuesday ? "Tuesday " : "" }{ data.dayCenterWednesday ? "Wednesday " : "" }{ data.dayCenterThursday ? "Thursday " : "" }{ data.dayCenterFriday ? "Friday " : "" }{ data.dayCenteraturdday ? "Saturday" : "" }</h3>
                    <h3>Meals Received While at Care: {data.breakFast ? "Breakfast" :""} { data.snackLunch ? "Lunch-Snack" : "" } { data.snackPM ? "PM-Snack" : ""} { data.supper ? "Supper" : ""} {data.snack ? "Snack" : ""}</h3>
                    <h3>Ethnicity: { data.latino ? "Hispanic" : "Non-Hispanic"} { data.black && "Black" } { data.white && "White" } { data.asian && "Asian" }  { data.indian }  { data.hawaiian && "Hawaiian" }</h3>
                    </>
                }
            </div>
        </div>
    )
}