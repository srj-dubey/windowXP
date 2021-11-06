import { FC, useEffect, useState } from 'react'
import * as styles from './styles'

// icons
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// library
import { StartButton } from '../../library/button'



const Taskbar: FC = () => {
  const [timeString, setTimeString] = useState<string>()

  useEffect(() => {
    var d = new Date("2011-04-20T09:30:51.01");
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51
    setTimeString(`${d.getHours()}: ${d.getMinutes()}`)
  }, [])

  return (
    <div css={styles.container}>
      <div css={styles.actionContainer}>
        <StartButton />
      </div>
      <div css={styles.floatingContainer}>

      </div>
      <div css={styles.notificationContainer}>
        <FontAwesomeIcon css={styles.icon} icon={faBell} />
        <p css={styles.time}>{timeString}</p>
      </div>
    </div>
  )
}

export default Taskbar