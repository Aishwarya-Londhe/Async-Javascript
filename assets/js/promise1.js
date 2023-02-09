let cl = console.log;

function getAngularDev(skillSets) {
    // api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(skillSets.toLowerCase().includes("angular")) {
                resolve(`Candidate is shortlisted for Angular Profile...`)
            } else {
                reject("Candidate is not shortlisted yet...")
            }
        }, 3000);
    })
}

function firstTechInterview() {
    // api
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is shortlisted for 2nd Round`)
            } else {
                reject(`Candidate is rejected, He/She not having Basic skillsets`)
            }
        }, 1000);
    })
}

function secTechInterview() {
    // api
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if(result) {
                resolve(`Candidate is shortlisted for ML round`)
            }else {
                reject(`Candidate is good in basics but not able to execute`)
            }
        }, 500);
    })
}

function mlRound(){
    return new Promise((resolve, reject) => {
        let result = Math.random() >= .4 ? true : false;
        setTimeout(() => {
            if (result) {
                resolve(`Candidate is selected for given profile`)
            }else {
                reject(`Candidate is not able to explain about his/her previous Project`)
            }
        }, 500);
    })
}

let skillName = Math.random() >= .5 ? "Angular 15" : "React 18";
cl(skillName)

getAngularDev(skillName)
    .then((res) => {
        cl(res)
        return firstTechInterview() // returns promise
    })
    .then((res) => {
        cl(res)
        return secTechInterview() // returns promise
    })
    .then((res) => {
        cl(res)
        return mlRound()
    })
    .then((res) => {
        cl(res)
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 4000
          })
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 4000
          })
    })



    // Promise Chaining >> The process of executing sequence of async tasks/function one after another using Promise.