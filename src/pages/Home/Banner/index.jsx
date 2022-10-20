import style from './Banner.module.scss';
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap';
import {ListaBanner} from './banner.js';

export default function Banner () {


return(
<div className={style.banner}>
<Carousel>

{ListaBanner.map((item) => {return(
  <CarouselItem key={item.chave}>
      <a href={item.chamada}>
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