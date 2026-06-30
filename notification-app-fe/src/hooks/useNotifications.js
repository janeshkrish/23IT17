import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/fetchNotifications";

export function useNotifications(page=1,filter) {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading,setLoading] = useState("false");
  const [error,setError] = useState("null");
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try{
        const data = await fetchNotifications(page,filter);
        setNotifications(data.notifications ?? []);
        setTotal(data.page ?? 0);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    };

    load();
  }, [page,filter]);
  return { notifications, total, totalPages, loading, error};
}
