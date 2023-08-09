import React, { useEffect } from 'react';

import PrevIcon from './PrevIcon';
import NextIcon from './NextIcon';

function CardProdotto({prod, index}) {

    useEffect(() => {
        // Ottieni gli elementi del DOM
        const carousel = document.getElementById('carousel-immagini-prodotto-' + index);
        const container = document.getElementById('zona-immagini-card-prodotto-' + index);
        const images = carousel.querySelectorAll('li');
        const prevButton = container?.querySelector('.prev-button');
        const nextButton = container?.querySelector('.next-button');
        if(!carousel || !container || !images || !prevButton || !nextButton) return
        // Imposta l'indice iniziale della slide
        let currentIndex = 0;
        // Aggiungi il gestore di eventi per la freccia "precedente"
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateCarousel();
        });
        // Aggiungi il gestore di eventi per la freccia "successivo"
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
        // Funzione per aggiornare il carosello con l'immagine corrente
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [])
    
    return (
        <div className='card-prodotto'>
            <div
                className='zona-immagini-card-prodotto'
                id={'zona-immagini-card-prodotto-' + index}
            >   
                {/* {prod.images.length == 0 &&
                    <img className='img-card-prodotto' src={prod.images[0]} alt='' />
                } */}
                <ul className="carousel-immagini-prodotto" id={'carousel-immagini-prodotto-' + index}>
                    {prod.images.map((img, index) => (
                        <li key={index}><img src={img} alt="" /></li>
                    ))}
                </ul>
                {prod.images.length > 1 && <>
                    <button className="prev-button" style={{left:'8px'}}>
                        <PrevIcon fill={'#4994F8'} />
                    </button>
                    <button className="next-button" style={{right:'8px'}}>
                        <NextIcon fill={'#4994F8'} />
                    </button>
                </>}
                {prod.reductionPercent > 0 &&
                    <span className='sconto-card-prodotto'>{prod.reductionPercent}%</span>
                }
                {prod.reductionAmount > 0 &&
                    <span className='sconto-card-prodotto'>-{prod.reductionAmount}€</span>
                }
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
    );
}

export default CardProdotto;