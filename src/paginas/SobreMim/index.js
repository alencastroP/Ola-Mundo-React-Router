import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Pedro!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto Pedro"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha trajetória acadêmica começou na Universidade Federal do Rio Grande do Norte (UFRN), onde cursei Ciências e Tecnologia. No entanto, minha paixão pela tecnologia me levou a focar em Análise e Desenvolvimento de Sistemas, um curso que se alinha mais com meus objetivos profissionais.
            </p>
            <p className={styles.paragrafo}>
                Por isso, decidi continuar meus estudos na Estácio, onde posso me aprofundar nas áreas que mais me interessam.
            </p>
            <p className={styles.paragrafo}>
                Hoje sou estudante de programação e atuo como agente de suporte na Ploomes. Tenho uma forte ênfase em desenvolvimento front-end, com proficiência em HTML, CSS e JavaScript. Além disso, sou hábil no consumo de APIs e no uso da biblioteca React para construir interfaces de usuário dinâmicas e responsivas.
            </p>
            <p className={styles.paragrafo}>
                Na Ploomes, meu papel é fornecer suporte técnico aos clientes, aplicando minhas habilidades para resolver problemas de maneira eficiente e garantir a satisfação dos usuários. Atualmente, estou me aprofundando em TypeScript, buscando aprimorar a qualidade e a robustez do meu código.

            </p>
            <p className={styles.paragrafo}>
                Estou sempre em busca de novos conhecimentos e desafios, o que me impulsiona a crescer continuamente como profissional na área de tecnologia.
            </p>
        </PostModelo>
    )
}