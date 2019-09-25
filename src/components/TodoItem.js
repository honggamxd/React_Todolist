import React, { Component } from 'react';
import './TodoItem.css'
import success from '../img/check.svg';
import check from '../img/success.svg';

class TodoItem extends Component {

    render() {
        const { item, onClick }  = this.props;
        let className = 'TodoItem';
        if( item.isComplete) {
            className += ' TodoItem-done';
        }
        let url = check;
        if(item.isComplete) {
            url = success;
        }
        return (
            <div onClick={onClick} className = {className}>
                <img src={url} width={32} height={32}/>
                <p>{this.props.item.title}</p>
            </div>
            );
    }

}

export default TodoItem;