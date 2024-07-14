import { useEffect, useState } from "react"
import styles from "./Form.module.css"
import Table from "../Table"



const Form = () => {

    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [imc, setImc] = useState (0);
    useEffect (()=> {
        altura = altura/100
        setImc((peso/(altura*altura)).toFixed(1))
    },[peso, altura]);

    useEffect(()=>{
        if(imc == 0){
            setImc(0)
        }
    },[imc])

    return (
        <>
        <h1>Calculadora de IMC</h1>
        <div className={styles.form}>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="altura">Altura:</label>
                <input id="altura" placeholder="  Altura em cm" className={styles.formContainerItem} type="number" onChange={e => setAltura(e.target.value)} />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="peso">Peso:</label>
                <input id="peso" placeholder="  Peso em Kg" className={styles.formContainerItem} type="number" onChange={e=> setPeso(e.target.value)} />
            </div>
        </div>
        <div className={styles.resultado}>
            <h3>Resultado:</h3> <p className={styles.resultadoNum} >{imc}</p> 
        </div>
        <Table imc={imc}></Table>
        </>
    )

}

export default Form