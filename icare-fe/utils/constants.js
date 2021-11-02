import { forwardRef } from 'react';
import {
    AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight,
    Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt,
    Search, ViewColumn
} from '@material-ui/icons';


const node_env = process.env.NODE_ENV
const dev = node_env !== 'production';

const local_URL = "http://localhost:3001";
const singpasslogo = "https://app.singpass.gov.sg/static/og_image.png";
const corppasslogo = "https://app.singpass.gov.sg/static/corppass_og.png";
const singpasslogin = "http://ec2-13-213-55-237.ap-southeast-1.compute.amazonaws.com/login/singpass";

// Claim
const claim_SVC = "claim"
const claim_health_URL = "http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/h"
const claimsubmit_ENDPOINT = "/claimsubmit"
const claimhistory_ENDPOINT = "/claimhistory"
const claimlist_ENDPOINT = "/claimlist"
const claimlist_URL = "http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/getclaimlist"
const claimhistory_URL = "http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/getclaimhistorylist"
const claimsubmit_URL = "http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/submitclaim"


// Policy Management
const policy_SVC = "policy"
const policymgmt_health_URL = "http://icare-policymgmt-alb-692557539.ap-southeast-1.elb.amazonaws.com/health"
const policymgmt_URL = "http://icare-policymgmt-alb-692557539.ap-southeast-1.elb.amazonaws.com/private"
const viewpolicy_ENDPOINT = "/viewpolicy"

// Search
const search_health_URL = "http://icare-search-alb-969062267.ap-southeast-1.elb.amazonaws.com/health";
const search_URL = "http://icare-search-alb-969062267.ap-southeast-1.elb.amazonaws.com/public";
const search_ENDPOINT = "/searchpolicy"

// Login
const mockpass = "http://ec2-3-1-83-178.ap-southeast-1.compute.amazonaws.com/login/singpass"

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// regex
const specChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const onlyAlpha = /[A-Za-z]/;
const onlyAlphaNumeric = /[0-9A-Za-z ]/;
const onlyDigits = /^\d+(\.\d{1,2})?$/;

export {
    singpasslogo,
    corppasslogo,
    singpasslogin,
    mockpass,
    local_URL,
    claim_SVC,
    claim_health_URL,
    claimlist_URL,
    claimhistory_URL,
    claimsubmit_URL,
    claimhistory_ENDPOINT,
    claimsubmit_ENDPOINT,
    claimlist_ENDPOINT,
    policy_SVC,
    policymgmt_health_URL,
    policymgmt_URL,
    viewpolicy_ENDPOINT,
    search_URL,
    search_health_URL,
    search_ENDPOINT,
    node_env,
    tableIcons,
    onlyAlpha,
    onlyDigits,
    onlyAlphaNumeric
}