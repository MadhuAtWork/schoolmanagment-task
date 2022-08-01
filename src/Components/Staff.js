import React, { useState, useEffect } from 'react';

function Staff(){
    const [data, getData] = useState([])
    const URL = 'https://61ef7787732d93001778e3c3.mockapi.io/Staff';
 
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }
    return(
        <div className="holder1">
             <div className="heading">
                <div>name</div>
                <div>email</div>
                <div>mobile</div>
                <div>DOB</div>
                
             </div>
            <div className="staff">
            {data.map((item, i) => (
                    <div className="items1" key={i}>
                        <div className="input1">
                        <textarea>{item.name}</textarea>

                        </div>
                        <div className="input1">
                        <textarea>{item.email}</textarea>

                        </div>
                        <div className="input1">
                        <textarea>{item.mobile}</textarea>

                        </div>
                        <div className="input1">
                        <textarea>{item.dob}</textarea>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Staff;