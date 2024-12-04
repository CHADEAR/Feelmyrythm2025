import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Users.css'

function Users () {
    const [Users, setUsers] = useState([{
        ID: "65010145",
        Name: "Jiraporn Chin",
        Age: 21,
        },
    ]);
    return (
        <div className="bg1">
            <div className='list'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className="table">
                    <thead className="detail-list">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users.map((user) => {
                                return <tr>
                                    <td>{user.ID}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to="/update" className='btn'>View</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;