const claimlist = {
    "result": [
        {
            "claimId": {
                "id": "20",
                "long": 20
            },
            "userId": {
                "id": "S3100052A"
            },
            "policyId": {
                "id": "ML_PA_01"
            },
            "claimStatus": "REJECT",
            "rejectReason": {
                "rejectReason": "Overdue Premiums"
            },
            "claimDocumentId": {
                "id": "6",
                "long": 6
            },
            "policyNumber": "ML53750003",
            "claimAmount": 100,
            "createTime": "2021-10-16",
            "updateTime": "2021-10-16"
        },
        {
            "claimId": {
                "id": "21",
                "long": 21
            },
            "userId": {
                "id": "S3100052A"
            },
            "policyId": {
                "id": "AXA_PA_01"
            },
            "claimStatus": "PENDING",
            "rejectReason": {
                "rejectReason": null
            },
            "claimDocumentId": {
                "id": "7",
                "long": 7
            },
            "policyNumber": "AXA20220006",
            "claimAmount": 500,
            "createTime": "2021-10-17",
            "updateTime": "2021-10-17"
        },
        {
            "claimId": {
                "id": "22",
                "long": 22
            },
            "userId": {
                "id": "S3100052A"
            },
            "policyId": {
                "id": "AVIVA_LI_01"
            },
            "claimStatus": "PASS",
            "rejectReason": {
                "rejectReason": null
            },
            "claimDocumentId": {
                "id": "8",
                "long": 8
            },
            "policyNumber": "AVIVA20211014",
            "claimAmount": 9540,
            "createTime": "2021-10-09",
            "updateTime": "2021-10-09"
        }
    ]
};

const claimhistorylist = {
    "result": [
        {
            "claimHistoryId": {
                "id": "14",
                "long": 14
            },
            "claimId": {
                "id": "20",
                "long": 20
            },
            "userId": {
                "id": "S3100052A"
            },
            "claimDocumentId": {
                "id": "6",
                "long": 6
            },
            "claimAmount": 600,
            "claimStatus": "PASS",
            "rejectReason": {
                "rejectReason": ""
            },
            "createTime": "2021-10-14",
            "updateTime": "2021-10-14"
        },
        {
            "claimHistoryId": {
                "id": "15",
                "long": 15
            },
            "claimId": {
                "id": "20",
                "long": 20
            },
            "userId": {
                "id": "S3100052A"
            },
            "claimDocumentId": {
                "id": "6",
                "long": 6
            },
            "claimAmount": 9999,
            "claimStatus": "REJECT",
            "rejectReason": {
                "rejectReason": "Overdue Premiums"
            },
            "createTime": "2021-10-15",
            "updateTime": "2021-10-15"
        },
        {
            "claimHistoryId": {
                "id": "16",
                "long": 16
            },
            "claimId": {
                "id": "20",
                "long": 20
            },
            "userId": {
                "id": "S3100052A"
            },
            "claimDocumentId": {
                "id": "6",
                "long": 6
            },
            "claimAmount": 9999,
            "claimStatus": "PENDING",
            "rejectReason": {
                "rejectReason": ""
            },
            "createTime": "2021-10-16",
            "updateTime": "2021-10-16"
        }
    ]
}

export {
    claimlist,
    claimhistorylist
}