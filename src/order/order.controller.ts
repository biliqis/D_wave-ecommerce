import { Request, Response, NextFunction } from "express";
import { cartService } from "../Cart/cart..service";
import { cartModel } from "../Cart/cart.model";
import { OrderDto } from "../utils/types/schema.type";
import { newCustomFunction } from "../utils/custom.function";
import { OrderService } from "./order.service";
const service = new OrderService();

export class Order {
  public createNewUserOrder = async (req: any | Request, res: Response) => {
    try {
      const userOrder = await service.myNewOrder(req.user._id);
      if (userOrder === "cart cannot be empty"){
        return res.status(404).json({message: userOrder})
      }
      return res
        .status(200)
        .json({ message: "order succesfully created", userOrder });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
  };
  public completeOrderController = async(req:Request, res:Response)=>{

  }
}
