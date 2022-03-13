const { nameMenuItem } = require("./meal");

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  } else {
    return
  };
}

function refundOrder(order, deliveryOrders) {
  let deleteIndex;
  for (var i = 0; i < deliveryOrders.length; i++) {
    let temp = deliveryOrders[i].orderNumber;
        if (temp === order) {
      deleteIndex = i
    }
  }
  deliveryOrders.splice(deleteIndex,1)
} 

function listItems(deliveryOrders) {
  let orderName = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderName.push(deliveryOrders[i].item);
  };
  return orderName.join(', ');
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}