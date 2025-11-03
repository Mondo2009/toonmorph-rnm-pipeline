import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MONTHLY_MINUTES_CAP } from '../lib/constants';

export default function Dashboard() {
  const [episodes, setEpisodes] = useState([]);
  const [minutesUsed, setMinutesUsed] = useState(0);

  useEffect(() => {
    // Placeholder demo data
    setEpisodes([{ id: 'demo-1', title: 'Portal Trouble', duration: 2 }]);
    setMinutesUsed(4);
  }, []);

  const remaining = Math.max(MONTHLY_MINUTES_CAP - minutesUsed, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="card flex items-center justify-between">
        <div>
          <div className="text-white/80">Monthly Render Cap</div>
          <div className="text-xl font-bold">{remaining} / {MONTHLY_MINUTES_CAP} minutes remaining</div>
        </div>
        <Link href="/subscribe" className="tm-button">Manage Subscription</Link>
      </div>

      <div className="space-y-3">
        {episodes.map(ep => (
          <div key={ep.id} className="card flex items-center justify-between">
            <div>
              <div className="font-bold">{ep.title}</div>
              <div className="text-white/60 text-sm">{ep.duration} minutes</div>
            </div>
            <div className="flex gap-3">
              <Link href={`/view/${ep.id}`} className="tm-button">View</Link>
              <Link href={`/create?from=${ep.id}`} className="tm-button">Duplicate</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
