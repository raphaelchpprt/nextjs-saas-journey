'use client';

import { useState, useOptimistic, useTransition } from 'react';
import { Task, TaskFilter } from '../types';
import { toggleTaskAction, deleteTaskAction } from '../actions';
import { Card, CardBody } from '@/components/Card';

interface TaskListProps {
  initialTasks: Task[];
}

export default function TaskList({ initialTasks }: TaskListProps) {
  const [filter, setFilter] = useState<TaskFilter>('all');
  const [optimisticTasks, setOptimisticTasks] = useOptimistic(
    initialTasks,
    (state: Task[], action: { type: string; id: string }) => {
      switch (action.type) {
        case 'toggle':
          return state.map((task) =>
            task.id === action.id
              ? { ...task, completed: !task.completed }
              : task
          );
        case 'delete':
          return state.filter((task) => task.id !== action.id);
        default:
          return state;
      }
    }
  );
  const [, startTransition] = useTransition();

  // Filter tasks based on current filter
  const filteredTasks = optimisticTasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleToggle = async (id: string) => {
    startTransition(() => {
      setOptimisticTasks({ type: 'toggle', id });
      toggleTaskAction(id);
    });
  };

  const handleDelete = async (id: string) => {
    startTransition(() => {
      setOptimisticTasks({ type: 'delete', id });
      deleteTaskAction(id);
    });
  };

  const stats = {
    total: optimisticTasks.length,
    active: optimisticTasks.filter((t) => !t.completed).length,
    completed: optimisticTasks.filter((t) => t.completed).length,
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex justify-center gap-4">
        {(['all', 'active', 'completed'] as TaskFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === f
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === 'all' && ` (${stats.total})`}
            {f === 'active' && ` (${stats.active})`}
            {f === 'completed' && ` (${stats.completed})`}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card variant="default" size="md">
            <CardBody>
              <p className="text-center text-gray-400 py-8">
                {filter === 'all' && '🎉 No tasks yet! Add one above.'}
                {filter === 'active' && '✅ No active tasks!'}
                {filter === 'completed' && '📋 No completed tasks yet.'}
              </p>
            </CardBody>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              variant={task.completed ? 'default' : 'highlighted'}
              size="sm"
            >
              <CardBody>
                <div className="flex items-center gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleToggle(task.id)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? 'bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600'
                        : 'border-gray-600 hover:border-gray-700'
                    }`}
                    aria-label={
                      task.completed ? 'Mark as incomplete' : 'Mark as complete'
                    }
                  >
                    {task.completed && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </button>

                  {/* Task Title */}
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? 'line-through text-gray-500'
                        : 'text-white'
                    }`}
                  >
                    {task.title}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                    aria-label="Delete task"
                  >
                    ❌
                  </button>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
