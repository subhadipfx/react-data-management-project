import React, { Component } from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css"
import './Records.css'
import {Modal} from 'react-bootstrap'
import Input from '../../Utils/Input'
import Select from '../../Utils/Select'

const Logout = () => {
    return(
        <nav>
            <button className="btn btn-outline-danger btn-sm" 
            onClick = {() => {
                console.log("Logout")
                }}
            >Logout</button>
        </nav>
    )
}

const EditForm = () => {
    return (
              <form className="form-horizontal card">
                  <Input label="First Name" type ="text" id="fname" placeholder="First Name" />
                  <Input label="Last Name" type ="text" id="lname" placeholder="Last Name"  />
                  <Input label="Roll No" type ="text" id="roll" placeholder="Roll Number" />
                  <Input label="Address" type ="text" id="address" placeholder="Address"  />
                  <Input label="City" type ="text" id="city" placeholder="City"  />
                  <Input label="State" type ="text" id="state" placeholder="State"  />
                  <Input label="Contact No" type ="text" id="phno" placeholder="Contact Number"  />
                  <Select label="Department" id="department" />
                  <Input label="Guardian Name" type ="text" id="guardian_name" placeholder="Guardian Name"  />
                  <Input label="Guardian Contact No" type ="text" id="guardian_phno" placeholder="Contact Number"  />
                  <Input label="Relation with Guardian" type ="text" id="relation" placeholder="Relation"  />
              </form>
    );
  };
class Records extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            alertBar: true,
            alert : false,
            action : false,
            showModal: false
        }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url, {
            method: "GET"
        }).then(reponse => reponse.json()).then(posts => {
            this.setState({posts : posts})
        })
    }

    onDeleteRow = (id) => {
        this.setState({
            alert: true,
            action: false,
            alertBar: true
        });
        const index = this.state.posts.findIndex(post => {
            return post.id === id
        })
        console.log(index)
    };
    onEditRow = (id) => {
        this.setState({
            alert: true,
            action: true,
            alertBar:true
        });
        const index = this.state.posts.findIndex(post => {
            return post.id === id
        })
        console.log(index)
        this.closeModal()
    };

    alertBarDisplay = () => {
        return (
            <button type="button" className="close" aria-label="Close"
                onClick = {() => {
                    this.setState({alertBar : false})
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
        );
        
    }
    onDeleteAlert = (props) => {
        return(
            <div className="alert alert-danger" role="alert">
                Row Deleted: ID = {props.id}
                <this.alertBarDisplay />
            </div>
            
        )
    }
    
    onEditAlert = (props) => {
        return(
            <div className="alert alert-success" role="alert">
                Row Edited: ID = {props.id}
                <this.alertBarDisplay />
            </div>
        )
    }
    onFetchedAlert = () => {
        return(
            <div className="alert alert-primary" role="alert">
                Entries Fetched
                <this.alertBarDisplay />
            </div>
        )
    }
    
    onAlert = (props) => {
        return(
            this.state.action?<this.onEditAlert />:<this.onDeleteAlert />
        )
    }
    onAlertBar = () => {
        return(
            this.state.alert?<this.onAlert />:<this.onFetchedAlert/>
        )
    }
    closeModal = () => this.setState({ showModal: false })
 
    openModal = () => {
        this.setState({ showModal: true });
    }

    student = null;
    render() {
        const columns = [
            {
                Header: "User ID",
                accessor: "userId",
                style: {
                    textAlign: "right"
                },
                width : 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "ID",
                accessor: "id",
                style: {
                    textAlign: "right"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: "Title",
                accessor: "title",
                sortable: false,
                filterable: false
            },
            {
                Header: "Post",
                accessor: "body",
                sortable: false,
                filterable: false
            },
            {
                Header: "Actions",
                Cell: props => {
                    return(
                    <div>
                        <button type="button"  
                                onClick={this.openModal} 
                                className="btn btn-outline-success btn-sm">
                            Edit</button>
                        <Modal 
                            show={this.state.showModal} 
                            onHide={this.closeModal}
                            size="lg"
                            animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Student Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EditForm />
                            </Modal.Body>
                            <Modal.Footer>
                                <button 
                                    type="button"  
                                    onClick={this.onEditRow.bind(props.original.id)} 
                                    className="btn btn-success btn-sm">Edit
                                </button>
                                <button 
                                    type="button"  
                                    onClick={this.closeModal} 
                                    className="btn btn-danger btn-sm">Close
                                </button>
                            </Modal.Footer>
                        </Modal>
                        <button className="btn btn-outline-danger btn-sm"
                            onClick = {() => {
                                this.onDeleteRow(props.original.id)
                            }}>DELETE
                        </button>
                    </div>
                    )
                },
                width : 300,
                maxWidth: 300,
                minWidth: 300,
                sortable: false,
                filterable: false
            }
        ]
        return (
            <div>
            {this.state.alertBar?<this.onAlertBar />:null}
            <ReactTable 
                columns = {columns}
                data = {this.state.posts}
                noDataText={"Please Wait..."}
                showPageSizeOptions = {false}
                defultPageSize = {15}
                minRows = {0}
            />
            </div>
        )
    }
}
const Layout = () => {
    return(
        <div>
        <Logout />
        <Records />
        </div>
    )
}

export default Layout;
