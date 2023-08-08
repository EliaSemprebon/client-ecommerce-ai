import React from 'react';

import CancelIcon from './CancelIcon';
import ReloadIcon from './ReloadIcon';

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
                    <ReloadIcon fill={'black'} />
                </button>
                <button 
                    className='header-button'
                    onClick={() => closeChat()}
                >
                    <CancelIcon fill={'black'} />
                </button>
            </div>
        </div>
    );
}

export default HeaderChat;