import React, { useEffect } from 'react';

import CardProdotto from './CardProdotto';

function CaroselloProdotti({prodotti}) {

    useEffect(() => {
        const container = document.getElementsByClassName('lista-prodotti')[0];
        if(!container) return
        let isMouseDown = false, startX, scrollLeft;
        container.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        container.addEventListener('mouseleave', () => {isMouseDown = false;});
        container.addEventListener('mouseup', () => {isMouseDown = false;});
        container.addEventListener('mousemove', (e) => {
            if(!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; //speed
            container.scrollLeft = scrollLeft - walk;
        });
    }, [prodotti])
    
    if(prodotti.length > 0) return (
        <div className='container-lista-prodotti'>
            <div className='lista-prodotti'>
                {prodotti.map((prod, index) => (
                    <CardProdotto
                        key={index}
                        index={index}
                        prod={prod}
                    ></CardProdotto>
                ))}
            </div>
        </div>
    );
}

export default CaroselloProdotti;