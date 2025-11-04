document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  
  // Apply saved theme on page load - default is light
  try {
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme); // Debug log
    
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      console.log('Applied dark mode');
    } else {
      // Ensure light mode (default)
      body.classList.remove('dark-mode');
      console.log('Applied light mode (default)');
    }
  } catch (e) {
    console.error('Error accessing localStorage:', e);
  }
  
  // Theme toggle functionality (only on home page)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Save preference
      const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', currentTheme);
        console.log('Theme saved:', currentTheme);
      } catch (e) {
        console.error('Error saving theme:', e);
      }
    });
  }

  // Email copy functionality
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    const email = 'amiyamandal3092@gmail.com';
    const copiedText = emailBtn.querySelector('.copied-text');
    const copyIcon = emailBtn.querySelector('.copy-icon');

    emailBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      
      try {
        await navigator.clipboard.writeText(email);
        
        // Show "Copied!" message
        if (copiedText && copyIcon) {
          copiedText.classList.add('show');
          copyIcon.style.display = 'none';
          
          // Hide after 2 seconds
          setTimeout(() => {
            copiedText.classList.remove('show');
            copyIcon.style.display = 'block';
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }
});

