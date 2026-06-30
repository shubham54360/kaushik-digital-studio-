export const GA_MEASUREMENT_ID = 'G-C1N2XM3JN2';

// 1. Load Google Analytics script dynamically exactly once
export const initGA = () => {
  if (typeof window === 'undefined') return;
  if (window.gtag) return; // Already initialized

  // Inject tracking tag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Setup dataLayer global object
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  
  // Disable default automated pageview since we route with React Router 
  // and trigger page view events manually to prevent duplicates/incorrect parameters.
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true
  });

  // Track Session Start & First Visit automatically on initial setup
  trackEvent('session_start');
  trackEvent('first_visit');
};

// 2. Core tracking utility
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Send event to Google Analytics
    window.gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString()
    });
  }
};

// 3. Helper tracking functions
export const trackPageView = (path, title = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
};

export const trackButtonClick = (buttonName, pageName) => {
  trackEvent('button_click', {
    button_name: buttonName,
    page_name: pageName,
  });
};

export const trackWhatsAppClick = (source, pageName) => {
  trackEvent('whatsapp_click', {
    click_source: source,
    page_name: pageName,
  });
};

export const trackContactForm = (actionType, formType = 'general') => {
  trackEvent('contact_form_submission', {
    action: actionType, // 'start', 'submit_success', 'submit_failure'
    form_type: formType,
  });
};

export const trackPackageSelection = (packageName, price) => {
  trackEvent('package_selection', {
    package_name: packageName,
    package_price: price,
  });
};

export const trackProjectVisit = (projectName) => {
  trackEvent('project_visit', {
    project_name: projectName,
  });
};

export const trackPhoneClick = (phoneNum, pageName) => {
  trackEvent('phone_click', {
    phone_number: phoneNum,
    page_name: pageName,
  });
};

export const trackEmailClick = (emailAddr, pageName) => {
  trackEvent('email_click', {
    email_address: emailAddr,
    page_name: pageName,
  });
};

export const trackQRCodeClick = (cardType) => {
  trackEvent('qr_code_click', {
    card_type: cardType,
  });
};

export const trackNavClick = (itemName) => {
  trackEvent('nav_click', {
    menu_item: itemName,
  });
};

export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    depth_percentage: percentage,
  });
};

export const trackExternalLink = (url) => {
  trackEvent('external_link_click', {
    destination_url: url,
  });
};

export const trackDemoEnquiry = (method) => {
  trackEvent('demo_enquiry_99', {
    enquiry_method: method, // 'whatsapp' or 'contact_page'
  });
};
