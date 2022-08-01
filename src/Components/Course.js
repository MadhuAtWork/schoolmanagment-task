import React, { useState, useEffect } from 'react';

function Course(){
    const [data, getData] = useState([])
    const URL = 'https://61ef7787732d93001778e3c3.mockapi.io/course';
 
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
                <div>course name</div>
                <div>staff name</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="course">
            {data.map((item, i) => (
                    <div className="items" key={i}>
                <div className="input"><textarea>{item.coursename}</textarea></div>
                <div className="input"> <select>
                                <option >{item.staffName[0]}</option>
                                <option>{item.staffName[1]}</option>
                                <option>{item.staffName[2]}</option>
                                <option>{item.staffName[3]}</option>
                                <option>{item.staffName[4]}</option>
                                <option>{item.staffName[5]}</option>
                                <option>{item.staffName[6]}</option>
                               
                            </select></div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Course;