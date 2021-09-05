import axios from 'axios';
import React, { useState } from 'react'

function Form({m}) {

    let hideBlock = {display: 'none'};
    let showBlock = {display: 'block'};
    const [Style, setStyle] = useState(hideBlock)
    let toggleShow = ()=>{
        setStyle(Style.display == "none" ?  showBlock:hideBlock)
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log("---",this)
        let payload = {
            email: event.target.email.value,
            fist_name: event.target.firstname.value,
            last_name: event.target.lastname.value,
            pwd: event.target.password.value,
            username: event.target.username.value
        }
        toggleShow()
        axios.post("http://3.6.93.159:7883/machstatz/add_new_user",payload).then(console.log)
        event.target.reset()
    }

    return (
        <div className="form-group">
            <form onSubmit={handleSubmit} action="" method="get">
            <div className="formHeader" onClick={toggleShow}>
            <h2>Add User</h2><span style={Style} className="cross-btn">X</span>
            </div>
            <div className="divider"></div>
            <div style={Style} className="form-content">
            <label >First Name</label><br />
            <input type="text" name="firstname" id="firstname" placeholder="Enter your first name" required/>
            <br />

            <label >Last Name</label><br />
            <input type="text" name="lastname" id="" placeholder="Enter your last name" required/>
            <br />

            <label >Profile</label><br />
            <select name="profile" id="">
                <option value="Select">Select</option>
            </select>
            <br />

            <label >Username</label><br />
            <input type="text" name="" id="username" placeholder="Enter username" required/>
            <br />

            <label >Email Address</label><br />
            <input type="email" name="email" id="" placeholder="Enter your email address" required/>
            <br />

            <label >Password</label><br />
            <input type="password" name="password" id="" placeholder="Enter your last name" required/>
            <br />
            <br />
            <div className="divider"></div>
            <div className="btnBox">
                <button onClick={toggleShow} type="reset">Cancel</button>
                <button  type="submit">Add</button>
            </div>
            </div>

            </form>
            
        </div>
    )
}

export default Form
