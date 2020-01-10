import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Table.css'
const Logout = (props) => {
    return(
        <nav className="right-nav">
            <button className="btn btn-outline-danger btn-sm" 
            onClick = {props.logout}
            >Logout</button>
        </nav>
    )
}

const Search = (props) => {
    return(
        <nav className="center-nav">
            <form>
                <input className="col-sm-3 btn-sm" disabled = {props.disabled} placeholder="Search....." onChange= {props.onChangeText} />
                <select className="btn-primary btn-sm" id="inlineFormCustomSelect" onChange= {props.onChangeSelect} >
                    <option value="0" defaultValue>Search By</option>
                    <option value="1">ID</option>
                    <option value="2">User ID</option>
                </select>
                <button className="btn btn-info btn-sm" type="button" 
                    onClick = {props.onSubmit}
                    >Search</button>
            </form>
        </nav>
    )
}

 class MUITable extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            currentpost: {
                userId: -1,
                id: -1,
                title: "",
                body: ""

            },
            editIndex: -1,
            searchFlag: true,
            searchSelectVal: "",
            searchText: ""
        }
    }
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url, {
            method: "GET"
        }).then(reponse => reponse.json()).then(posts => {
            this.setState({posts : posts})
        });
    }
    onEditHandler = (id) =>{
        const index = this.state.posts.findIndex(post => {
            return post.id === id
        })
        this.setState({editIndex : index});
        this.setState({currentpost: { ...this.state.posts[index]}});
    }
    
    onDeleteHandler =(id) =>{
        this.setState({
            posts : this.state.posts.filter( post => {return post.id !== id;} )
            })
    }

    InputDiv = (props) => {
        return(
        <div>
            <label htmlFor={props.for} className="col-sm-3 control-label">{props.label}</label>
            <input type={props.type} className="from-control col-sm-6" 
                    onChange = { (event) => {
                                    this.onSubmitHandler(event,props.for)}}
                    value = {props.value} />
        </div>
        )
    }
    onSubmitHandler = (event, valfor) => {
        const edited = {...this.state.currentpost}
        const value = event.target.value
        valfor === "userId" 
            ? edited.userId = value
            : valfor === "title" 
                    ?edited.title = value 
                    : edited.body = value
        this.setState({currentpost : edited});
        console.log(this.state.currentpost)
    }
    onSaveHandler = () =>{
        const  editedPosts = [...this.state.posts]
        editedPosts[this.state.editIndex] = this.state.currentpost
        this.setState({posts : editedPosts})
    }
    ModalWindow = (props) => {
        return (
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Student Info</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <this.InputDiv for = {"userId"} type= {"text"} label = {"User ID"} value = {props.editing.userId} />
                                    <this.InputDiv for = {"title"} type= {"text"} label = {"Title"} value = {props.editing.title} />
                                    <this.InputDiv for = {"body"} type= {"text"} label = {"Body"} value = {props.editing.body} />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-success" 
                                        data-dismiss="modal"
                                        onClick = {this.onSaveHandler} >Save</button>
                                <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
      
                    </div>
                </div>
        )
    }
    onChangeSelect = (event) => {
        this.setState({searchSelectVal : event.target.value})
        event.target.value === "0" 
        ? this.setState({searchFlag:true}) : this.setState({searchFlag:false})
    }

    onChangeText = (event) => {
        const searchText = event.target.value;
        this.setState({searchText : searchText})
    }

    onSearch = () => {
       const tempPosts = [...this.state.posts]
       switch (this.state.searchSelectVal) {
           case 1:
               this.setState({posts : tempPosts.filter(post => {return post.id === this.state.searchText;}) })
               break;
            
            case 2:
                this.setState({posts : tempPosts.filter(post => {return post.userid === this.state.searchText;}) })
                break;
           default:
               break;
       }
    }
    onClickID = () => {
        //const Sorted = [...this.state.posts]
        console.log('sorted')
    }

    onClickUserID = () => {
        //const Sorted = [...this.state.posts]
    }
    render() {
        return (
                <div>
                {console.log(this.state.searchText)}
                <Search onSubmit={this.onSearch} 
                        onChangeSelect= {this.onChangeSelect} 
                        onChangeText= {this.onChangeText}   
                        disabled = { this.state.searchFlag ? "disable" : "" }/>
                <TableContainer >
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right" onClick={this.onClickID} >ID <span className="glyphicon glyphicon-align-left"></span></TableCell>
                        <TableCell align="right" onClick={this.onClickUserID} >UserID</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Body</TableCell>
                        <TableCell colSpan="2" align="center" > Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.posts.map(row => (
                        <TableRow key={row.id}>
                        <TableCell align="right">{row.id}</TableCell>
                        <TableCell align="right" component="th" scope="row">{row.userId}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.body}</TableCell>
                        <TableCell> <button type="button"  className="btn btn-outline-success btn-sm"
                                            onClick= { () => {this.onEditHandler(row.id);} } 
                                             data-toggle="modal" data-target="#myModal" >Edit</button>
                                             <this.ModalWindow editing={this.state.currentpost} /> </TableCell>
                        <TableCell> <button type="button" className="btn btn-outline-danger btn-sm" 
                                            onClick={ () => {this.onDeleteHandler(row.id)}} >DELETE</button> </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </div>
        )
    }
}

export default (props) => {
    return(
        <div>
        <Logout logout={props.logout}/>
        <MUITable />
        </div>
    )
}