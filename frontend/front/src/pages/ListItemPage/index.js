import styles from "./style.module.css"

export default function ListPage() {
    return (
        <>
            <main>
                <section className={styles.section1}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Lista Geral</h1>
                        <h5 className={styles.subtile}>Consulte todos os personagens existentes</h5>
                    </div>

                    <div className={styles.search_bar}>
                        
                    </div>

                </section>
                <section className={styles.section2}>

                </section>
            </main>
        </>
    )
}