let stocks = {
    fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate","peanuts"]
};

let is_shop_open = true;

let order = (work,ms) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open) {
            setTimeout(()=>{resolve(work)},ms)
        } else {
            reject(console.log("The shop is closed"))
        }
    })
}

order(console.log("Start placing order"),2000)
.then(() => {return order(console.log("Start placing order"),2000)});

//async await
/* function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open) {
            setTimeout(resolve,ms)
        } else {
            reject(console.log("The shop is closed"))
        };
    });
};

async function kitchen() {
    try {
        await time(2000)
        console.log("Order was placed")
        await time(0000) // optional
        console.log("Starting production")
        await time(2000)
        console.log(`${stocks.fruits[0]} was added`)
        await time(1000)
        console.log(`${stocks.liquid[0]} was added`)
        await time(1000)
        console.log("start the machine")
        await time(2000)
        console.log(`Ice cream was placed in ${stocks.holder[0]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} was added`)
        await time(2000)
        console.log("Ice cream served")
    }
    catch(error) {
        console.log("Customer left", error)
    }
    finally {
        console.log("Day ended, shop is closed")
    }
}

kitchen() */