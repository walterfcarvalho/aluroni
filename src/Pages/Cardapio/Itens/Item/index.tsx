import logo from "assets/logo.svg"
import styles from './Item.module.scss'
import cardapio from '../Itens.json'
import classNames from 'classnames'

type Props = typeof cardapio[0]


export default function Item(props: Props) {

  const { title, description, category, size, serving, price, photo  } = props;

  return <div className={styles.item}>
    <div>
      <img src={photo} alt={description} />
    </div>
    <div className={styles.item__descricao}>
      <div className={styles.item__titulo}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.item__tags}>
      
        <div 
          className={ classNames({
            [styles.item__tipo]:true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]:true,

        })}        
        >
          {category.label}</div>

        <div className={styles.item__porcao}>{size}g</div>

        <div className={styles.item__qtdpessoas}>{serving} {serving=== 1 ? ' pessoa': 'pessoas'}</div>

        <div className={styles.item__valor}>R${price.toFixed(2)}</div>
      </div>

    </div>
  </div>
}