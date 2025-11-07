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

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const mobileHeader = document.getElementById('mobileHeader');

  function openSidebar() {
    if (sidebar && sidebarOverlay) {
      sidebar.classList.add('open');
      sidebarOverlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSidebar() {
    if (sidebar && sidebarOverlay) {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openSidebar);
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar when clicking a navigation link on mobile
  const navLinks = sidebar?.querySelectorAll('.nav-item');
  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 640) {
          closeSidebar();
        }
      });
    });
  }
});
