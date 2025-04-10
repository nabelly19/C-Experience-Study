import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

import ButtonComponent from "../../components/ButtonComponent";
import api from "../../services/api";

export default function EditItemPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        universo_id: "",
        imagem_url: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [universos, setUniversos] = useState([]);

    useEffect(() => {
        api.get(`http://localhost:3000/personagens/${id}`)
            .then(response => setFormData(response.data))
            .catch(error => {
                console.error("Erro ao carregar personagem:", error);
                setError("Erro ao carregar personagem.");
            });
    }, [id]);

    useEffect(() => {
        api.get("http://localhost:3000/universos")
            .then(response => setUniversos(response.data))
            .catch(error => {
                console.error("Erro ao carregar universos:", error);
                setError("Erro ao carregar os universos disponíveis.");
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        // Verifica se todos os campos estão preenchidos
        if (!formData.nome || !formData.descricao || formData.universo_id === "" || !formData.imagem_url) {
            return "Todos os campos são obrigatórios.";
        }

        // Verifica se o campo Universo ID é numérico
        if (isNaN(Number(formData.universo_id))) {
            return "O campo 'Universo ID' deve conter apenas valores numéricos.";
        }

        // Validação para Imagem URL utilizando o construtor URL
        try {
            new URL(formData.imagem_url);
        } catch (e) {
            return "Por favor, insira uma URL válida para a imagem.";
        }

        return ""; // Se todas as validações passarem, retorna string vazia.
    };

    const handleSalvar = () => {
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError("");
        api.put(`http://localhost:3000/personagens/${id}`, formData)
            .then(() => navigate(`/detalhes/${id}`))
            .catch(error => {
                console.error("Erro ao salvar personagem:", error);
                setError("Erro ao salvar personagem. Por favor, tente novamente.");
            })
            .finally(() => setLoading(false));
    };

    const handleVoltar = () => {
        navigate(`/detalhes/${id}`);
    };

    return (
        <>
            <Container>
                <Col>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Editar</h1>
                        <h5 className={styles.subtitle}>Edite os dados deste personagem</h5>
                    </div>
                </Col>
            </Container>

            <Container className={styles.detailContainer}>
                {error && <Alert variant="danger" className={styles.alert}>{error}</Alert>}
                <Row className={styles.detailRow}>
                    <Col md={12}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Universo</Form.Label>
                                <Form.Select
                                    name="universo_id"
                                    value={formData.universo_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione um universo</option>
                                    {universos.map((universo) => (
                                        <option key={universo.id} value={universo.id}>
                                            {universo.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Imagem URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imagem_url"
                                    value={formData.imagem_url}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <section className={styles.section1}>
                    <ButtonComponent text="SALVAR" onClick={handleSalvar} variant="sucesso" />
                    <ButtonComponent text="VOLTAR" onClick={handleVoltar} variant="secundario" />
                </section>
            </Container>
        </>
    )
}