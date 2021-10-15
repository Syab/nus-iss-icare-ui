import { useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "../../public/eneko-urunuela-unsplash.jpg"
import styles from "../../styles/componentStyles/BGImageStyles.module.css"


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function BGImage() {
    const [width, setWidth] = useState();
    const [height, setheight] = useState();

    useEffect(() => {
        const { width, height } = getWindowDimensions();
        setWidth(width);
        setheight(height);
    }, []);

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions();
            setWidth(width);
            setheight(height);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width && height) {
        return (
            <div className={styles.root}>
                <Image
                    src={bgImage}
                    width={width}
                    height={height}
                />
            </div>
        );
    }
    return null;
}

export default BGImage;
