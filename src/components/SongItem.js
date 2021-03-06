import React from 'react';

class SongItem extends React.Component {
    state={like: 0}
    
    addLike=()=>{
        this.setState({like: this.state.like+1})
    }
    render(){
        
        return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={()=>this.props.favoriteSong(this.props.favorite, this.props.id)}> {this.props.favorite ? "💚" : "♡"}</td> 
            <td onClick={this.addLike}>Likes:{this.state.like}</td>
        </tr>
    )
}
    
}

export default SongItem;