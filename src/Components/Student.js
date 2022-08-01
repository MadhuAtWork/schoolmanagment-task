import React, { useState, useEffect } from 'react';
import { FilePicker } from 'react-file-picker';

function Students(props) {
    const [data, getData] = useState([])
    const URL = 'https://61ef7787732d93001778e3c3.mockapi.io/student';

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
    return (
        <div className="holder2">
            <div className="heading">
                <div>name</div>
                <div>email</div>
                <div>date of birth</div>
                <div>blood group</div>
                <div>father name</div>
                <div>mother name</div>
                <div>address</div>
                <div>photo</div>
                <div>course</div>
            </div>
            <div className="student">

                {data.map((item, i) => (
                    <div className="items" key={i}>
                        <div className="input">
                            <textarea>{item.name}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.email}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.dob}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.bloodgroup}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.fathername}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.mothername}</textarea>
                        </div>
                        <div className="input">
                            <textarea>{item.address}</textarea>
                        </div>

                        <div className="input">
                            <textarea>{item.studentphoto}</textarea>
                            <FilePicker extensions={['.docx']} >
                                <button>Upload</button>
                            </FilePicker></div>

                        <div className="input">
                            <select>
                                <option>{item.staff[0]}{item.coursename} </option>
                                <option>{item.staff[1]}{item.coursename}</option>
                                <option>{item.staff[2]}{item.coursename}</option>
                            </select>
                            </div>
                    </div>
                
                ))}

            </div>
        </div>
    )

}
export default Students;