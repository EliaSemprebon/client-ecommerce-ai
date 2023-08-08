import React from 'react';

function CancelIcon({fill}) {
    return (
        <svg 
            width='20px' height='20px' fill={fill} id="Layer_2" 
            data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        >
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
                <path 
                    d="M4580 4789 c-14 -5 -474 -458 -1022 -1007 l-998 -997 -997 997
                        c-1085 1084 -1016 1021 -1110 1003 -49 -9 -109 -69 -118 -118 -18 -94 -81 -25
                        1003 -1109 l997 -998 -1002 -1002 c-1087 -1089 -1026 -1021 -1009 -1114 9 -47
                        73 -111 120 -120 93 -17 25 -78 1113 1009 l1003 1002 1002 -1002 c1090 -1089
                        1021 -1026 1115 -1008 49 9 109 69 118 118 18 94 81 25 -1008 1114 l-1002
                        1003 1002 1002 c1086 1087 1026 1021 1009 1113 -17 91 -127 149 -216 114z"
                />
            </g>
        </svg>
    );
}

export default CancelIcon;