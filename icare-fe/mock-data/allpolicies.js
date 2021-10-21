const policies = [
  {
    "id": 1001,
    "policy_company": "AXA",
    "policy_description": "Accidents do happen. Should you meet with one, rest assured that we have got your back.",
    "policy_link": "https://www.axa.com.sg/personal-accident/smart-pa-protect",
    "policy_name": "SmartPA Protect+ Personal Accident Insurance",
    "policy_type": "Personal Accident",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1002,
    "policy_company": "AXA",
    "policy_description": "Enhance your coverage with 6 optional benefits to customise your plan based on your needs.",
    "policy_link": "https://www.axa.com.sg/personal-accident/axa-band-aid",
    "policy_name": "AXA Band Aid Personal Accident Insurance",
    "policy_type": "Personal Accident",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1003,
    "policy_company": "AXA",
    "policy_description": "It offers you a wide range of benefits to cover your everyday healthcare needs, from pre-hospitalisation to post-hospitalisation.",
    "policy_link": "https://www.axa.com.sg/health-insurance/axa-shield",
    "policy_name": "AXA Shield",
    "policy_type": "Health",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1004,
    "policy_company": "AXA",
    "policy_description": "You deserve to focus on your recovery instead of worrying about the finances.",
    "policy_link": "https://www.axa.com.sg/health-insurance/prime-care?utm_source=health-category-page&utm_medium=banner&utm_campaign=prime-care",
    "policy_name": "Prime Care",
    "policy_type": "Health",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1005,
    "policy_company": "AXA",
    "policy_description": "A customisable whole life plan that offers flexibility to multiply your sum assured and enhance your critical illness coverage.",
    "policy_link": "https://www.axa.com.sg/life-insurance/axa-life-treasure-ii",
    "policy_name": "AXA Life Treasure (II)",
    "policy_type": "Life",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1006,
    "policy_company": "AXA",
    "policy_description": "AXA CritiCare for Her provides benefits that supports you from diagnosis to recovery.",
    "policy_link": "https://www.axa.com.sg/life-insurance/axa-criticare-for-her?utm_source=life-category-page&utm_medium=banner&utm_campaign=axa-criticare-for-her",
    "policy_name": "AXA CritiCare for Her",
    "policy_type": "Critical Illness",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1007,
    "policy_company": "AXA",
    "policy_description": "AXA CritiCare for Him provides benefits that supports you from diagnosis to recovery.",
    "policy_link": "https://www.axa.com.sg/life-insurance/axa-criticare-for-him?utm_source=life-category-page&utm_medium=banner&utm_campaign=axa-criticare-for-him",
    "policy_name": "AXA CritiCare for Him",
    "policy_type": "Critical Illness",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1024px-AXA_Logo.svg.png"
  },
  {
    "id": 1008,
    "policy_company": "AVIVA",
    "policy_description": "Our protection plan lets you pick the coverage type and price that’s suitable for you.",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/my-protector-term-plan-ii",
    "policy_name": "MyProtector-Term Plan II",
    "policy_type": "Life",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1009,
    "policy_company": "AVIVA",
    "policy_description": "MyWholeLifePlan IV is a whole life insurance plan that offers lifetime protection and living benefits such as bonuses that grow over time and cash value1 that you could tap into. ",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/my-whole-life-plan-iv",
    "policy_name": "MyWholeLifePlan IV",
    "policy_type": "Life",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1010,
    "policy_company": "AVIVA",
    "policy_description": "An additional cover that integrates and complements the benefits of MediShield Life to ensure wider and higher hospitalisation and medical coverage.",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/my-shield",
    "policy_name": "MyShield - Integrated Shield Plan",
    "policy_type": "Health",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1011,
    "policy_company": "AVIVA",
    "policy_description": "Add our MyHealthPlus rider to your MyShield plan for more healthcare benefits and worry less about out-of-pocket expenses.",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/myhealthplus",
    "policy_name": "MyHealthPlus - rider to MyShield",
    "policy_type": "Health",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1012,
    "policy_company": "AVIVA",
    "policy_description": "A plan that can replace the monthly income you lose if you become severely disabled.",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/ideal-income",
    "policy_name": "IdealIncome",
    "policy_type": "Disability",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1013,
    "policy_company": "AVIVA",
    "policy_description": "Enhance your disability insurance for higher payouts.",
    "policy_link": "https://www.aviva.com.sg/en/insurance/life-and-health/my-care-and-my-care-plus",
    "policy_name": "MyCare / MyCare Plus",
    "policy_type": "Disability",
    "policy_company_logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aviva_Logo.svg/1280px-Aviva_Logo.svg.png"
  },
  {
    "id": 1014,
    "policy_company": "MANULIFE",
    "policy_description": "A policy that reimburses them without any co-insurance or deductibles.",
    "policy_link": "https://www.manulife.com.sg/en/solutions/health/medical-and-hospitalisation/manucare.html",
    "policy_name": "ManuCare",
    "policy_type": "Medical and Hospitalization",
    "policy_company_logo" : "https://logodix.com/logo/484634.jpg"
  },
  {
    "id": 1015,
    "policy_company": "MANULIFE",
    "policy_description": "an affordable personal accident policy that starts from just S$2 a week.",
    "policy_link": "https://www.manulife.com.sg/en/solutions/health/accident/manulife-ready-protect.html",
    "policy_name": "ReadyProtect",
    "policy_type": "Personal Accident",
    "policy_company_logo" : "https://logodix.com/logo/484634.jpg"
  },
  {
    "id": 1016,
    "policy_company": "MANULIFE",
    "policy_description": "Starting with coverage for 106 conditions of all stages, from early to intermediate and advanced.",
    "policy_link": "https://www.manulife.com.sg/en/solutions/health/critical-illness/critical-selectcare.html",
    "policy_name": "Ready SelectCare",
    "policy_type": "Critical Illness",
    "policy_company_logo" : "https://logodix.com/logo/484634.jpg"
  },
  {
    "id": 1017,
    "policy_company": "MANULIFE",
    "policy_description": "ReadyMummy is a 3-year maternity plan that provides protection for the expecting mother.",
    "policy_link": "https://www.manulife.com.sg/en/solutions/health/maternity/ready-mummy.html",
    "policy_name": "ReadyMummy",
    "policy_type": "Life (Maternity)",
    "policy_company_logo" : "https://logodix.com/logo/484634.jpg"
  }
]

