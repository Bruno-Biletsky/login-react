import "../css/loja.css"
const Home=()=>{
    return(
        <>
        <header>
            <h1>Loja City</h1>
        </header>
        <main>
            <article className="produto-grid">
                <section className="produto-item">
                    <img alt="produto1" id="image"/>
                    <div>
                        <h3>Produto-1</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img alt="Produto-2" id="image"/>
                    <div>
                        <h3></h3>
                    </div>
                </section>    
                

                
            </article>
        </main>
        </>
    )
}

export default Home