import React from 'react';
import axios from 'axios';
import Song from './songs';
import InfiniteScroll from 'react-infinite-scroll-component';

 class artist extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             name: '',
             songs : []
            }
        this.get_artist_songs = this.get_artist_songs.bind(this);

        }
        index = 0;
        url =  "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
        api_key = "e1302c32d4msh235d8cf46358794p1b0804jsn8c743648faad";

     async get_artist_songs(event) {
        this.setState({name: event.target.value});

        console.log('HOLALALA',this.state.songs ); 
        this.index = 0;
        let sng = await axios.get (this.url + '/' + this.state.name ,{ headers : {
            'x-rapidapi-host' : 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key'  : this.api_key
            }});
        console.log('DADTA',sng.data);    
        this.setState({songs:sng.data.data})  ;
         
       
    }
    ///hacer otra función para el scroll para next¿?
    async get_more(){
        this.index = this.index + 25;
        this.state.name = this.state.name.trim();
        let query = this.url  + this.state.name + '&index=' + this.index ;
        query.trim();
        console.log('QUERY',query);
        let sng = await axios.get (query ,{ headers : {
            'x-rapidapi-host' : 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key'  : this.api_key
            }});
        console.log('SNG',sng);    
        this.setState({songs:[...this.state.songs,...sng.data.data]})  ;
        console.log('HOLALALA222',this.state.songs ); 


    } 
  

    render () {
        return (
           
           <div>   
           <input type='text' value={this.state.name}  onChange={this.get_artist_songs}></input>
           <InfiniteScroll
             dataLength = {this.state.songs.length}
             next = {() => this.get_more()} 
             hasMore = {true}
             loader = {<p>cargando más...</p>}
             endMessage = {<p>Fín de la búsqueda</p>}>
           {this.state.songs.map(a=><h1>{a.title}</h1>)}
           </InfiniteScroll>
           </div> 

        )
       }


        
       

}


export default artist;