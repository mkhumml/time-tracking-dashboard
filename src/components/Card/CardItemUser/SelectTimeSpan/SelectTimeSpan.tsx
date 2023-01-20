import React from 'react'
import styles from './SelectTimeSpan.module.css'

type Props = {
    data: any;
}

const SelectTimeSpan = ({ data }: Props) => {
    return data.map((item: any, index: number) => <button className={styles.Button} key={index}>item</button>)
}

export default SelectTimeSpan