import React, { useEffect, useState } from 'react';
import styles from './storageData.module.scss'


function StorageData(props) {

    const [oldDataLocalStorage, setOldDataLocalStorage] = useState('')

    useEffect(() => {
        let DataFromStorage = localStorage.getItem('Game Results');
        let oldData = JSON.parse(DataFromStorage)
        // console.log('data i local storge ', data)
        // console.log(data[data.length - 1])
        if (DataFromStorage) {
            console.log(oldData)
            setOldDataLocalStorage(oldData.reverse())
        }
    }, [])


    function handleClean() {
        localStorage.removeItem('Game Results');
        setOldDataLocalStorage('')

    }


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

                <h2>Your previous results for multiplication</h2>



                {oldDataLocalStorage ?
                    <div className={styles.tableWrap}>
                        <table >
                            <thead>
                                <tr className={styles.tableHeader}>
                                    <th> Times Table </th>
                                    <th> Game time </th>
                                    <th> Date and time </th>
                                </tr>
                            </thead>
                            <tbody>
                            {oldDataLocalStorage.map((data, index) => (
                                
                                <tr key={index} className={styles.tableBody}>
                                    <td> {data.timesTable} </td>
                                    <td> {data.gameTime} </td>
                                    <td> {data.currentTime} </td>
                                </tr>
                            ))}
                             </tbody>
                        </table>
                    </div>
                    : <h2 className={styles.errorMessage}>You need to save some result first.</h2>}




                <button onClick={handleClean}> Clean alla results </button>
                <button onClick={() => props.toggle(false)}> Go Back </button>

            </div>
        </div>
    );
}
export default StorageData;