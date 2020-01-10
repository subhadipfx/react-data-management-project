import React from 'react'

export default (props) => {
    return(
    <div>
        <label htmlFor={props.for} className="col-sm-5 control-label">{props.label}</label>
        <input id= {props.id} type={props.type} className="from-control col-sm-7"  autoComplete="off"
                placeholder = {props.placeholder}
                onChange = {props.onChange}
                onBlur={props.onBlur}
             />
    </div>
    )
}