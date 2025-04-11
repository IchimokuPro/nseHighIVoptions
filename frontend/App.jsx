import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://nse-high-iv-api.onrender.com/api/high-iv-options")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading IV data...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item, idx) => (
        <Card key={idx} className="shadow-lg">
          <CardContent className="space-y-2">
            <div className="text-xl font-semibold">{item.stock}</div>
            <div>Spot: ₹{item.spot}</div>
            <div>
              Strike: <span className="font-medium">₹{item.strike}</span> ({item.type})
            </div>
            <div>
              IV: <Badge variant="destructive">{item.iv}%</Badge>
            </div>
            <div>LTP: ₹{item.ltp}</div>
            <div>Volume: {item.volume}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}