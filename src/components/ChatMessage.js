import React from 'react';

function ChatMessage({message}) {

    if(message.role == 'user') return (
        <div className='chat-message-user-container'>
            <div
                className='chat-message-user'
                style={{color:'black', backgroundColor:'#dcdcdc'}}
            >
                <span dangerouslySetInnerHTML={{__html: message.content}}></span>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <span 
                className='nome-chatbot'
                style={{color:'black'}}
             >Sucuku.com</span>
            <div className='chat-message-container'>
                <div
                    className='chat-message'
                    style={{color:'black', backgroundColor:'#dcdcdc'}}
                >
                    <style>
                        {`.chat-message a {
                            color: {colore} !important;
                        }`.replace('{colore}', '#4994F8')}
                    </style>
                    <span dangerouslySetInnerHTML={{__html: message.content}}></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatMessage;