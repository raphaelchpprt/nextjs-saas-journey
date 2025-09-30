'use client';
import { useState, useTransition } from 'react';
import { syncTasksWithCount } from '../action';

interface Props {
  initialCount: number;
}

export default function InteractiveWidget({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [lastSyncMessage, setLastSyncMessage] = useState<string>('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSyncToServer = () => {
    startTransition(async () => {
      const result = await syncTasksWithCount(count);

      if (result.success) {
        setLastSyncMessage(`✅ ${result.message}`);
        console.log('Synced to server:', result);

        setTimeout(() => setLastSyncMessage(''), 3000);
      }
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Interactive Widget</h2>

      <div className="mb-4">
        <p className="text-gray-300">
          Task count:{' '}
          <span className="text-cyan-400 font-bold text-3xl">{count}</span>
        </p>
        <p className="text-sm text-gray-400 mt-1">
          (Modify this value, then sync it to server tasks)
        </p>
      </div>

      {lastSyncMessage && (
        <div className="mb-4 p-3 bg-green-600/20 border border-green-600 rounded text-green-400 text-sm">
          {lastSyncMessage}
        </div>
      )}

      <div className="space-x-2 flex flex-wrap gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
          disabled={isPending}
        >
          ➕ Increment
        </button>

        <button
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
          disabled={isPending}
        >
          ➖ Decrement
        </button>

        <button
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
            isPending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleSyncToServer}
          disabled={isPending}
        >
          {isPending ? '⏳ Syncing...' : '💾 Sync to Server Tasks'}
        </button>

        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTheme}
          disabled={isPending}
        >
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <div
        className={`mt-4 p-4 rounded-xl transition-colors ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        <p className="font-semibold">📝 How it works:</p>
        <ol className="text-sm mt-2 space-y-1 list-decimal list-inside">
          <li>Modify the counter with +/- buttons</li>
          <li>Click &quot;Sync to Server Tasks&quot;</li>
          <li>Watch the ServerStats component update with your value!</li>
        </ol>
      </div>
    </div>
  );
}
