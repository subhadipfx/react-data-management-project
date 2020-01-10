import React from 'react'

const Select =(props) => {
    return(
        <div className="form-group">
            <label htmlFor={props.id} className="col-sm-5 control-label">{props.label}</label>
            <select id={props.id} className="from-control col-sm-7" onChange={props.onChange}>
                <option value="0" defaultValue>Select Your Department</option>
                <option value="CSE">CSE</option>
                <option value="ME">ME</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
                <option value="CE">CE</option>
            </select>
        </div>
    )
}

export default Select;