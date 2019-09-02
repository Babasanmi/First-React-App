import React,{Component} from 'react';


class Main extends Component {
  render(){


    const firstName = 'Jeremiah';
    const lastName = 'Babasanmi';
    
    return (
      <div>
  
        <h1>
            Hello {`${firstName} ${lastName}`}!
        </h1>
        <center> <p>Welcome to my First React App</p>
         <p> A daily Todo List</p> </center>
      </div>
    );
  }

  }

 

export default Main;
