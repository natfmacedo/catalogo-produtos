import { useState, useEffect, useRef } from "react";
import ProdutoCard from "../components/ProdutoCard";
import SkeletonCard from '../components/SkeletonCard';
import NovoItemCard from '../components/NovoItemCard';

function CatalogPage() {

    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: '',
        linkImagem: '',
        preco: '',
        descricao: ''
    });
    const [trigger, setTrigger] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const [sucessoCadastro, setSucessoCadastro] = useState(false);
    const [focusAtivo, setFocusAtivo] = useState(false);
    const ultimoItemRef = useRef(null);

    // Simulação do carregamento automático dos dados da lista e após o botão 'Conhecer produtos' ser clicado
    useEffect(() => {
        setCarregando(true);

        const timer = setTimeout(() => {
        setProdutos([
            { 
            id: 1, 
            nome:"Caneta esferográfica azul",
            linkImagem: "https://i.postimg.cc/Dw03MN2x/alexas-fotos-ballpoint-pen-1743869-640.jpg", 
            preco: 1.50, 
            descricao: "Caneta esferográfica ponta média 1.0mm com tinta de secagem rápida e escrita suave, possui corpo transparente. Pacote com 1 unidade."
            },
            { 
            id: 2, 
            nome:"Lápis grafite HB",
            linkImagem: "https://i.postimg.cc/xCBNq2k5/roonznl-pencil-6295120-640.jpg", 
            preco: 0.80, 
            descricao: "Lápis grafite n°2 com grafite de alta qualidade, ideal para escrita e desenho. Possui corpo hexagonal na cor azul com acabamento em madeira. Pacote com 1 unidade."
            },
            { 
            id: 3, 
            nome:"Marca-texto pastel",
            linkImagem: "https://i.postimg.cc/9MHrjBv2/hans-glasses-272401-640.jpg", 
            preco: 3.20, 
            descricao: "Marca-texto em cores pastel suaves com ponta chanfrada 1-5mm, possui tinta à base de água, não transparece no verso. Disponível nas cores: rosa, amarelo, verde e azul. Pacote com 1 unidade."
            },
            { 
            id: 4, 
            nome:"Caneta gel 0.7mm",
            linkImagem: "https://i.postimg.cc/cJHVLyGF/frantisek-krejci-pencil-1403820-640.jpg", 
            preco: 4.50, 
            descricao: "Caneta gel de alta performance com escrita ultra suave e precisa, possui tinta pigmentada resistente à água e grip emborrachado para conforto. Disponível nas cores: roxo, laranja, amarelo, rosa, verde, vermelho e azul. Pacote com 1 unidade."
            },
            { 
            id: 5, 
            nome:"Tesoura escolar 13cm",
            linkImagem: "https://i.postimg.cc/FzBYwQvz/nuzree-scissors-205835-640.jpg", 
            preco: 6.50, 
            descricao: "Tesoura com lâminas em aço inox, cabo ergonômico laranjado e ponta arredondada para segurança. Com corte preciso, é ideal para uso escolar e artesanato. Pacote com 1 unidade."
            },
            { 
            id: 6, 
            nome:"Cola bastão 20g",
            linkImagem: "https://i.postimg.cc/mDqRsZcZ/counselling-glue-stick-574016-640.jpg", 
            preco: 3.80, 
            descricao: "Cola em bastão não tóxica e lavável. Possui secagem rápida e não enruga o papel, sendo ideal para colagens escolares e trabalhos manuais. Pacote com 1 unidade."
            },
            { 
            id: 7, 
            nome:"Grampeador médio",
            linkImagem: "https://i.postimg.cc/TYcdy6Fm/pix1861-stapler-637555-640.jpg", 
            preco: 15.90, 
            descricao: "Grampeador metálico com grampos 26/6 e capacidade de grampear até 25 folhas simultaneamente. Possui base emborrachada antiderrapante e mecanismo resistente. Pacote com 1 unidade."
            },
            { 
            id: 8, 
            nome:"Régua escolar 30cm",
            linkImagem: "https://i.postimg.cc/x8sBVn6N/pexels-pnw-prod-8250945.jpg", 
            preco: 2.30, 
            descricao: "Régua de plástico transparente com graduação em centímetros e milímetros, possui bordas retas e precisas, sendo ideal para uso escolar e desenho técnico. Pacote com 1 unidade."
            },
        ]);
        setCarregando(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [trigger]);
    
    // Função que identifica de uma vez só as alterações em todos os inputs
    const handleChange = (e) => {
        const { name, value } = e.target;

        setNovoProduto((prevData) => ({
        ...prevData,
        [name]: value // Atualização dinâmica dos inputs
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(novoProduto.nome.trim() === '' || novoProduto.linkImagem.trim() === '' || novoProduto.preco.trim() === '' || novoProduto.descricao.trim() === '') return;
        
        const novoId = produtos[produtos.length - 1].id + 1;

        const novo = { 
        id: novoId,
        nome: novoProduto.nome.trim(), 
        linkImagem: novoProduto.linkImagem.trim(),
        preco: Number(novoProduto.preco.trim()), 
        descricao: novoProduto.descricao.trim() 
        };
        setProdutos([...produtos, novo]);
        setNovoProduto({
        nome: '',
        linkImagem: '',
        preco: '',
        descricao: ''
        });
        setSucessoCadastro(true);
    };

    const handleVisualizar = () => {
        setFocusAtivo(true);
        if (ultimoItemRef.current) {
        ultimoItemRef.current.scrollIntoView({ behavior: 'smooth' });
        ultimoItemRef.current.focus();
        }
    }


    return (
        <>
        <header className='container-fluid d-flex flex-column align-items-center justify-content-center bg-image shadow'>
            <div className='p-4 w-50 bg-body text-center'>
            <h1 className='fs-4 fw-medium text-primary'>Catálogo de <span className='d-block font-secondary fs-1'>itens de papelaria</span></h1>
            <a className='btn btn-outline-primary mt-2' href="#produtos" onClick={() => setTrigger((t) => t + 1)}>Conhecer produtos</a>
            </div>
        </header>
        <main>
            <section id='cadastro' className='container-fluid p-5'>
            <h2 className='fw-semibold text-center text-primary'>Cadastro</h2>
            <div className='row justify-content-center mt-4'>
                <form onSubmit={handleSubmit} className='col-lg-6 p-4 bg-white rounded-4 shadow'>
                <div className='mb-3'>
                    <label htmlFor="nome" className='form-label fw-medium'>Nome:</label>
                    <input type="text" className='form-control bg-white' name="nome" id="nome" placeholder="Insira o nome do produto" value={novoProduto.nome} onChange={handleChange} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="linkImagem" className='form-label fw-medium'>Link da imagem:</label>
                    <input type="url" className='form-control bg-white' name="linkImagem" id="linkImagem" placeholder="Insira o link da imagem do produto" value={novoProduto.linkImagem} onChange={handleChange} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="preco" className='form-label fw-medium'>Preço:</label>
                    <input type="number" className='form-control bg-white' name="preco" id="preco" placeholder="Insira o preço do produto" value={novoProduto.preco} onChange={handleChange} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="descricao" className='form-label fw-medium'>Descrição:</label>
                    <textarea id="descricao" className='form-control bg-white' name="descricao" placeholder="Insira a descrição do produto" value={novoProduto.descricao} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className='btn btn-primary w-100'>Adicionar</button>
                {sucessoCadastro && (<div className='alert alert-success alert-dismissible mt-3 text-center' role='alert'>
                Cadastro realizado com sucesso!
                <button 
                    type="button"
                    className='btn btn-link'
                    onClick={handleVisualizar}>Visualizar</button>
                <button
                    type='button'
                    className='btn btn-link'
                    onClick={() => setSucessoCadastro(false)}>Fechar</button>
                </div>)}
                </form>
            </div>
            </section>
            <section  id='produtos' className='container-fluid p-5 bg-secondary'>
            <h2 className='fw-semibold text-center text-primary'>Produtos</h2>
            {carregando && <p className='fw-semibold text-center'>Carregando...</p>}
            <ul className='row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center g-4 ps-0'>
                {carregando && Array.from({ length: 8 }).map((_, index) => (<SkeletonCard key={index} />))}
            </ul>
            <ul className='row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center g-4 ps-0 mt-2'>
                {!carregando && produtos.map((produto, index) => { 
                const ultimoAdicionado = index === produtos.length - 1;
                return (
                    <ProdutoCard 
                    key={produto.id}  
                    ref={ultimoAdicionado ? ultimoItemRef : null}
                    {...produto} 
                    focusAtivo={ultimoAdicionado && focusAtivo}
                    setFocusAtivo={setFocusAtivo}
                    />
                );
                })}
                <NovoItemCard />
            </ul>
            </section>
        </main>
        <footer className='container-fluid p-3 bg-body-secondary text-primary'>
            <p className='mt-3 text-center'>&copy; 2026 Catálogo de itens de papelaria - Todos os direitos reservados.</p>
        </footer>
        </>
    )
    
}

export default CatalogPage;