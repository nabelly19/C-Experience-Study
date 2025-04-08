// estilos
import styles from "./style.module.css"

// componentes
import CardComponent from "../../components/CardComponent"
import { Container, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

export default function ListPage() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get("http://localhost:3000/personagens")
            .then(response => {
                // Mapeia os dados para os nomes que o componente espera
                const mappedItems = response.data.map(item => ({
                    id: item.id,
                    image: item.imagem_url,
                    name: item.nome,
                    // Se você tiver um mapeamento ou consulta para "universe"
                    // substitua item.universo_id ou defina um valor padrão.
                    universe: item.universo_id,
                    media: "Mídia não definida",
                }));
                setItems(mappedItems);
            })
            .catch(error => {
                console.error("Erro ao buscar personagens:", error);
            });
    }, []);

    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/detalhes/${id}`);
    };

    return (
        <>
            <main>
                <section className={styles.section1}>
                    <Container>
                        <Col>
                            <div className={styles.container}>
                                <h1 className={styles.title}>Lista Geral</h1>
                                <h5 className={styles.subtitle}>Consulte todos os personagens existentes</h5>
                            </div>

                            <div className={styles.search_bar}>

                            </div>
                        </Col>
                    </Container>
                </section>

                <section className={styles.section2}>
                    <Container>
                        <Row>
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                                        <CardComponent
                                            image={item.image}
                                            name={item.name}
                                            universe={item.universe}
                                            media={item.media}
                                            onDetails={() => handleDetails(item.id)}
                                        />
                                    </Col>
                                ))
                            ) : (
                                <p>Nenhum personagem encontrado.</p>
                            )}
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}