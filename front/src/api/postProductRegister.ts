import { IProductRegister } from "@/interfaces/productRegister";
import axios from "axios";

export const postProductRegister = async (data: IProductRegister) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/register-product",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
