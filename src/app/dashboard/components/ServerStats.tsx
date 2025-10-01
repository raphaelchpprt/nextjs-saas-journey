import { Card, CardHeader, CardBody } from '@/components/Card';

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default" size="sm">
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-300">👥 Users</h3>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-white">{stats.users}</p>
          <p className="text-sm text-gray-400 mt-2">Total registered users</p>
        </CardBody>
      </Card>

      <Card variant="highlighted">
        <CardHeader>
          <h3 className="text-lg font-semibold text-cyan-300">💰 Revenue</h3>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-white">{stats.revenue}</p>
          <p className="text-sm text-cyan-200 mt-2">
            Monthly recurring revenue
          </p>
        </CardBody>
      </Card>

      <Card variant={stats.tasks > 50 ? 'danger' : 'default'}>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-300">
            {stats.tasks > 50 ? '⚠️' : '✅'} Tasks
          </h3>
        </CardHeader>
        <CardBody>
          <p className="text-4xl font-bold text-white">{stats.tasks}</p>
          <p className="text-sm text-gray-400 mt-2">
            {stats.tasks > 50 ? 'High workload!' : 'Under control'}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
