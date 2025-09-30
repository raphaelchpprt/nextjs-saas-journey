interface Stats {
  users: number;
  revenue: string;
  tasks: number;
}

interface ServerStatsProps {
  stats: Stats;
}

export function ServerStats({ stats }: ServerStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <p className="text-3xl">{stats.users}</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Revenue</h2>
        <p className="text-3xl">{stats.revenue}</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <p className="text-3xl">{stats.tasks}</p>
      </div>
    </div>
  );
}
