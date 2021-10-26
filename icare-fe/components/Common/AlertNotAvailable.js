import React from 'react';
import { Alert} from "evergreen-ui";
import styles from "../../styles/Page.module.css";

const AlertNotAvailable = () => {
    return(
        <main className={styles.main}>
            <Alert intent="danger"
                   title="We're looking into it right now!"
            >
                Looks like something's happened behind the scenes. We promise we're working on it.
                Please come back again in a couple of minutes.
            </Alert>
        </main>
    )
}

export default AlertNotAvailable;