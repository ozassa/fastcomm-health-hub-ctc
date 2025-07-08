export const scrollToContact = () => {
  console.log('🔥 scrollToContact function called!');
  
  // Debug: List all elements with IDs
  const allElementsWithIds = document.querySelectorAll('[id]');
  console.log('📋 All elements with IDs:', Array.from(allElementsWithIds).map(el => `${el.tagName}#${el.id}`));
  
  // Try multiple ways to find the contact section
  let contactSection = document.getElementById('contact-section');
  console.log('🎯 contact-section element:', contactSection);
  
  if (!contactSection) {
    console.log('❌ contact-section ID not found, trying footer with ID contact');
    contactSection = document.getElementById('contact');
    console.log('🎯 contact element:', contactSection);
  }
  
  if (!contactSection) {
    console.log('❌ contact ID not found, trying alternative selectors');
    // Try to find by form or contact-related classes
    contactSection = document.querySelector('[aria-labelledby="contact-title"]') as HTMLElement;
    console.log('🎯 aria-labelledby element:', contactSection);
  }
  
  if (!contactSection) {
    contactSection = document.querySelector('footer') as HTMLElement;
    console.log('🎯 footer element:', contactSection);
  }
  
  if (contactSection) {
    console.log('✅ Contact section found! Scrolling to:', contactSection);
    console.log('📍 Element position:', contactSection.getBoundingClientRect());
    
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Alternative scroll method as backup
    setTimeout(() => {
      const rect = contactSection.getBoundingClientRect();
      const top = window.pageYOffset + rect.top;
      console.log('🔄 Backup scroll to position:', top);
      window.scrollTo({
        top: top - 100, // Add some padding
        behavior: 'smooth'
      });
    }, 100);
    
  } else {
    console.log('❌ Contact section not found anywhere! Scrolling to bottom');
    console.log('📏 Document height:', document.body.scrollHeight);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
};

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};