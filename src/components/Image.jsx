import React from 'react'
import styles from '../App.css'
import {BsArrowDownUp} from "react-icons/bs";

const Image = () => {
    const [wobble, setWobble] = React.useState(0)
    return (
        <BsArrowDownUp style={{ width:"24px", height: "auto"}}
            className={styles.image}

            onClick={() => setWobble(1)}
            onAnimationEnd={() => setWobble(0)}
            wobble={wobble}
        />
    )
}
export default Image
