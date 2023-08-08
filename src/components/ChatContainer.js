import React, {useState} from 'react';

function ChatContainer({closeChat}) {

    const [altro, setAltro] = useState({errore:null, loading:false})

    return (
        <div style={{backgroundColor:'white',
            display:'flex', flexDirection:'column',
            width:'100%', height:'100%', p:0, m:0
        }} onClick={(e) => e.stopPropagation()}>

        </div>
    );
}

export default ChatContainer;