import React from "react";
import axios from 'axios';
export function fetchNotifications() {
    try{
        const response = await.get('http://4.224.186.213/evaluation-service/notifications',
        {
            params:{
            page,filter
        }});
        return response.get(data);
    }catch(err){
        console.log("failed to fetch data",error);
        throw error;
    }
}
