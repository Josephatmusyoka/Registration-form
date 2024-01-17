const tabs = document.querySelectorAll('nav li');
const tabContent = document.querySelectorAll('.tab-content div');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Hide all tabs content
    tabContent.forEach(tc => tc.classList.remove('active'));
    // Show content of clicked tab
    tabContent[index].classList.add('active');
  });
});

// Additional JavaScript for other functionalities (e.g., chart interactions, dynamic data loading)
