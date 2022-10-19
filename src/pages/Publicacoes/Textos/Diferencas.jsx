import FotoDiferencas from 'assets/textos/diferencas.jpg';
import style from '../Publicacoes.module.scss';
import Assinatura from '../Assinatura';

export default function Diferencas () {

    return(<>
        <div className={style.publicacoes}>
        <img className={style.publicacoes__ilustra} src={FotoDiferencas} alt={'Imagem de uma pessoa conversano com um profissional'}/>
        <div className={style.publicacoes__texto}>
        <p>É muito comum pessoas me procurarem confusas com as diferenças entre os profissionais psicólogo, psicanalista, psiquiatra e o que é psicoterapia. Longe esgotar esse assunto segue uma breve explicação, lembrando que, acima de tudo, o vínculo e confiança no profissional é decisiva para um bom trabalho.</p>
        <br></br>
        <p>A Psicologia nasceu na Alemanha em 1860 com Wundt, como um discurso mais teórico do estudo da mente humana. Tornou-se uma ciência universitária que aborda o estudo e pesquisas relacionadas as condições do funcionamento mental, psicologia social, neurociências... O curso básico estuda diversas matrizes teóricas, não é habilitante para a prática clínica, tornando-se necessária uma especialização focada na clínica, existem diversas, a psicanálise pode ser uma especialização/abordagem.</p>
        <br></br>
        <p>A Psicanálise nasceu em Viena na Áustria com Freud (médico neurologista) em 1897 como um método de tratamento prático para reverter sintomas, uma forma de investigação, pesquisa de aspectos até então inalcançáveis (inconscientes) numa tentativa de apaziguar o sofrimento das pessoas.</p>
        <br></br>
        <p>Há mais de um século a Psicanálise conta com estudiosos (Lacan, Klein, Winnicott, Bion...) que, através da releitura da extensa obra de Freud aprofundam os conceitos fundamentais de Freud o que torna a Psicanálise ampla e atual. A formação de um psicanalista é oferecida em instituições especializadas, acontece depois de uma graduação que não necessariamente será em Psicologia, como uma especialização eu, por exemplo, me graduei nas Ciências Sociais/Sociologia, depois licenciei em Letras para só então iniciar o percurso da formação em Psicanálise que nunca tem fim pois fundamenta-se em três aspectos:</p>
        <br></br>
        
        <li>Que o psicanalista esteja em dia com sua análise pessoal (sua experiência pessoal com o divã e suas questões pessoais);</li>
        <br></br>
        <li>Que a atividade clínica seja supervisionada por outro psicanalista mais experiente sempre que necessário.</li>
        <br></br>
        <li>Formação teórica de forma continuada, atualizações permanentes, grupos de estudo (aprofundamento da parte teórica) e estudos de casos (aprofundamento da parte prática).</li>
        <br></br>        
        <p>Psicoterapia é a atividade prática em consultório, o tratamento psicológico de um profissional capacitado (psicólogo ou psicanalista). No caso do psicanalista ou somente analista vai trabalhar investigando as possíveis origens do sofrimento relatado por seu analisando ou paciente.</p>
        <br></br>
        <p>Psiquiatria é uma especialidade da medicina focada no diagnóstico e no tratamento de doenças mentais através de medicamentos.</p></div>
        </div>
        </>
    )
}