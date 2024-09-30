import { IProductRegister } from "@/interfaces/productRegister";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const postProductRegister = async (data: IProductRegister) => {
  try {
    const response = await axios.post(`${apiUrl}/register-product`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// import { IProductRegister } from "@/interfaces/productRegister";
// import axios from "axios";

// export const postProductRegister = async (data: IProductRegister) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/register-product",
//       data
//     );
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
