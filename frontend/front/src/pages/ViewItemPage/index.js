import React, { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

// estilos
import styles from "./style.module.css";

// componentes
import ButtonComponent from "../../components/ButtonComponent";
import DetailCardComponent from "../../components/DetailCardComponent";

export default function ViewItemPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/personagens/${id}`) // URL conforme seu backend
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
            <Container className={styles.detailContainer}>
                <ButtonComponent text="EDITAR" onClick={handleEditar} variant="primario" />
                <ButtonComponent text="APAGAR" onClick={handleApagar} variant="secundario" />

                <Row className={styles.detailRow}>
                    <Col md={12}>
                        <DetailCardComponent
                            image={item.image}
                            name={item.name}
                            universe={item.universe}
                            media={item.media}
                            description={item.description}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}