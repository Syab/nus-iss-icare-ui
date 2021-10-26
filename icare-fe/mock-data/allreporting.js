const claimaintlist = [
    {
        "userId": "S3100052A",
        "createDate": "2021/10/17",
        "claimantName": "TAN HENG HUAT",
        "policyName": "MyProtector-Term Plan II",
        "policyId": "AVIVA_LI_01",
        "policyNo": "AVIVA20211014",
        "claimType": "LIFE",
        "claimStatus": "PASS",
        "claimAmount": 5540
    },
    {
        "userId": "S7380725E",
        "createDate": "2021/10/17",
        "claimantName": "RATAN SHIVALI JOSHI",
        "policyName": "MyProtector-Term Plan II",
        "policyId": "AVIVA_LI_01",
        "policyNo": "AVIVA20211015",
        "claimType": "LIFE",
        "claimStatus": "PENDING",
        "claimAmount": 9500
    },
    {
        "userId": "S6005054F",
        "createDate": "2021/10/17",
        "claimantName": "LIM SHONG BOON",
        "policyName": "MyHealthPlus rider to MyShield",
        "policyId": "AVIVA_HE_04",
        "policyNo": "AVIVA20211013",
        "claimType": "LIFE",
        "claimStatus": "PENDING",
        "claimAmount": 10000
    },
    {
        "userId": "S7450757C",
        "createDate": "2021/10/17",
        "claimantName": "LIONEL LINWOOD TUPPER",
        "policyName": "MyCare MyCare Plus",
        "policyId": "AVIVA_DI_06",
        "policyNo": "AVIVA20211011",
        "claimType": "DISABILITY",
        "claimStatus": "REJECTED",
        "claimAmount": 1500
    },
    {
        "userId": "S7450757C",
        "createDate": "2021/10/17",
        "claimantName": "ANDIKA BIN TAUFAN",
        "policyName": "IdealIncome",
        "policyId": "AVIVA_DI_05",
        "policyNo": "AVIVA20211010",
        "claimType": "DISABILITY",
        "claimStatus": "PENDING",
        "claimAmount": 2000
    },
    {
        "userId": "S7450757C",
        "createDate": "2021/10/17",
        "claimantName": "ANDIKA BIN TAUFAN",
        "policyName": "MyWholeLifePlan IV",
        "policyId": "AVIVA_LI_02",
        "policyNo": "AVIVA20211016",
        "claimType": "PERSONAL ACCIDENT",
        "claimStatus": "PASS",
        "claimAmount": 4500
    },
    {
        "userId": "S7450757C",
        "createDate": "2021/10/17",
        "claimantName": "BHASKAR NILAM GADHAVI",
        "policyName": "MyShield Integrated Shield Plan",
        "policyId": "AVIVA_HE_03",
        "policyNo": "AVIVA20211012",
        "claimType": "HEALTH",
        "claimStatus": "PASS",
        "claimAmount": 250
    }
]

const summarycards = [
    {
        _id: 1,
        claimstatus : "PASS",
        claimcount : 20
    },
    {
        _id: 2,
        claimstatus : "PENDING",
        claimcount : 70
    },
    {
        _id: 3,
        claimstatus : "REJECTED",
        claimcount : 15
    }
]

const summaryheaders = [
    {
        _id: 1,
        descripton : "OPEN CLAIMS",
        numVal : 20
    },
    {
        _id: 2,
        descripton : "INSPECTED CLAIMS",
        numVal : 70
    },
    {
        _id: 3,
        descripton : "PENDING PAYOUT",
        numVal : "$75,000"
    }
]

export {
    claimaintlist,
    summarycards,
    summaryheaders
}