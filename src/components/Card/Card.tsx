import React from 'react'
import styles from './Card.module.css'
import CardItemUser from './CardItemUser/CardItemUser'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className={styles.CardContainer}>
            <CardItemUser />

        </div>
    )
}

export default Card