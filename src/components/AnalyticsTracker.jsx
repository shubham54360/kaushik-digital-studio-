import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  initGA, 
  trackPageView, 
  trackScrollDepth, 
  trackPhoneClick, 
  trackEmailClick, 
  trackWhatsAppClick, 
  trackExternalLink 
} from '../utils/analytics';

export default function AnalyticsTracker() {
  const location = useLocation();
  const trackedDepths = useRef({ p25: false, p50: false, p75: false, p100: false });

  // 1. Initialize Google Analytics on mount
  useEffect(() => {
    initGA();
  }, []);

  // 2. Track page views when route changes
  useEffect(() => {
    trackPageView(location.pathname);
    // Reset scroll depth flags for the new route
    trackedDepths.current = { p25: false, p50: false, p75: false, p100: false };
  }, [location.pathname]);

  // 3. Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const totalScrollable = scrollHeight - clientHeight;
      if (totalScrollable <= 0) return;

      const percentage = Math.round((scrollTop / totalScrollable) * 100);

      if (percentage >= 25 && !trackedDepths.current.p25) {
        trackedDepths.current.p25 = true;
        trackScrollDepth(25);
      }
      if (percentage >= 50 && !trackedDepths.current.p50) {
        trackedDepths.current.p50 = true;
        trackScrollDepth(50);
      }
      if (percentage >= 75 && !trackedDepths.current.p75) {
        trackedDepths.current.p75 = true;
        trackScrollDepth(75);
      }
      if (percentage >= 99 && !trackedDepths.current.p100) { // Using 99% to capture bottom edge reliably
        trackedDepths.current.p100 = true;
        trackScrollDepth(100);
      }
    };

    // Use passive listener for scroll depth to keep website performance high
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 4. Global link click listener to track phone, email, WhatsApp, and external links automatically
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Track Phone clicks
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        trackPhoneClick(phone, location.pathname);
      }
      // Track Email clicks
      else if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        trackEmailClick(email, location.pathname);
      }
      // Track WhatsApp clicks
      else if (href.includes('wa.me') || href.includes('api.whatsapp.com') || href.includes('whatsapp.com')) {
        trackWhatsAppClick(href, location.pathname);
      }
      // Track External link clicks
      else if (href.startsWith('http://') || href.startsWith('https://')) {
        const isInternal = href.includes(window.location.hostname) || href.startsWith('/');
        if (!isInternal) {
          trackExternalLink(href);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [location.pathname]);

  return null;
}
