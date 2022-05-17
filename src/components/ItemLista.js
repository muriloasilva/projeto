import React from 'react';

import styles from './CSS/css.module.css';

const ItemLista = ({nome}) => {
    return (<>
          <li className={styles.cssli}>{nome}</li>
    </>);
}

export default ItemLista;