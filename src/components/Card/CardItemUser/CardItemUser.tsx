import React from 'react'
import Image from 'next/image'
import styles from './CardItemUser.module.css'
import SelectTimeSpan from './SelectTimeSpan/SelectTimeSpan'

type Props = {}

const CardItemUser = (props: Props) => {
    return (
        <div className={styles.CardItemUserContainer}>
            <div className={styles.InfoContainer}>
                <div className={styles.ImageContainer}>
                    <Image
                        className={styles.Image}
                        src="/image-jeremy.png"
                        alt="13"
                        width={70}
                        height={70}
                        priority
                    />
                </div>
                <h3 className={styles.SubHeading}>Report for</h3>
                <h1 className={styles.Heading}>Jeremy Robson</h1>
            </div>
            <div className={styles.SelectContainer}>
                <SelectTimeSpan data={["Daily", "Weekly", "Monthly"]} />
            </div>
        </div>
    )
}

export default CardItemUser;