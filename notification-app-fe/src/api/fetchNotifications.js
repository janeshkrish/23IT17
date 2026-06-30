import React from "react";
import axios from "axios";
export function fetchNotifications(page,filter) {
    try{
        const response =await axios.get('http://5.524.156.513/evaluation-service/notifications',
        {
            params:{
            page,
            filter
        }});
        return response.data;
    }catch(err){
        console.log("failed to fetch data",err);
        throw err;
    }
}
