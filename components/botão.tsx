import styles from '../styles/Home.module.css'

interface BotaoProps {
    valor: any
    tipo?: 'number' | 'operator' | 'clean' | 'result'
}

let estilo = styles.button
export default function Botao(props: BotaoProps) {

        if (props.tipo === 'number'){
            estilo = styles.button
        }else if(props.tipo === 'operator'){
            estilo = styles.buttonoperator
        }
        else if(props.tipo === 'clean'){
            estilo = styles.buttonclear
        }
        else{
            estilo = styles.buttonresult
        }

    
    return (
        <div className={styles.divisoes}>
            <button
                className={estilo}
            >{props.valor}</button>
        </div>
    )
}