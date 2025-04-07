// estilos
import styles from "./style.module.css"

// componentes
import CardComponent from "../../components/CardComponent"
import { Container, Row, Col } from "react-bootstrap";

export default function ListPage() {

    const items = [
        {
            id: 1,
            image: "https://via.placeholder.com/250x180",
            name: "Personagem 1",
            universe: "Universo A",
            media: "Mídia X",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/250x180",
            name: "Personagem 2",
            universe: "Universo B",
            media: "Mídia Y",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/250x180",
            name: "Personagem 3",
            universe: "Universo C",
            media: "Mídia Z",
        },
        
    ];

    const handleDetails = (id) => {
        console.log("Detalhes do personagem", id);
        // duturamente será um link para a prox pág
    };

    return (
        <>
            <main>
                <section className={styles.section1}>
                    <Container>
                        <Col>
                        <div className={styles.container}>
                            <h1 className={styles.title}>Lista Geral</h1>
                            <h5 className={styles.subtile}>Consulte todos os personagens existentes</h5>
                        </div>

                        <div className={styles.search_bar}>

                        </div>
                        </Col>
                    </Container>
                </section>

                <section className={styles.section2}>
                    <Container>
                        <Row>
                            {items.map((item) => (
                                <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                                    <CardComponent
                                        image={item.image}
                                        name={item.name}
                                        universe={item.universe}
                                        media={item.media}
                                        onDetails={() => handleDetails(item.id)}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}