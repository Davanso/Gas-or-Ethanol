function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
  
  document.getElementById('translateButton').addEventListener('click', function () {
    const widget = document.getElementById('google_translate_element');
    if (widget.style.display === 'none' || widget.style.display === '') {
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  });
  