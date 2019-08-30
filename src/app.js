const MyPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve('200 OK'); 
        // reject('401 Unauthorized');
    }, 2000);
});

/**
 * Default sem Es6
 */
MyPromise()
   .then(response => { console.log(response); })
   .catch(error => { console.log(error); });   
