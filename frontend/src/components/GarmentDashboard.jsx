import React, { useEffect, useSate } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";

export default function GarmentDashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/garments")
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <XAxis dataKey="garment_name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="yardage_used" fill="#8884d4" />
                    <Bar dataKey="waste_percentage" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}