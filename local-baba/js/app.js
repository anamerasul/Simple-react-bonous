// console.log('hello');
// const fruits = [{ name: 'pineapple' }, { name: 'mango' }, { name: 'papaya' }]

// const election = ['razzak', 'alamgir', 'jayed', 'jayed', 'jayed', 'nipun', 'jayed']

// const election2 = {
// razzak:1,
// alamgir:1,
// jasim:1,
// jayed:4
// }

let db = {};

const addToDb = item => {
    //3 way to add a object 
    // db.alam=1;


    // db['alam']=1;

    const storedTracker = localStorage.getItem('cheka-tracker')

    if (storedTracker) {

        db = JSON.parse(storedTracker)

    }

    if (item in db) {
        db[item] = db[item] + 1
    }

    else {
        db[item] = 1
    }


    console.log(db)
}

// addToDb('manna')
addToDb('bappa')
addToDb('bappa')
addToDb('bappa')
addToDb('bappa')
addToDb('jasim')
addToDb('jasim')
addToDb('jasim')
addToDb('mahi')
addToDb('manna')

localStorage.setItem('fruit', 'mango')
localStorage.setItem('age', 15)

localStorage.setItem('cheka-tracker', db)
localStorage.setItem('cheka-tracker', JSON.stringify(db))

localStorage.getItem('age')

console.log(typeof localStorage.getItem('age'))
console.log(localStorage.getItem('cheka-tracker'))
console.log(localStorage.getItem('cheka-tracker')['jasim'])
console.log(JSON.parse(localStorage.getItem('cheka-tracker'))['mahi'])

const removeItem = item => {

    const storedTracker = localStorage.getItem('cheka-tracker')
    if (storedTracker) {
        const storeObj = JSON.parse(storedTracker)
        delete storeObj[item];
        localStorage.setItem('cheka-tracker', JSON.stringify(storeObj))
    }

}

removeItem('manna')