const policytypes = [
    {
      "id": 1,
      "policy_type" : "Life"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    },
    {
      "id": 2,
      "policy_type" : "Accident"
    }
]

const policycompanies = [
  {
    "id": 1,
    "policy_company" : "MANULIFE"
  },
  {
    "id": 2,
    "policy_company" : "AVIVA"
  }
]

const mypolicies = [
  {
    "_id":"615184f4c84ad3bad71abded",
    "policytype":"LIFE",
    "policyname":"AXA Life Treasure (II)",
    "policyId":"AXA_LTRE_02",
    "userId":"S6099358J",
    "policycompany":"AXA",
    "policyno":"AXA20210925",
    "startdate":"2020-01-01",
    "enddate":"2022-12-31",
    "status": "in-force",
    "advisorId":"S1872602A",
    "advisorname":"JACKIE CHAN",
    "advisormobile":"99876543",
    "email":"JC@AXA.com.sg",
    "maxclaimable":"200.00",
    "sumassured":"500,000.00",
    "username":"MaryAnn Lee"
  },
  {
    "_id":"615184f4c84ad3bad71abded",
    "policyId":"MANULIFE_LMC_04",
    "policycompany":"MANULIFE",
    "policytype":"LIFE",
    "policyname":"ReadyMummy",
    "policyno":"MNL20210102",
    "userId":"S6099358J",
    "startdate":"2020-02-01",
    "enddate":"2022-01-31",
    "status": "in-force",
    "advisorId":"S1772622B",
    "advisorname":"HARRY POTTER",
    "advisormobile":"99876544",
    "email":"harrypotter@manulife.com.sg",
    "maxclaimable":"1000.00",
    "sumassured":"10,000.00",
    "username":"MaryAnn Lee"
  },
  {
    "_id":"615184f4c84ad3bad71abded",
    "policyId":"AVIVA_HEALTH_01",
    "policycompany":"AVIVA",
    "policytype":"HEALTH",
    "policyname":"MyShield - Integrated Shield Plan",
    "policyno":"AVI20200325",
    "userId":"S6099358J",
    "startdate":"2020-03-01",
    "enddate":"2021-10-01",
    "status": "expired",
    "advisorId":"S1972642C",
    "advisorname":"SALT BAE",
    "advisormobile":"95678545",
    "email":"saltbae@aviva.com.sg",
    "maxclaimable":"200.00",
    "sumassured":"null",
    "username":"MaryAnn Lee"
  },
]

const result= "{\"_id\":\"6168501bd31ee5671abdddcb\",\"policytype\":\"LIFE\",\"policyname\":\"AXA Life Treasure (II)\",\"policyid\":\"AXA_LI_05\",\"userId\":\"S6099358J\",\"startdate\":\"2020-01-01\",\"enddate\":\"2022-12-31\",\"advisorId\":\"S1872602E\",\"advisorname\":\"JACKIE CHAN\",\"advisormobile\":\"99876543\",\"email\":\"JC@AXA.com.sg\",\"policyno\":\"AXA20210925\",\"status\":\"In force\",\"sumassured\":\"3000.00\",\"policycompany\":\"AXA\",\"maxclaimable\":\"1500.00\"},{\"_id\":\"6168533ad31ee5671abdddce\",\"policytype\":\"LIFE\",\"policyname\":\"MyProtector-Term Plan II\",\"policyid\":\"AVIVA_LI_01\",\"userId\":\"S6099358J\",\"startdate\":\"2021-09-01\",\"enddate\":\"2023-08-31\",\"advisorId\":\"S7572588D\",\"advisorname\":\"GONG YOO\",\"advisormobile\":\"97654321\",\"email\":\"GY@AVIVA.com.sg\",\"policyno\":\"AVIVA20210901\",\"status\":\"In force\",\"sumassured\":\"2000.00\",\"policycompany\":\"AVIVA\",\"maxclaimable\":\"1000.00\"}"

export {
    policies,
    policycompanies,
    policytypes,
    mypolicies,
}