import React from 'react'


const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id} className="col-sm-3 control-label">{props.label}</label>
            <input type={props.type} id={props.id} className="from-control col-sm-6" placeholder={props.placeholder} value={props.value} />
        </div>
    );
};


export default Input;