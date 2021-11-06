import { FC } from 'react'
import * as styles from './styles'

// icons
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StartButton: FC = () => {
  return (
    <button css={styles.container}>
      <FontAwesomeIcon css={styles.icon} icon={faMicrosoft} />
      Start
    </button>
  )
}

export default StartButton