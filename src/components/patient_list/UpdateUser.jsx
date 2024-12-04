import React from "react";
import './UpdateUser.css'

function UpdateUser () {
    return (
        <div className="bg">
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Patient Detail</h2>
                    <div className="id">
                        <label htmlFor="">ID</label>
                        <input type="text" placeholder="Enter ID" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control"/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;