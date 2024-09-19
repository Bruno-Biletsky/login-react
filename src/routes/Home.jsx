import "../css/loja.css"
import produto1 from "../assets/produto (1).jpg"
import produto2 from "../assets/produto (2).jpg"
import produto3 from "../assets/produto (3).jpg"


const Home=()=>{
    
    return(
        <>
        <header>
            <h1>Loja City</h1>
        </header>
        <main>
            <article className="produto-grid">
                <section className="produto-item span-row-2">
                    <img src={produto1} alt="produto1" id="image"/>
                    <div>
                        <h3>Produto-1</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={produto2} alt="Produto-2" id="image"/>
                    <div>
                        <h3>Produto-2</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={produto3} alt="Produto-3" id="image"/>
                    <div>
                        <h3>Produto-3</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                 <section className="produto-item span-row-2">
                    <img src={produto2} alt="Produto-4" id="image"/>
                    <div>
                        <h3>Produto-4</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item span-row-2 span-col-2">
                    <img src={produto1} alt="Produto-5" id="image"/>
                    <div>
                        <h3>Produto-5</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>                
                
                <section className="produto-item">
                    <img src={produto3} alt="Produto-6" id="image"/>
                    <div>
                        <h3>Produto-6</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section> 

                <section className="produto-item">
                    <img src={produto2} alt="Produto-7" id="image"/>
                    <div>
                        <h3>Produto-7</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={produto1} alt="Produto-8" id="image"/>
                    <div>
                        <h3>Produto-8</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src={produto3} alt="Produto-9" id="image"/>
                    <div>
                        <h3>Produto-9</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section> 

                <section className="produto-item">
                    <img src={produto2} alt="Produto-10" id="image"/>
                    <div>
                        <h3>Produto-10</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>  

                <section className="produto-item">
                    <img src={produto1} alt="Produto-11" id="image"/>
                    <div>
                        <h3>Produto-11</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                 {/* ESTILO ENRICO DE SER 
                const Home=()=>{
                    let count = 0
                    const Template=(props)=>{
                        count+=1/2
                        return(<>
                            <section className="produto-item">
                                <img alt={`Produto-${count}`} id="image" src={props.imagem}/>
                                <div>
                                    <h3>Produto-{count}</h3>
                                    <p>R${props.preco}</p>
                                </div>
                            </section>
                        </>)
                    }
                
                    return(<>
                        <header>
                            <h1>Loja City</h1>
                        </header>
                        <main>
                            <article className="produto-grid">
                            CHAMAR ABAIXO QUANTOS QUISER
                                <Template preco="120" imagem={Imagem1}/>
                                <Template preco="1330" imagem={Imagem3}/>
                                <Template preco="1440" imagem={Imagem4}/>
                                <Template preco="1990" imagem={Imagem5}/>
                            </article>
                        </main>
                    </>)
                }
                export default Home
*/}
            </article>
        </main>
        </>
    )
}

export default Home