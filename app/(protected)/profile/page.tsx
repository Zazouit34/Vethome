
import { Suspense } from 'react';
import ProfileVetReservation from './profile-vet-reservation';

export default function VeterinaryProfile() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProfileVetReservation />
    </Suspense>
  );
} 