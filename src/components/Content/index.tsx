import styles from './Content.module.scss';

type Props = {
    title: string;
    children?: JSX.Element;
  };

export default function Content ({title, children}: Props){

    return (
        <div className={styles.content}>
            <h2 id={"oi"} className={styles.content__title}>{title}</h2>
            {children}            
        </div>
    )
}