import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility to check if animations should be disabled
export function shouldDisableAnimations(): boolean {
  // Check if user prefers reduced motion
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Check if device is mobile (small screen)
    const isMobile = window.innerWidth < 768
    
    // Disable animations on mobile or if user prefers reduced motion
    return isMobile || prefersReducedMotion
  }
  
  return false
}

// Hook to get animation props based on device and preferences
export function getAnimationProps(
  initial: any = { opacity: 0 },
  animate: any = { opacity: 1 },
  transition: any = { duration: 0.5 }
) {
  if (shouldDisableAnimations()) {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    }
  }
  
  return { initial, animate, transition }
}

// Mobile detection utility
export function isMobileDevice(): boolean {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768
  }
  return false
} 