import React from 'react';
import ReactDOM from 'react-dom';

class Head extends React.Component{
    render(){
        return(
            <div>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
                </head>
            </div>
        )
    }
}

export default Head;