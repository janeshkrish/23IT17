import React from "react";
import {Card,CardContent,Typography} from "@mui/material";

export function NotificationCard({Notification}){
    return (
        <Card>
            <CardContent>
                <Typography>{Notification.type}</Typography>
                <Typography>{Notification.message}</Typography>
                <Typography>{new Date(Notification.timestamp).toLocalString()} </Typography>
            </CardContent>
        </Card>
    );
}
