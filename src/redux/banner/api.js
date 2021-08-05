import axios from "../../config/axiosConfig";

export const getBanners = async () => {
    try {
        const response = await axios.get("/banners");
        if (response.status === 200) {
            return response.data;
        }
        console.log("Something went wrong.");
    } catch (error) {
        throw "Error : Unable to retrieve banners.";
    }
};