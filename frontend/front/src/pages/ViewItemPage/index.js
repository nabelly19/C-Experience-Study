import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// estilos
import styles from "./style.module.css";

// componentes
import ButtonComponent from "../../components/ButtonComponent";
import DetailCardComponent from "../../components/DetailCardComponent";

import api from "../../services/api";

export default function ViewItemPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`http://localhost:3000/personagens/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.error("Erro ao buscar item:", error));
    }, [id]);

    const handleEditar = () => {
        navigate(`/edit/${id}`);
    };

    const handleVoltar = () => {
        navigate(`/`)
    }

    const handleApagar = () => {
        // Confirmação para o usuário
        if (window.confirm("Tem certeza que deseja apagar este personagem?")) {
            api.delete(`http://localhost:3000/personagens/${id}`)
                .then(() => {
                    alert("Personagem apagado com sucesso.");
                    navigate("/"); // Redireciona para a ListPage
                })
                .catch(error => console.error("Erro ao apagar personagem:", error));
        }
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
                    <div className={styles.btnArea}>
                        <ButtonComponent className={styles.btn} text="VOLTAR" onClick={handleVoltar} variant="secundario" />
                    </div>
            </Container>

            <Container className={styles.detailContainer}>
                <Row className={styles.detailRow}>
                    <Col md={12}>
                        <DetailCardComponent
                            image={item.imagem_url}
                            name={item.nome}
                            universe={`Universo ${item.universo_nome || "Desconhecido"}`} // ou você pode buscar o nome real com um JOIN no backend
                            media={"Não incluída"} // você pode buscar isso depois se quiser
                            description={item.descricao}
                        />
                    </Col>
                </Row>

                <section className={styles.section1}>
                    <ButtonComponent className={styles.btn} text="EDITAR" onClick={handleEditar} variant="primario" />
                    <ButtonComponent text="APAGAR" onClick={handleApagar} variant="perigo" />
                </section>

            </Container>
        </>
    )
}