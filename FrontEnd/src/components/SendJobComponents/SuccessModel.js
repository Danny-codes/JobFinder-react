import styles from './SuccessModel.module.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import JobsContext from '../../store/job-slice'
const SuccessModel = (props) => {
    const ctx = useContext(JobsContext)

    return(
        <div className={styles.div}>
        <div className={styles.background} onClick={ctx.hidingModal}></div>
        <div className={styles.box}>
            <div>
                <h3>Published Successfully</h3>
                <p>Thanks for using our services, We hope you manage to find a great employee</p>
            </div>
            <div className={styles.buttonDiv}>
                <button onClick={ctx.hidingModal} id='closeButton'>Close</button>
                <Link id='seeButton' to={'/job/' + props.id}>See Job</Link>
            </div>
        </div>
        </div>
    )
}

export default SuccessModel