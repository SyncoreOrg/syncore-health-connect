'use client';

import { Suspense, lazy, useEffect } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  useEffect(() => {
    // Inject CSS to hide Spline watermark
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Spline watermark - multiple selectors for different versions */
      [class*="watermark"],
      [id*="watermark"],
      a[href*="spline.design"],
      div[style*="position: absolute"][style*="bottom: 0"],
      div[style*="position: absolute"][style*="bottom: 10px"],
      div[style*="position: absolute"][style*="right: 0"],
      div[style*="position: absolute"][style*="right: 10px"],
      div[style*="pointer-events: none"][style*="position: absolute"],
      .spline-watermark,
      #spline-watermark {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      
      /* Hide any text containing "spline" */
      div:has(a[href*="spline.design"]) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // Also try to remove watermark with JavaScript after component loads
    const removeWatermark = () => {
      const watermarkSelectors = [
        'a[href*="spline.design"]',
        'div[style*="position: absolute"][style*="bottom"]',
        'div[style*="position: absolute"][style*="right"]',
        '[class*="watermark"]',
        '[id*="watermark"]'
      ];
      
      watermarkSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && (el.textContent?.toLowerCase().includes('spline') || 
                     el.getAttribute('href')?.includes('spline.design'))) {
            (el as HTMLElement).style.display = 'none';
            el.remove();
          }
        });
      });
    };

    // Run removal multiple times to catch dynamically added watermarks
    setTimeout(removeWatermark, 1000);
    setTimeout(removeWatermark, 3000);
    setTimeout(removeWatermark, 5000);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Suspense
        fallback={
          <div className={`w-full h-full flex items-center justify-center bg-gray-900 text-white ${className}`}>
            <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </div>
  );
}
