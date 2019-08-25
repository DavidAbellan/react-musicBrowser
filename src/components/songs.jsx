import React from 'react';
import S from './song'
class Song extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            songs : [],
        }
       this.setState({songs : props.data})
       console.log('SONGS',this.state.songs);
    }



   render(){

       if (this.state.songs === undefined) {
       return( <h1>buscando...</h1>)
       } 
       return (<div>
           
       </div> ) 
       
   }
    
    


}
export default Song;