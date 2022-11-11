import './home.css'

export default function Home() {
    return(
        <div className='home-container'>
            <h1>Sujeito Programador</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Canal no Youtube</p>
                </a>
            </section>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Grupo privado no telegram</p>
                </a>
            </section>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Treinamento Fábrica de Aplicativos</p>
                </a>
            </section>
            </main>
        </div>
    )
}