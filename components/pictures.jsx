import React from 'react'
import styles from "./pictures.module.css"
import {Routes} from "./Routes"

const Pictures = () => {
    return (
        <div className={styles.outer}>
            <span style={{ display: "flex", justifyContent: "flex-end" }}><Routes/></span>
            <div>
                                     
                <img src="https://i.postimg.cc/FsBYDXKQ/1.jpg" alt="prop" />
                    
          </div>
        </div>
    )
}

export default Pictures
