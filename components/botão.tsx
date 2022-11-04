import styles from '../styles/Home.module.css'

interface BotaoProps {
    valor: any
    tipo?: 'number' | 'operator' | 'clean' | 'result'
}

export default function Botao(props: BotaoProps) {
    return (
        <div className={styles.divisoes}>
            <button
                className={styles.button}
            >{props.valor}</button>
        </div>
    )
}