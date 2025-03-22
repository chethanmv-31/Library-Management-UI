'use client'
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  if (!authService.requireAuth(() => router.push('/login'))) {
    return null;
  }

  return <>{children}</>;
};