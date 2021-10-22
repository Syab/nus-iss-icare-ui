import React from 'react';
import Layout from "../page-layouts/Layout/Layout";
import DashboardView from "../page-views/DashboardView/DashboardView";
import CustomHeader from "../components/CustomHeader/CustomHeader";

const ReportingPage = () => {
    const ReportingPageContent = <DashboardView/>
    return (
        <div>
            <Layout
                content= { ReportingPageContent }
            />
        </div>
    )
}

export default ReportingPage;