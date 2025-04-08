import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./style.module.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardComponent ({ image, name, universe, media, onDetails }) {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={image} className={styles.cardImage} />
            <Card.Body>
                <Card.Title className={styles.cardTitle}>{name}</Card.Title>
                <Card.Text className={styles.cardText}>
                    <strong>Universo:</strong> {universe} <br />
                    <strong>Mídia:</strong> {media}
                </Card.Text>
                <Button className={styles.cardButton} onClick={onDetails}>
                    VER DETALHES
                </Button>
            </Card.Body>
        </Card>
    )
}