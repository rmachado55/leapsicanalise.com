import Content from "components/Content";
import Diferencas from "./Textos/Diferencas";
import Empilhar from "./Textos/Empilhar";
import Eu from "./Textos/Eu";
import Assinatura from "./Assinatura";

export default function Publicacoes () {


    return (
    <>
        <Content title={'Diferenças entre Psicólogo e Psicanalista'}>
            <Diferencas/>
            <Assinatura />
        </Content>
        <Content title={'A arte de empilhar'}>
            <Empilhar/>
            <Assinatura />
        </Content>
        <Content title={'Eu quem sei de mim'}>
            <Eu />
            <Assinatura />
        </Content>
    </>
        
    )
}