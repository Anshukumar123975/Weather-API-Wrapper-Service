import axios from "axios" 
import redisClient from "../redisClient.js";

const getDataController = async(req, res) => {
    const { city } = req.body;
    const cacheKey = `weather:${city.toLowerCase()}`;
    try{
        const cacheData = await redisClient.get(cacheKey);
        if(cacheData){
            console.log("Cache data:", cacheData);
            return res.status(200).json({
                data: JSON.parse(cacheData)
            });
        }
        const apikey = process.env.API_KEY;
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
        const api = apiUrl + city + "&appid=" + apikey;
        let response = await axios.get(api);
        let temperature = response.data.main.temp;
        let tempInCelcius = temperature - 273;
        await redisClient.set(cacheKey, tempInCelcius, {EX: 300})
        res.status(201).json({
            message: "Data fetched successfully",
            temp: tempInCelcius,
        })
    }
    catch(error) {
        console.log("Error in fetching data from API", error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export {
    getDataController
}