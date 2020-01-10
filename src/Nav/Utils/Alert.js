import React from 'react'

const onDeleteAlert = () => {
    return(
        <div className="alert alert-danger" role="alert">
            Row Deleted:
         </div>
        
    )
}

const onEditAlert = () => {
    return(
        <div className="alert alert-success" role="alert">
            Row Edited:
        </div>
    )
}
const onFetchedAlert = () => {
    return(
        <div className="alert alert-primary" role="alert">
            Entries Fetched
        </div>
    )
}

const onAlert = (props) => {
    return(
        props.alert
        ? props.action ? <onEditAlert />:<onDeleteAlert />
        : <onFetchedAlert/>
    )
}

export default onAlert;