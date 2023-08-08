import React from 'react';

import closeIcon from '../images/close.png';
import reloadIcon from '../images/reload.png';
import ecommerceIcon from '../images/ecommerce.png';

function HeaderChat({reloadChat, closeChat}) {
    
    return (
        <div 
            className='header-chat'
            style={{backgroundColor:'#4994F8'}}
        >
            <div className='zona-titolo-header'>
                <img src={ecommerceIcon} alt='' className='logo-header' />
                <span 
                    className='titolo-chat'
                    style={{marginLeft:'8px', color:'black'}}
                >Sucuku.com</span>
            </div>

            <div className='bottoni-header'>
                <button 
                    className='header-button'
                    style={{marginRight:'12px'}}
                    onClick={() => reloadChat()}
                >
                    <img className="icona-bottone-header-2" alt='' src={reloadIcon} />
                </button>
                <button 
                    className='header-button'
                    onClick={() => closeChat()}
                >
                    <img className="icona-bottone-header" alt='' src={closeIcon} />
                </button>
            </div>
        </div>
    );
}

export default HeaderChat;