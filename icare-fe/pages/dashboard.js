import React from 'react';
import Layout from "../page-layouts/Layout/Layout";
import DashboardView from "../page-views/DashboardView/DashboardView";

const DashboardPage = () => {
    const DashboardPageContent = <DashboardView/>
    return (
        <div>
            <Layout
                content= { DashboardPageContent }
            />
        </div>
    )
}

export default DashboardPage;