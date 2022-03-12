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




module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}