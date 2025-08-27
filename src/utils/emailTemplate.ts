const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const createEmailTemplate = (subject?: string) => {
  const defaultSubject = subject || 'Project Inquiry - Portfolio Contact';
  
  const emailBody = `
`;

  // For mobile devices, use Gmail app deep link
  if (isMobileDevice()) {
    const gmailAppUrl = `googlegmail://co?to=vaghelaharsh0807@gmail.com&su=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(emailBody)}`;
    return gmailAppUrl;
  }
  
  // For desktop, use web Gmail
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  return gmailWebUrl;
};

export const openEmailTemplate = (subject?: string) => {
  const emailUrl = createEmailTemplate(subject);
  
  if (isMobileDevice()) {
    // Try Gmail app first, fallback to mailto if app not installed
    window.location.href = emailUrl;
    
    // Fallback to mailto after a short delay if Gmail app doesn't open
    setTimeout(() => {
      const mailtoUrl = `mailto:vaghelaharsh0807@gmail.com?subject=${encodeURIComponent(subject || 'Project Inquiry - Portfolio Contact')}&body=${encodeURIComponent(`

`)}`;
      window.location.href = mailtoUrl;
    }, 1000);
  } else {
    window.open(emailUrl, '_blank');
  }
};

// Global function to handle any email click throughout the website
export const handleEmailClick = (event?: Event, customSubject?: string) => {
  if (event) {
    event.preventDefault();
  }
  openEmailTemplate(customSubject || 'Contact from Portfolio');
};

// Function to initialize email click handlers globally
export const initializeEmailHandlers = () => {
  // Handle all mailto links
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href^="mailto:vaghelaharsh0807@gmail.com"]');
    
    if (link) {
      event.preventDefault();
      const href = link.getAttribute('href') || '';
      const urlParams = new URLSearchParams(href.split('?')[1] || '');
      const subject = urlParams.get('subject') || 'Contact from Portfolio';
      openEmailTemplate(subject);
    }
  });
};
