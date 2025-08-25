 let foodOrder = new Promise(
    function (resolve, reject) {
        let isRestaurantOpen = true;
        if (isRestaurantOpen) {
            resolve("Order is ready")
        }
        else {
            reject("Sorry, Out of order")
        }
    }
)

async function placeOrder() {
    try {
        let result = await foodOrder;
        console.log("Resolved with ", result);
    
    }
    catch (error){
    console.log("Rejected with ",error)        
    }
}
placeOrder();