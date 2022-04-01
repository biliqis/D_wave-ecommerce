import { Order } from "./order.controller";
import { cartService } from "../Cart/cart..service";
import { newCustomFunction } from "../utils/custom.function";
import { cartModel } from "../Cart/cart.model";
import orderSchema from "./order.model"

export class OrderService {
  public myNewOrder = async (id:string) => {
    let userCart = [];
    const newUserCart = await cartService.getUserCart(id);
    if (newUserCart.length === 0) {
    return "cart cannot be empty"
    }
    console.log(newUserCart);
    const newOrder = new orderSchema({
      amount: newCustomFunction(newUserCart),
      quantity: newUserCart.length,
      userId:id,
      products: newUserCart,
    });
    await newOrder.save();
    await cartModel.deleteMany({userId:id})
    return newOrder
  };

  public completeOrderService = async()=>{

  }
}
