import { TypeSalesData } from "@/types/types";
import { BASEURL } from "@/utils/constants";

const checkReponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getSalesData = (): Promise<TypeSalesData> => {
  return fetch(BASEURL, {}).then(checkReponse<TypeSalesData>);
};
