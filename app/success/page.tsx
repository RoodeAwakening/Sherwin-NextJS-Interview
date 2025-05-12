'use client';
import { useSearchParams } from 'next/navigation';

function Success() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName') || '';
  const lastName = searchParams.get('lastName') || '';

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Success!</h1>
      <p className="text-lg">
        Thank You, {firstName} {lastName} for your interest.
      </p>
    </div>
  );
}

export default Success;
