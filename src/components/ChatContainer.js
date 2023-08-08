import React, {useState, useEffect, useRef, useCallback} from 'react';
import { create } from "apisauce";

import { API_URL } from "../config";

import Loading from './Loading';
import HeaderChat from './HeaderChat';
import FooterChat from './FooterChat';
import ChatMessage from './ChatMessage';

function ChatContainer({closeChat}) {

    const scrollRef = useRef()

    const [prodotti, setProdotti] = useState([])
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

    const filtraMessaggi = useCallback(() => {
        return messaggi.filter((msg) => {
            if(msg.role == 'user') return true;
            if(msg.role == 'function') return false;
            if(msg.role == 'assistant') {
                if(msg.content?.length > 0) return true;
                return false;
            }
            return false;
        })
    }, [messaggi])

    const reloadChat = () => {
        if(altro.loading) return
        setMessaggi([])
        setAltro({...altro, loading:true, errore:null})
        setTimeout(() => {
            setAltro({...altro, loading:false, errore:null})
        }, 300);
    }

    const inviaMessaggio = async(value) => {
        //controllo loading
        if(!value?.length) return
        if(altro.loading) return
        setAltro({...altro, errore:null, loading:true})
        //preparo i messaggi
        const listMsg = Array.from(messaggi)
        listMsg.push({role:'user', content:value})
        const sendData = {messages: listMsg}
        messaggi.push({role:'user', content:value})
        //invio richiesta di messaggio
        const apiClient = create ({baseUrl: ""});
        const response = await apiClient.post(API_URL + '/message', sendData);
        if(!response.ok) {
            console.log(response.data);
            return setAltro({
                ...altro, loading:false, 
                errore:'Stiamo ricevendo troppe richieste. Riprova tra un minuto.'
            })
        }
        //confermo il messaggio
        setMessaggi(response.data.messages)
        setProdotti(response.data.products)
        setAltro({...altro, loading:false, errore:null})
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
                {filtraMessaggi().map((msg, index) => (
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
                inviaMessaggio={inviaMessaggio}
            ></FooterChat>
        </div>
    );
}

export default ChatContainer;