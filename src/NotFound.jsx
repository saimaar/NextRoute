import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header className="not-found-header">Sorry but I think you got lost.</Header>
                <Image className="not-found-image" src="https://i.pinimg.com/originals/91/80/35/918035c2677b6da570cb21c8e625a987.jpg" alt="traveling meme"/>
            </div>
        );
    }
}

export default NotFound;