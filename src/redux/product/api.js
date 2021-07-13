import axios from "../../config/axiosConfig";

export const getProducts = async () => {
    try {
        const response = await axios.get("/products");
        if (response.status === 200) {
            return response.data;
        }
        console.log("Something went wrong.");
    } catch (error) {
        throw "Error : Unable to retrieve products.";
    }
};