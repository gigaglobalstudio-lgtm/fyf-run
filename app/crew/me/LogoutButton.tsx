'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/crew/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };
  return (
    <button onClick={handleLogout} className="btn-outline">
      LEAVE THE BUNKER
    </button>
  );
}
