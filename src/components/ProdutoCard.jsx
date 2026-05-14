import { forwardRef } from 'react';
import { formatarPreco } from '../utils/formatarPreco';

function ProdutoCard({nome, linkImagem, preco, descricao, focusAtivo, setFocusAtivo}, ref) {
    const precoFormatado = formatarPreco(preco);

    return (  
        <div className={`col ${focusAtivo ? 'card-focused' : ''}`}>
            <li ref={ref} tabIndex={-1} onBlur={() => setFocusAtivo(false)} className="card align-items-center h-100 p-4 text-center">
                <div className="card-icon d-flex align-items-center justify-content-center rounded-circle bg-body-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#420004"><path d="m306.22-701.88 115.45-149.79q11.33-14.66 26.55-21.83 15.23-7.17 31.84-7.17t31.77 7.17q15.17 7.17 26.5 21.83l115.45 149.79L829-643q24 8 37.67 27.91 13.66 19.9 13.66 43.98 0 11.11-3.19 22.2-3.18 11.08-10.47 21.24L754-367l4 170q.33 32.33-21.67 54.67-22 22.33-52.11 22.33-1.89 0-19.89-3L480-174.33l-184.19 51.28q-5.14 2.05-10.82 2.55-5.67.5-10.4.5-30.26 0-51.92-22.46Q201-164.92 202-197.67l4-170.5L93.67-528.33q-7.29-10.22-10.48-21.37Q80-560.85 80-572q0-23.67 13.45-43.24Q106.89-634.81 131-643l175.22-58.88Zm40.45 57.55-204 68 130.66 189-4.66 201.66L480-244l211.33 59.33-4.66-202.66 130.66-187-204-70L480-818 346.67-644.33Zm133.33 143Z"/></svg>
                </div>
                <div className='ratio ratio-4x3'>
                    <img src={linkImagem} className="card-img mt-3 object-fit-cover" alt="" role="presentation" />
                </div>
                <article className="card-body d-flex flex-column mt-3">
                    <h3 className="card-title fs-4 font-secondary text-primary">{nome}</h3>
                    <p className="card-text fw-medium">{precoFormatado}</p>
                    <p className="card-text flex-grow-1">{descricao}</p>
                    <a href="#" className="btn btn-outline-primary mt-auto">Ver detalhes<span className="visually-hidden">de {nome}</span></a>
                </article>
            </li>
        </div>
    )
}

export default forwardRef(ProdutoCard);