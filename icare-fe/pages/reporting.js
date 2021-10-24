import React from 'react';
import Layout from "../page-layouts/Layout/Layout";
import ReportingView from "../page-views/ReportingView/ReportingView";

const ReportingPage = () => {
    const ReportingPageContent = <ReportingView/>
    return (
        <div>
            <Layout
                content= { ReportingPageContent }
            />
        </div>
    )
}

export default ReportingPage;