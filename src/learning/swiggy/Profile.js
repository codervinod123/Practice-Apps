import React from "react";
class Profile extends React.Component{

 
  constructor(props){
    super(props);
    this.state={
      count:1
    }
}

  render(){
     
    return(
      <>
        <h1>hello from classbase componnent side</h1>
        <h1>name is {this.props.name}</h1>
        <h1>the value of the count is : {this.state.count}</h1>

        <button style={{border:"1px solid red", background:"blue"}} onClick={()=>{
              this.setState({
                count:this.state.count+1,
              })
        }}>
               ChangeCount
       </button>
      </>
    )
  }
}

export default Profile;