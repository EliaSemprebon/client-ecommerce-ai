import React, { useEffect } from 'react';

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
                <div 
                    key={index}
                    className='card-prodotto'
                >
                    <div className='zona-immagini-card-prodotto'>
                        {prod.reductionPercent > 0 &&
                            <span className='sconto-card-prodotto'>{prod.reductionPercent}%</span>
                        }
                        {prod.reductionAmount > 0 &&
                            <span className='sconto-card-prodotto'>-{prod.reductionAmount}€</span>
                        }
                        <img className='img-card-prodotto' src='https://sandroferrone.it/2528400-home_default/cappotto-diagonale-touch.jpg' alt='' />
                    </div>
                    <div className='corpo-card-prodotto'>
                        <div className='zona-nome-prodotto'>
                            <span className='nome-prodotto'>{prod.name}</span>
                            <span className='descrizione-prodotto'>{prod.description}</span>
                        </div>
                        <div className='zona-prezzo'>
                            <span className='prezzo-prodotto'>{parseFloat(prod.price).toFixed(2)}€</span>
                            <a 
                                href={prod.url} target='_blank'
                                className='bottone-card-prodotto'
                                style={{border:'1px solid #4994F8', fontWeight:'bold', 
                                    backgroundColor:'#4994F8', color:'white', textDecoration:'none'
                                }}
                            >Vedi</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </div>
    );
}

export default CaroselloProdotti;