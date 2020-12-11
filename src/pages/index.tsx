import React from 'react';
import { useHistory } from 'umi';
import styles from './index.less';

export default () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/a')}>tttttt</button>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
