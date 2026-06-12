'use client';

import { useScrollProgress } from '@/lib/animations';

export default function ScrollProgress() {
  useScrollProgress();

  return <div id="scroll-progress" className="scroll-progress" />;
}
