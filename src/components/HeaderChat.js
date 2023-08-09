import React from 'react';

import CancelIcon from './CancelIcon';
import ReloadIcon from './ReloadIcon';
import EcommerceIcon from './EcommerceIcon';

function HeaderChat({reloadChat, closeChat}) {
    
    return (
        <div 
            className='header-chat'
            style={{backgroundColor:'#4994F8'}}
        >
            <div className='zona-titolo-header'>
                <EcommerceIcon width={'28px'} height={'28px'} fill={'white'} />
                <span 
                    className='titolo-chat'
                    style={{marginLeft:'8px', color:'white'}}
                >Donnashop.it</span>
            </div>

            <div className='bottoni-header'>
                <button 
                    className='header-button'
                    style={{marginRight:'12px'}}
                    onClick={() => reloadChat()}
                >
                    <ReloadIcon fill={'white'} />
                </button>
                <button 
                    className='header-button'
                    onClick={() => closeChat()}
                >
                    <CancelIcon fill={'white'} />
                </button>
            </div>
        </div>
    );
}

export default HeaderChat;