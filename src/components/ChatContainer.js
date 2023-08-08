import React, {useState, useEffect, useRef} from 'react';

import Loading from './Loading';
import HeaderChat from './HeaderChat';
import FooterChat from './FooterChat';
import ChatMessage from './ChatMessage';

function ChatContainer({closeChat}) {

    const scrollRef = useRef()

    const [messaggi, setMessaggi] = useState([])
    const [altro, setAltro] = useState({errore:null, loading:false})

    useEffect(() => {
        const aggScroll = () => {
            scrollRef?.current?.scrollIntoView({
                behavior:"smooth", position:'end', block:'nearest', top:'20px'
            });
        }
        aggScroll()
    }, [altro.loading, messaggi.length, scrollRef])

    const reloadChat = () => {
        if(altro.loading) return
        setMessaggi([])
        setAltro({...altro, loading:true, errore:null})
        setTimeout(() => {
            setAltro({...altro, loading:false, errore:null})
        }, 300);
    }

    return (
        <div style={{backgroundColor:'white',
            display:'flex', flexDirection:'column',
            width:'100%', height:'100%', p:0, m:0
        }} onClick={(e) => e.stopPropagation()}>
            <HeaderChat
                reloadChat={reloadChat}
                closeChat={closeChat}
            ></HeaderChat>

            <div 
                className='chat-container'
                style={{backgroundColor:'white'}}
            >
                <ChatMessage
                    message={{
                        role:'assistant',
                        content:'👋 Ciao! Sono l\'assistente virtuale di Sucuku.com, come posso aiutarti?'
                    }}
                ></ChatMessage>
                {messaggi.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        message={msg}
                    ></ChatMessage>
                ))}
                {altro.loading &&
                    <div className='loading-container'>
                        <Loading width={50} height={50} />
                    </div>
                }
                {altro.errore && <div className='container-errore-chat'>
                    <div className='zona-errore-chat'>
                        <span
                            style={{color:'black'}}
                            className='testo-errore-chat'
                        >{altro.errore}</span>
                    </div>
                </div>}
                <div ref={scrollRef} />
            </div>

            <FooterChat
                disabled={altro.loading}
                inviaMessaggio={() => null}
            ></FooterChat>
        </div>
    );
}

export default ChatContainer;