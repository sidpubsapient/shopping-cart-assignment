import axios from "../../config/axiosConfig";

export const addItemToCart = async () => {
    try {
        const response = await axios.post("/addToCart");
        if (response.status === 200) {
            return response.data;
        }
        console.log("Something went wrong.");
    } catch (error) {
        throw "Error : Unable to add items to cart.";
    }
};