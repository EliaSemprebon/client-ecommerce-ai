import React from 'react';

function CaroselloProdotti({prodotti}) {
    
    if(prodotti.length > 0) return (
        <div className='container-lista-prodotti'>
            <div className='lista-prodotti'>
                {prodotti.map((prod, index) => (
                    <div 
                        key={index}
                        className='card-prodotto'
                    >
                        <div className='zona-immagini-card-prodotto'>
                            <img className='img-card-prodotto' src='https://sandroferrone.it/2528400-home_default/cappotto-diagonale-touch.jpg' alt='' />
                        </div>
                        <div className='corpo-card-prodotto'>
                            <div className='zona-nome-prodotto'>
                                <span className='nome-prodotto'>{prod.name}</span>
                                <span className='descrizione-prodotto'>{prod.description}</span>
                            </div>
                            <div className='zona-prezzo'>
                                <span className='prezzo-prodotto'>{parseFloat(prod.price).toFixed(2)}€</span>
                                <button
                                    onClick={() => null}
                                    className='bottone-card-prodotto'
                                    style={{border:'1px solid #4994F8', fontWeight:'bold', 
                                        backgroundColor:'#4994F8', color:'white'
                                    }}
                                >Vedi</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CaroselloProdotti;