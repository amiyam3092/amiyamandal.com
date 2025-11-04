document.addEventListener('DOMContentLoaded', function() {
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
