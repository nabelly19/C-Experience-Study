import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

// estilos
import styles from "./style.module.css";

// componentes
import ButtonComponent from "../../components/ButtonComponent";
import DetailCardComponent from "../../components/DetailCardComponent";

import api from "../../services/api";

export default function ViewItemPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        api.get(`http://localhost:3000/personagens/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.error("Erro ao buscar item:", error));
    }, [id]);

    const handleEditar = () => {
        console.log("Editar", id);
    };

    const handleApagar = () => {
        console.log("Apagar", id);
    };

    if (!item) return <p>Carregando...</p>;

    return (
        <>
            <Container>
                <Col>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Detalhes</h1>
                        <h5 className={styles.subtitle}>Consulte os detalhes deste personagem</h5>
                    </div>
                </Col>
            </Container>

            <Container className={styles.detailContainer}>
                <Row className={styles.detailRow}>
                    <Col md={12}>
                        <DetailCardComponent
                            image={item.imagem_url}
                            name={item.nome}
                            universe={`Universo ${item.universo_id}`} // ou você pode buscar o nome real com um JOIN no backend
                            media={"Não disponível"} // você pode buscar isso depois se quiser
                            description={item.descricao}
                        />
                    </Col>
                </Row>

                <section className={styles.section1}>
                    <ButtonComponent className={styles.btn} text="EDITAR" onClick={handleEditar} variant="primario" />
                    <ButtonComponent text="APAGAR" onClick={handleApagar} variant="secundario" />
                </section>

            </Container>
        </>
    )
}