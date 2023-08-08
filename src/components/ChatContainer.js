import React, {useState, useEffect, useRef} from 'react';

import HeaderChat from './HeaderChat';
import FooterChat from './FooterChat';

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