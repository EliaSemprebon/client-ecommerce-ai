import React from 'react';

function ChatMessage({message}) {

    const codificaLinks = (content) => {
        let messaggio = content.replace(/\[(.*?)\]\((.*?)\)/g, '<a target="_blank" href="$2">$1</a>');
        const regex = /<a[^>]*>(.*?)<\/a>|(?<!<a[^>]*?)(https?:\/\/[^\s<]+)(?!<\/a>)/g;
        messaggio = messaggio.replace(regex, function(match, openTag, url, closeTag) {
            if (openTag && closeTag) {
                return match;
            } else {
                if(!url) return match;
                return "<a target=\"_blank\" href='" + url + "'>" + url + "</a>";
            }
        });
        return messaggio;
    }

    if(message.role == 'user') return (
        <div className='chat-message-user-container'>
            <div
                className='chat-message-user'
                style={{color:'white', backgroundColor:'#4994F8'}}
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
                            text-decoration: none !important;
                        }`.replace('{colore}', '#4994F8')}
                    </style>
                    <span dangerouslySetInnerHTML={{__html: codificaLinks(message.content)}}></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatMessage;