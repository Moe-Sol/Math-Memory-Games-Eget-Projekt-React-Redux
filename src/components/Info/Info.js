import React from 'react';
import styles from './info.module.scss'


function Info(props) {

    return (
        <div className={styles.container} >

            <div className={styles.StorageDataContainer}>
                <div>
                    <svg onClick={() => props.toggle(false)} viewBox="0 0 34 34" fill="none">
                        <path d="M20.5355 20.5355L13.4645 13.4645" stroke="rgb(80, 68, 4)" strokeLinecap="round" />
                        <path d="M13.4645 20.5355L20.5355 13.4645" stroke="rgb(80, 68, 4)" strokeLinecap="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.92893 24.0711C13.8342 27.9763 20.1658 27.9763 24.0711 24.0711C27.9763 20.1658 27.9763 13.8342 24.0711 9.92893C20.1658 6.02369 13.8342 6.02369 9.92893 9.92893C6.02369 13.8342 6.02369 20.1658 9.92893 24.0711Z" stroke="rgb(80, 68, 4)" />
                    </svg>
                </div>




                <h2>( This project is still under development )</h2>
                <h2>Developed by Mohammad Soliman</h2>
                <a href="mailto:mohammad.soliman86@hotmail.com">mohammad.soliman86@hotmail.com</a>

                <button onClick={() => props.toggle(false)}> Go Back </button>

            </div>
        </div>
    );
}
export default Info;