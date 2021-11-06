import { FC } from 'react'
import * as styles from './styles'

// resources
import img1 from '../../images/basic/xp-home.jpg';

// components
import Taskbar from '../Taskbar'

const Main: FC = () => {
  return (
    <div css={styles.container}>
      <img src={img1} alt="XP Home" />
      <div css={styles.bottomFixedContainer}>
        <Taskbar />
      </div>
    </div>

  )
}

export default Main