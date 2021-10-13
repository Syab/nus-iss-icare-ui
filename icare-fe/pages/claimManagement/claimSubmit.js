import React from 'react';
import MainLayout from "../../page-layouts/MainLayout/MainLayout";
import ClaimSubmitView from "../../page-views/ClaimView/ClaimSubmitView";

function ClaimSubmitPage() {
    const ClaimSubmitPageContent = <ClaimSubmitView/>
    return (
        <div>
            <MainLayout
                children={ ClaimSubmitPageContent }
            />
        </div>
    )
}

export default ClaimSubmitPage;