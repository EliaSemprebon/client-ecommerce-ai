import React, { useState } from 'react';

function FooterChat({disabled, inviaMessaggio}) {

    const [valore, setValore] = useState('')
    const [inputSel, setInputSel] = useState(false)

    const premiInvia = async() => {
        if(!valore?.length) return
        inviaMessaggio(valore)
        setTimeout(() => {
            setValore('')
        }, 10);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(!valore?.length) return null
            else premiInvia()
        } else return null
    }

    return (
        <div>
            <div 
                className='footer-zona-input'
                style={{
                    backgroundColor:'white', marginTop:'6px',
                    border:inputSel ? '1px solid #4994F8': '1px solid #e4e4e7'
                }}
            >
                <input 
                    type="text" aria-label="chat-input" required="" 
                    maxLength="650" className="footer-text-input" 
                    placeholder='Scrivi qui la tua domanda...'
                    value={valore} onChange={(e) => setValore(e.target.value)} 
                    style={{color:'black'}}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setInputSel(false)}
                    onFocus={() => setInputSel(true)}
                    autoComplete={'off'} autoCorrect={'off'}
                />
                <button
                    disabled={disabled}
                    onClick={async() => await premiInvia()}
                    className="footer-btn-invia"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={'#4994F8'} aria-hidden="true" className='icona-invia'>
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                    </svg>
                </button>
            </div>

            <div className='footer-zona-powered'>
                <p 
                    className='footer-powered-by'
                    style={{color:'#3f3f46'}}
                >powered by</p>
                <a target="_blank" className='powered-by-link' style={{display:'flex', alignItems:'center'}} href="https://supportfast.ai">
                    <img alt='' src={'https://cdn.supportfast.ai/logo-chat.png'} className='logo-powered-by' />
                    <p 
                        className='footer-powered-by powered-by-link'
                        style={{color:'#3f3f46'}}
                    >
                        support<span style={{color:'#2D5BFF'}}>fast</span>.ai
                    </p>
                </a>
            </div>
        </div>
    );
}

export default FooterChat;