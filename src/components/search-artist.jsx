import React from 'react';
import axios from 'axios';
import Song from './songs';

 class artist extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             name: '',
             songs : []
            }
        this.get_artist_songs = this.get_artist_songs.bind(this);
        }
        url =  "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
        api_key = "e1302c32d4msh235d8cf46358794p1b0804jsn8c743648faad";

     async get_artist_songs(event) {
        this.setState({name: event.target.value});
        console.log('HOLALALA',this.state.songs ); 
        let sng = await axios.get (this.url + '/' + this.state.name ,{ headers : {
            'x-rapidapi-host' : 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key'  : this.api_key
            }});
        this.setState({songs:sng.data.data})  ;
       
    }

    render () {
        if(this.state.songs.lenght === 0){
        return (
            
            <div>   
            <input type='text' value={this.state.name}  onChange={this.get_artist_songs}></input>
            </div> 

         )}
         return (
            
            <div>   
            <input type='text' value={this.state.name}  onChange={this.get_artist_songs}></input>
            {this.state.songs.map(a=><h1>{a.title}</h1>)}
            </div> 

         )


        
       

}

}
export default artist;