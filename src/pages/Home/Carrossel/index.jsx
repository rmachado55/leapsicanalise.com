import style from './Carrossel.module.scss';
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';
import {Queixas} from './queixas.js';

export default function Carrossel () {


return(
<div className={style.banner}>
<Carousel>

{Queixas.map((item) => {return(
  <CarouselItem key={item.chave}>
      <a href={item.chamada}>
        <heading className={style.banner__heading}>{item.nome}</heading>
        <img
        className="d-block w100"
        src={`https://rmachado55.github.io/leapsicanalise.com/assets/banner/${item.chave}.jpg`}
        alt={`Foto de:${item.nome}`}/>
      <Carousel.Caption>
        <p>Clique aqui se quiser conversar sobre:</p>
        <h1>{item.nome}</h1>
      </Carousel.Caption></a>   
  </CarouselItem>
)})}
</Carousel>
</div>
            )
}