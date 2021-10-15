import React from 'react';
import Layout from "../../page-layouts/Layout/Layout";
import ClaimSubmitView from "../../page-views/ClaimView/ClaimSubmitView";

function ClaimSubmitPage() {
    const ClaimSubmitPageContent = <ClaimSubmitView/>
    return (
        <div>
            <Layout
                content={ ClaimSubmitPageContent }
            />
        </div>
    )
}

export default ClaimSubmitPage;