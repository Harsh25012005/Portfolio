export const createEmailTemplate = (subject?: string) => {
  const defaultSubject = subject || 'Project Inquiry - Portfolio Contact';
  
  const emailBody = `Hi Harsh,

I hope this email finds you well. I came across your portfolio and I'm interested in discussing a potential project.

Project Details:
- Project Type: 
- Timeline: 
- Budget Range: 

About Me/Company:
- Name: Vaghela Harsh
- Location: Gujarat
- Email: vaghelaharsh0807@gmail.com

Project Description:
[Please describe your project requirements, goals, and any specific features you need]

Additional Information:
[Any other relevant details or questions]

I look forward to hearing from you and discussing how we can work together.

Best regards,
Harsh Vaghela`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vaghelaharsh0807@gmail.com&su=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  return gmailUrl;
};

export const openEmailTemplate = (subject?: string) => {
  const emailUrl = createEmailTemplate(subject);
  window.open(emailUrl, '_blank');
};
