'use client';

import { useRef, useTransition } from 'react';
import { addTaskAction } from '../actions';
import { Card, CardBody } from '@/components/Card';

export default function TaskForm() {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await addTaskAction(formData);

      if (result.success) {
        formRef.current?.reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    });
  };

  return (
    <Card variant="default" size="md">
      <CardBody>
        <form ref={formRef} action={handleSubmit} className="flex gap-4">
          <input
            type="text"
            name="title"
            placeholder="Add a new task..."
            required
            minLength={1}
            maxLength={200}
            disabled={isPending}
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
          >
            {isPending ? '⏳ Adding...' : '＋ Add Task'}
          </button>
        </form>
      </CardBody>
    </Card>
  );
}
