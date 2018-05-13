import React, { Component } from 'react';

import './App.css';

import { getcurriculums,createcurriculums,deletecurriculums} from './actions';
import { connect } from 'react-redux';

class App extends Component {
   state = {
     id:'',
     name:'',
    
   }

   componentDidmMount(){
     this.props.getcurriculums();
   }
   handleDelete = (e) => {
     const {id} = e.target;
     this.props.deletecurriculums(id);
   }
   handleChange =(e)=>{
     var name = e.target.name,
     value = e.target.value;
     this.setState({[name] : value});
   }
   handleSubmit = (e) => {
     e.preventDefault();
     const {name} = this.state;
     this.props.createcurriculums({
       name : name
     });
     this.setState({
       name : ''
     });
   }

  render() {
    const {curriculums} = this.props;
    return (
      <div>
      <h1>College of Computing</h1>
      <ol start="1">
{
curriculums.map((curriculum , index) => {
return (
                <tr >
                   <br />
                     <li>  { curriculum.name + ' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     </li>
                    <td>
                     <br />

                     <button id={curriculum.id} onClick={this.handleDelete}>delete
                       </button> 
                     </td>
                    </tr>
              )
})
}
      </ol> <h2>Add Curriculum</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          <button type="submmit">Submit</button>
        </form>

      

      </div>
    );
  }
}

const mapStatetoProps = ({ curriculums }) => {
  return { curriculums }
}

export default connect(mapStatetoProps , { getcurriculums, createcurriculums,deletecurriculums})(App);
