import React from "react";

function CreateUser () {
    return (
        <div className="d-flex vh-100 bg-white justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Patient Registration</h2>
                    <div className="mb-2">
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
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;