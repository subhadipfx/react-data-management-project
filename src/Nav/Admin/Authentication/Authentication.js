import React from 'react'
import Input from '../../Utils/InputModal'

// const Auth = (props) => {
//     return (
//         <div className = "card bg-light container">
//             <h2>Admin Login</h2>
//             <form className="form-horizontalt">
//                 <Input label="Username" type ="text" id="username" placeholder="Username" />
//                 <Input label="Password" type ="text" id="password" placeholder="Password"  />
//                 <button type="button" onClick={props.login} className="btn btn-primary">Login</button>
//                 {props.rejected 
//                 ? <span>*Please enter correct username and password</span> : null}
//             </form>
//         </div>
//   );
// }

const AuthModal = (props) => {
    return(
        <div className="modal fade" id="authModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Admin Login</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <Input for = {"username"} type= {"text"} label = {"Username"} placeholder="Username" onChange = {props.onchangeUser}  />
                                    <Input for = {"password"} type= {"text"} label = {"Password"} placeholder="Password" onChange = {props.onchangePassword} />
                                    {props.rejected ? alert('* Please enter correct username and password') : null}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-info" 
                                        data-dismiss="modal"
                                        onClick = {props.onSubmit}
                                         >Login</button>
                                <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
      
                    </div>
                </div>
    )
}

export default AuthModal;