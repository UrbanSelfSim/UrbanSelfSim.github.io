
document.addEventListener('DOMContentLoaded', function() {
  const applicationsDropdown = document.getElementById('applications-dropdown');
  const dropdownContent = applicationsDropdown.querySelector('.dropdown-content');

  applicationsDropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (event.target !== applicationsDropdown) {
      dropdownContent.classList.remove('show');
    }
  });
});


