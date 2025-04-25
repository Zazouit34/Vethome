
import { Suspense } from 'react';
import ProfileVet from './profile-vet';

export default function VeterinaryProfile() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProfileVet />
    </Suspense>
  );
} 