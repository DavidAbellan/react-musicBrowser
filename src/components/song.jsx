import React from 'react'
function set_card(props) {
    return (
         <div className="card">
            <img className="card-img-top" src={props.album.cover} alt="Card image cap"/>
                <div className="card-body">
                   <h5 className="card-title">{props.title}</h5>
                   <p className="card-text"> {props.album.title}</p>
               </div>
                   <ul className="list-group list-group-flush">
                       <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
               <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
               </div>
             </div>  
        


    )
}
export default set_card;