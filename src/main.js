document.addEventListener('DOMContentLoaded', () => { 
    const elements = document.querySelectorAll('p, a, li, ul, nav, span, img, h1, h2, h3, h4, h5, h6');
   
    elements.forEach(element => {
      element.classList.add('fade-in');
    });
  
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
  
    const handleScroll = () => {
      elements.forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    };
   
    window.addEventListener('scroll', handleScroll);
    handleScroll();  
  });

  function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none'; 
}