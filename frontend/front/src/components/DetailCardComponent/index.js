import React from "react";

//bootstrap
import { Card } from "react-bootstrap";

import styles from "./style.module.css";

export default function DetailCardComponent({image, name, universe, media, description}) {

    return (
        <>
            <Card className={styles.detailCard}>
                <Card.Img variant="top" src={image} className={styles.detailCardImage} />
                <Card.Body>
                    <Card.Title className={styles.detailCardTitle}>{name}</Card.Title>
                    <Card.Text className={styles.detailCardSubtitle}>
                        <strong>Universo:</strong> {universe}
                    </Card.Text>
                    <Card.Text className={styles.detailCardSubtitle}>
                        <strong>Mídia:</strong> {media}
                    </Card.Text>
                    <Card.Text className={styles.detailCardDescription}>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}