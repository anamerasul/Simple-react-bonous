// console.log('hello');
// const fruits = [{ name: 'pineapple' }, { name: 'mango' }, { name: 'papaya' }]

// const election = ['razzak', 'alamgir', 'jayed', 'jayed', 'jayed', 'nipun', 'jayed']

// const election2 = {
// razzak:1,
// alamgir:1,
// jasim:1,
// jayed:4
// }

const db = {};

const addToDb = item => {
    // db.alam=1;

    // db['alam']=1;

    db[item] = 1
    console.log(db)
}

addToDb('manna')