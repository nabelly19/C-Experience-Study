import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

import ButtonComponent from "../../components/ButtonComponent";
import api from "../../services/api";

export default function CreateItemPage() {
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
    api.get("http://localhost:3000/universos")
      .then(response => setUniversos(response.data))
      .catch(error => console.error("Erro ao carregar universos:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nome || !formData.descricao || formData.universo_id === "" || !formData.imagem_url) {
      return "Todos os campos são obrigatórios.";
    }

    try {
      new URL(formData.imagem_url);
    } catch (e) {
      return "Por favor, insira uma URL válida para a imagem.";
    }

    return "";
  };
  const handleSalvar = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError); // Exibe a mensagem de erro para o usuário
      return;
    }

    setLoading(true);
    setError("");

    api.post("http://localhost:3000/personagens", formData)
      .then(response => {
        navigate(`/`);
      })
      .catch((err) => {
        console.error("Erro ao criar personagem:", err);
        setError("Ocorreu um erro ao criar o personagem. Por favor, tente novamente.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVoltar = () => {
    navigate("/");
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}

      <Container>
        <Col>
          <div className={styles.container}>
            <h1 className={styles.title}>Criar Novo Personagem</h1>
            <h5 className={styles.subtitle}>Preencha os dados para criar o personagem</h5>
          </div>
        </Col>
      </Container>

      <Container className={styles.detailContainer}>
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
                  className={styles.formControl}
                  required
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
                  className={styles.formControl}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Universo</Form.Label>
                <Form.Select
                  name="universo_id"
                  value={formData.universo_id}
                  onChange={handleChange}
                  className={styles.formControl}
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
                  className={styles.formControl}
                  required
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
  );
}
