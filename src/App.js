import "./App.css";
import React, { useState, useEffect } from 'react';

import CancelIcon from './components/CancelIcon';
import EcommerceIcon from './components/EcommerceIcon';
import ChatContainer from "./components/ChatContainer";

function App() {

    const [cont, setCont] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
		const aggOpen = () => {
			const chat = window.document.getElementById('chat-element')
			if(!chat) return false
			if(!chat.style.display || chat.style.display != 'flex') {
				return setIsOpen(false)
			} else {
				return setIsOpen(true)
			}
		}
		aggOpen()
	}, [cont])

    const openChat = () => {
		const chat = window.document.getElementById('chat-element')
		const contorno = window.document.getElementById('zona-contorno-element')
		chat.style.display = 'flex'
		contorno.style.display = 'flex'
		setCont(cont + 1)
	}

	const closeChat = () => {
		const chat = window.document.getElementById('chat-element')
		const contorno = window.document.getElementById('zona-contorno-element')
		chat.style.display = 'none'
		contorno.style.display = 'none'
		setCont(cont + 1)
	}

	const switchChat = () => {
		const chat = window.document.getElementById('chat-element')
		if(chat.style.display == 'flex') closeChat()
		else openChat()
	}

	return (
		<div className="ecommerce-ai-chat-widget">
			<div 
				className="zona-contorno" 
				id="zona-contorno-element"
				onClick={() => closeChat()}
			/>
            
            <div
				id='chat-button-element'
				className="chat-button"
				style={{backgroundColor:'#4994F8', right:'30px'}}
				onClick={() => switchChat()}
                onMouseEnter={() => document.getElementById('chat-button-element').style.transform = 'scale(1.10)'}
				onMouseLeave={() => document.getElementById('chat-button-element').style.transform = 'scale(1)'}
			>
                <div className="chat-button-icon">
				    {!isOpen && <EcommerceIcon width={'38px'} height={'38px'} fill={'white'} />}
                    {isOpen && <CancelIcon fill={'white'} />}
                </div>
			</div>

            <div className='chat' id='chat-element' style={{right:'30px'}}>
				<ChatContainer
					closeChat={closeChat}
				></ChatContainer>
			</div>
		</div>
	);
}

export default App;