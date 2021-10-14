import React from 'react';
// import styles from "../styles/Page.module.css";
import MainLayout from "../page-layouts/MainLayout/MainLayout";
import DashboardView from "../page-views/DashboardView/DashboardView";

const DashboardPage = () => {
    const DashboardPageContent = <DashboardView/>
    return (
        <div>
            <MainLayout
                content= { DashboardPageContent }
            />
        </div>
    )
}

export default DashboardPage;