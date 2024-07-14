import { useEffect, useState } from "react"
import styles from "./Table.module.css"

const Table = ({imc}) => {

    var padrao = {color:"black"}
    var resultado = {color:"white", backgroundColor: "gray",};

    let [abaixo, setAbaixo] = useState ({padrao});
    let [ideal, setIdeal] = useState ({padrao});
    let [acima, setAcima] = useState ({padrao});
    let [obesidade1, setObesidade1] = useState ({padrao});
    let [obesidade2, setObesidade2] = useState ({padrao});
    let [obesidade3, setObesidade3] = useState ({padrao});


    

    function reseta (){
        setAbaixo(padrao)
        setIdeal(padrao);
        setAcima(padrao);
        setObesidade1(padrao);
        setObesidade2(padrao);
        setObesidade3(padrao);
    }

    useEffect (()=> {
        if(0<imc && imc<18.5){ //ABAIXO DO PESO//
            reseta();
            setAbaixo(resultado)
        }else if(18.4<imc && imc<25){ //PESO IDEAL//
            reseta();
            setIdeal(resultado)
        }else if(24.9<imc && imc<30){ //ACIMA DO PESO//
            reseta();
            setAcima(resultado)
        }else if(29.9<imc && imc<35){ //OBESIDADE1//
            reseta();
            setObesidade1(resultado)
        }else if(34.9<imc && imc<40){ //OBESIDADE2//
            reseta();
            setObesidade2(resultado)
        }else if(39.9<imc){ //OBESIDADE3//
            reseta();
            setObesidade3(resultado)
        }else{
            reseta();
        }
    },[imc])


    return (
        <>
        <h2>Tabela IMC</h2>
        <table id="table" className={styles.table}>
            <tr className={styles.tableHead} > 
                <th className={styles.tableItem} >IMC</th>
                <th className={styles.tableItem} >Classificação</th>
            </tr>
            <tr style={abaixo} >
                <td className={styles.tableItem} >Abaixo 18,5</td>
                <td className={styles.tableItem} >Abaixo do peso</td>
            </tr>
            <tr style={ideal} >
                <td className={styles.tableItem} >Entre 18,5 e 24,9</td>
                <td className={styles.tableItem} >Peso ideal</td>
            </tr>
            <tr style={acima} > 
                <td className={styles.tableItem} >Entre 25 e 29,9</td>
                <td className={styles.tableItem} >Levemente acima do peso</td>
            </tr>
            <tr style={obesidade1} >
                <td className={styles.tableItem} >Entre 30 e 34,9</td>
                <td className={styles.tableItem} >Obesidade grau I</td>
            </tr>
            <tr style={obesidade2} >
                <td className={styles.tableItem} >Entre 35 e 39,9</td>
                <td className={styles.tableItem} >Obesidade grau II</td>
            </tr>
            <tr style={obesidade3} >
                <td className={styles.tableItem} >Maior ou igual a 40</td>
                <td className={styles.tableItem} >Obesidade grau III</td>
            </tr>
        </table>
        </>
    )
}

export default Table