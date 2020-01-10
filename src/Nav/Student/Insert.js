import React from 'react';
import './Insert.css';
import Input from '../Utils/Input'
import Select from '../Utils/Select'

const Insert = () => {
  return (
    <div className="container">
        <div className = "card bg-light">
            <h2>INSERT STUDENT INFORMATION FORM</h2>
            <form className="form-horizontal">
                <Input label="First Name" type ="text" id="fname" placeholder="First Name" />
                <Input label="Last Name" type ="text" id="lname" placeholder="Last Name"  />
                <Input label="Roll No" type ="text" id="roll" placeholder="Roll Number" />
                <Input label="Address" type ="text" id="address" placeholder="Address"  />
                <Input label="City" type ="text" id="city" placeholder="City"  />
                <Input label="State" type ="text" id="state" placeholder="State"  />
                <Input label="Contact No" type ="text" id="phno" placeholder="Contact Number"  />
                <Select label="Department" id="department"/>
                <Input label="Guardian Name" type ="text" id="guardian_name" placeholder="Guardian Name"  />
                <Input label="Guardian Contact No" type ="text" id="guardian_phno" placeholder="Contact Number"  />
                <Input label="Relation with Guardian" type ="text" id="relation" placeholder="Relation"  />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  );
};


export default Insert;