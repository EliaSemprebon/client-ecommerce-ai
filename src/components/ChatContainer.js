import React, {useState, useEffect, useRef, useCallback} from 'react';
import { create } from "apisauce";

import { API_URL } from "../config";

import Loading from './Loading';
import HeaderChat from './HeaderChat';
import FooterChat from './FooterChat';
import ChatMessage from './ChatMessage';
import CaroselloProdotti from './CaroselloProdotti';

function ChatContainer({closeChat}) {

    const scrollRef = useRef()

    const [prodotti, setProdotti] = useState([
        {
            "name": "Gonna bi stretch",
            "code": "S18XBCRAVA",
            "externalId": "157662",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna a tubino in tessuto tecnico bistretch con elastico interno e zip a vista",
            "price": 41.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157662-gonna-bi stretch.html",
            "preferred": false,
            "created": "2023-03-14T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 5,
                    "colore": "NERO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 6,
                    "colore": "NERO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "NERO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 4,
                    "colore": "NERO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 12,
                    "colore": "FUXIA",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 11,
                    "colore": "FUXIA",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 12,
                    "colore": "FUXIA",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 6,
                    "colore": "FUXIA",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 10,
                    "colore": "CORALLO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 11,
                    "colore": "CORALLO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 9,
                    "colore": "CORALLO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 6,
                    "colore": "CORALLO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 8,
                    "colore": "PURPLE",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 7,
                    "colore": "PURPLE",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 5,
                    "colore": "PURPLE",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 4,
                    "colore": "PURPLE",
                    "taglia": "46",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna viscosa lino",
            "code": "S73XBCDATTERO",
            "externalId": "157546",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna a ruota con cinturino in vita e zip laterale",
            "price": 62.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157546-gonna-viscosa lino.html",
            "preferred": false,
            "created": "2023-03-06T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "NATURALE",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "NERO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "MILITARE",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "MILITARE",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "MILITARE",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "MILITARE",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NATURALE",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NATURALE",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 5,
                    "colore": "NATURALE",
                    "taglia": "46",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna puro lino",
            "code": "S7XBCMISTY",
            "externalId": "157734",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna lunga in puro lino con spacchi laterali elastico coperto in vita e tasca in cucitura",
            "price": 83.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157734-gonna-puro lino.html",
            "preferred": false,
            "created": "2023-03-17T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 5,
                    "colore": "DENIM",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "BIANCO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "DENIM",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "DENIM",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "DENIM",
                    "taglia": "46",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna bicolor",
            "code": "S15XBCASPERULA",
            "externalId": "157699",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna ampia in tela di cotone stampata con elastico impunturato in vita e tasche in cucitura",
            "price": 73.5,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157699-gonna-bicolor.html",
            "preferred": false,
            "created": "2023-03-17T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "S",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "M",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "L",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna tie and dye",
            "code": "S14XBCBOSCH",
            "externalId": "157664",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna lunga in popeline di cotone stampato con pieghe davanti cucite,elastico in vita e zip sul fianco",
            "price": 90.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157664-gonna-tie and dye.html",
            "preferred": false,
            "created": "2023-03-15T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "46",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna viscosa",
            "code": "S7XBCMODEL",
            "externalId": "157736",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna lunga in raso di viscosa stampata con elastico in vita e spacchi laterali",
            "price": 90.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/157736-gonna-viscosa.html",
            "preferred": false,
            "created": "2023-03-17T23:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "S",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "M",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "UNICA",
                    "taglia": "L",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna abstract",
            "code": "S32XBCMEK",
            "externalId": "155568",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna a portafoglio in satin stampato",
            "price": 72.5,
            "reductionPercent": 50,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/155568-gonna-abstract.html",
            "preferred": false,
            "created": "2022-06-24T22:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "NERO F",
                    "taglia": "S",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "NERO F",
                    "taglia": "M",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "NERO F",
                    "taglia": "L",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO F",
                    "taglia": "S",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO F",
                    "taglia": "M",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO F",
                    "taglia": "L",
                    "images": []
                }
            ]
        },
        {
            "name": "Gonna cotone cinzato",
            "code": "S14XBCBARUCH",
            "externalId": "155413",
            "brand": "SANDRO FERRONE",
            "categories": [
                "GONNA"
            ],
            "images": [],
            "description": "Gonna lunga con baschina montata a pieghe,zip invisibile sul fianco e tasche in cucitura",
            "price": 111.3,
            "reductionPercent": 30,
            "reductionAmount": 0,
            "url": "https://sandroferrone.it/gonna/155413-gonna-cotone cinzato.html",
            "preferred": false,
            "created": "2022-06-24T22:00:00.000Z",
            "variants": [
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "NERO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 6,
                    "colore": "BIANCO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 5,
                    "colore": "BIANCO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 4,
                    "colore": "BIANCO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BIANCO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BLU",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BLU",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BLU",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "BLU",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "ROSSO",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "ROSSO",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "ROSSO",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "ROSSO",
                    "taglia": "46",
                    "images": []
                },
                {
                    "quantity": 3,
                    "colore": "FUXIA",
                    "taglia": "40",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "FUXIA",
                    "taglia": "42",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "FUXIA",
                    "taglia": "44",
                    "images": []
                },
                {
                    "quantity": 0,
                    "colore": "FUXIA",
                    "taglia": "46",
                    "images": []
                }
            ]
        }
    ])
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
        setProdotti([])
        setAltro({...altro, loading:true, errore:null})
        setTimeout(() => {
            setAltro({...altro, loading:false, errore:null})
        }, 300);
    }

    const inviaMessaggio = async(value) => {
        //controllo loading
        if(!value?.length) return
        if(altro.loading) return
        setProdotti([])
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
                <CaroselloProdotti
                    prodotti={prodotti}
                ></CaroselloProdotti>
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