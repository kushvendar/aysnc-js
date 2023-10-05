// // create a stock object

let stock={
    fruits:['strawberry','apple','banana','grapes'],
    liquid:['water','ice'],
    holder:['cone','cups','sticks'],
    toppings:['choclate','cashew','peanuts']
}

// find out if shop is open or not
let is_open=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('the shop is closed'))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stock.fruits[1]}`)

        await time(0)
        console.log(`start production`)

        await time(2000)
        console.log(`cut the ${stock.fruits[0]}`)

        await time(1000)
        console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]}`)

        await time(1000)
        console.log(`start the machine`)

        await time(2000)
        console.log(`${stock.holder[0]} or ${stock.holder[1]} or ${stock.holder[1]} selected`)

        await time(3000)
        console.log(`select from the given toppings ${stock.toppings[0]},${stock.toppings[1]},${stock.toppings[2]}`)

        await time(2000)
        console.log(`serving the ice-cream`)

    }
    catch{
        console.log("customer left")
    }
    finally{
        console.log('we are closed now')
    }
}

kitchen()
let order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(is_open){
        setTimeout(()=>{
            resolve(work())
        },time)
        }
        else{
        reject(console.log('oh sorry shop is closed today'))
            }
    })
    
}

order(2000,()=>{console.log(`${stock.fruits[0]} is picked`)})

.then(()=>{
    return order(0,()=>{console.log(`production is started`)})
})

.then(()=>{
    return order(2000,()=>{console.log(`cut the ${stock.fruits[0]}`)})
})

.then(()=>{
    return order(1000,()=>{console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]}`)})
})

.then(()=>{
    return order(1000,()=>{console.log(`start the machine`)})
})

.then(()=>{
    return order(2000,()=>{console.log(`${stock.holder[0]} or ${stock.holder[1]} or ${stock.holder[1]} selected`)})
})

.then(()=>{
    return order(3000,()=>{console.log(`select from the given toppings ${stock.toppings[0]},${stock.toppings[1]},${stock.toppings[2]}`)})
})

.then(()=>{
    return order(2000,()=>{console.log(`serving the ice-cream`)})
})

.catch(()=>{
    console.log('customer left')
})

.finally(()=>{
    console.log('I wILl ExzEcuTe AnYLKJS')
})

// async and await


async function order(){
    try {
        await xyz;
    }
    catch(error){
        console.log('xyz does not exist')
    }
    finally{
        console.log('this will execute anyways')
    }
}

// can also use promise chaining with async and await
order().then(()=>{
    console.log('this is a part of the chain')
})
order()






let order=(fruit,call_production)=>{
setTimeout(()=>{
    console.log(` 1 ${stock.fruits[fruit]}`)
    call_production()
},2000)
}

let production=(cut_fruits)=>{
    setTimeout(()=>{
    console.log(' 2 order received of fruits')
    setTimeout(()=>{
        console.log('3 cutting the fruits')
        setTimeout(()=>{
            console.log(`4 ${stock.liquid[0]} and ${stock.liquid[1]} was added`)
            setTimeout(()=>{
                console.log('5 start the machine')
                setTimeout(()=>{
                    console.log(`6 ${stock.holder[0]} or ${stock.holder[1]} or ${stock.holder[1]} selected`)
                    setTimeout(()=>{
                        console.log(`7 select from the given toppings ${stock.toppings[0]},${stock.toppings[1]},${stock.toppings[2]}`)
                        setTimeout(()=>{
                        console.log(`8 serving the ice cream`)
                        },2000)
                    },3000)
                    }
                    ,2000)
                }
                ,1000)
            }
            ,1000)
        }
        ,2000)
    }
   ,0)
}

let cutFruits=()=>{

}
order(0,production)

// solution of this callback hell are promises in js used as await and asyn keyword