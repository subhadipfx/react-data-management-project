import React, { Component } from 'react'
import Input from '../Utils/InputModal'
import Select from '../Utils/Select'

export default class RegisterModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            Student: {
                fname: "",
                lname: "",
                roll: "",
                address: "",
                city: "",
                state: "",
                phno: "",
                department: "",
                guardian_name: "",
                guardian_phno: "",
                relation: ""

            },
            error: false,
            errorText: "**All fields are mandatory!!",
            modal: ""
        }
        this.fname = React.createRef();
      }
      departmentHandler =(event) =>{
          console.log(event.target.id)
          event.target.value === "0" 
            ? this.setState({error: true,
            errorText:"* Please Select a department"}) : console.log('ok')
      }
      onchangeHandler =(event) =>{
        var inputValue = {...this.state.Student}
        switch (event.target.id) {
            case "fname":
                inputValue.fname = event.target.value ;
                break;
            case "lname":
                inputValue.lname = event.target.value ;
                break;
            case "roll":
                inputValue.roll = event.target.value ;
                if(isNaN(inputValue.roll)){
                    this.setState({error : true,
                    errorText : "* Roll Number must contain numbers only"})
                }else {
                    this.setState({error : false})
                }
                break;
            case "address":
                inputValue.address = event.target.value ;
                break;
            case "city":
                inputValue.city = event.target.value ;
                break;
            case "state":
                inputValue.state = event.target.value ;
                break;
            case "phno":
                inputValue.phno = event.target.value ;
                if(isNaN(inputValue.phno)){
                    this.setState({error : true,
                    errorText : "* Contact Number must contain numbers only"})
                }else {
                    this.setState({error : false})
                }
                break;
            case "department":
                inputValue.department = event.target.value ;
                if(inputValue.department === "0"){
                    this.setState({error : true,
                    errorText : "* Please Select your department"})
                }else {
                    this.setState({error : false})
                }
                break;
            case "gname":
                inputValue.guardian_name = event.target.value ;
                break;
            case "gph":
                inputValue.guardian_phno = event.target.value ;
                break;
            case "relation":
                inputValue.relation = event.target.value ;
                break;
            default:
                break;
        }
        this.setState({Student : inputValue})
    }
    // onFocus = () => {
    //     const check = {...this.state.Student}
    //     Object.values(check).forEach(value => {
    //         if(value === ""){
    //             this.setState({error : true})
    //         }
    //     })
    //     console.log('focus')
    //     //this.setState({error : true}) 

    // }


    onSubmit = (event) => {                             
        const Student= {
            fname: "",
            lname: "",
            roll: "",
            address: "",
            city: "",
            state: "",
            phno: "",
            department: "",
            guardian_name: "",
            guardian_phno: "",
            relation: ""
            }
        console.log(this.state.Student);
        this.setState({Student : Student});
        this.form.reset();
        //console.log(this.state.error);
        // if (this.state.error === false) {
            
        //     this.setState({modal : "modal"});
        //     this.form.reset();
        //     this.setState({Student : Student});
        //  }
        //  else{
        //     console.log('error')
        //  }
    }
    onBlur = (event) => {
        if(event.target.value.length !== 10){
            this.setState({error : true,
                errorText : "* Contact Number must contain 10 digit"})
        }else{
            this.setState({error : false})
        }
    } 
    render() {
        return (
            <div className="modal fade" id="registerModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Student Registration</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" ref = {form => { this.form = form}}  >
                                    <Input  id="fname" for = {"fname"} type= {"text"} label = {"First Name"} placeholder="First Name" onChange={this.onchangeHandler}/>
                                    <Input  id="lname" for = {"lname"} type= {"text"} label = {"Last Name"} placeholder="Last Name" onChange={this.onchangeHandler} />
                                    <Input  id="roll" for = {"roll"} type= {"text"} label = {"Roll No"} placeholder="Roll No" onChange={this.onchangeHandler}  />
                                    <Input  id="address" for = {"address"} type= {"text"} label = {"Address"} placeholder="Address" onChange={this.onchangeHandler} />
                                    <Input  id="city" for = {"city"} type= {"text"} label = {"City"} placeholder="City" onChange={this.onchangeHandler}  />
                                    <Input  id="state" for = {"state"} type= {"text"} label = {"State"} placeholder="State" onChange={this.onchangeHandler} />
                                    <Input  id="phno" for = {"phno"} type= {"text"} label = {"Contact No"} placeholder="Contact No"  onChange={this.onchangeHandler} onBlur={this.onBlur} />
                                    <Select id="department" for = {"department"} label="Department" ref={this.onref} onChange={this.onchangeHandler} />
                                    <Input  id="gname" for = {"guardian_name"} type= {"text"} label = {"Guardian Name"} placeholder="Guardian Name" onChange={this.onchangeHandler} />
                                    <Input  id="gph" for = {"guardian_phno"} type= {"text"} label = {"Guardian Contact No"} placeholder="Guardian Contact No" onChange={this.onchangeHandler}  onBlur={this.onBlur} />
                                    <Input  id="relation" for = {"relation"} type= {"text"} label = {"Relation"} placeholder="Relation" onChange={this.onchangeHandler} />
                                    <span> {this.state.error ? this.state.errorText : null} </span>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-sm btn-info" 
                                        data-dismiss="modal"
                                        onClick={ this.onSubmit }
                                         >Register</button>
                                <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal" onClick= {() => this.form.reset() } >Close</button>
                            </div>
                        </div>
      
                    </div>
                </div>
        )
    }
}
