document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a.external-link').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer');
  });
});