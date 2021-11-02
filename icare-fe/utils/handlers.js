import * as Yup from 'yup';

function getUnique(value, index, self){
    return self.indexOf(value) === index;
}

function todayYYYYMMDD(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

function sortObject(unordered) {
    return (
        Object.keys(unordered).sort().reduce(
            (obj,key) => {
                obj[key] = unordered[key];
                return obj;
            }, {}
        )
    )
}

function transposeObject(ogObject){
    const result = Object.keys(ogObject).map(key => ({ key, value: ogObject[key] }))
    return (result)
}



export {
    getUnique,
    todayYYYYMMDD,
    sortObject,
    transposeObject,
}