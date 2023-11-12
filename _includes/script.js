
// 获取应用菜单项
const applicationsDropdown = document.getElementById('applications-dropdown');
// 获取应用下拉菜单
const dropdownContent = applicationsDropdown.querySelector('.dropdown-content');

// 点击应用菜单项时显示/隐藏下拉菜单
applicationsDropdown.addEventListener('click', function(event) {
  event.stopPropagation(); // 阻止事件冒泡
  dropdownContent.classList.toggle('show'); // 切换下拉菜单的显示状态
});

// 点击页面其他位置时隐藏下拉菜单
document.addEventListener('click', function(event) {
  if (event.target !== applicationsDropdown) {
    dropdownContent.classList.remove('show'); // 隐藏下拉菜单
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var applicationsDropdown = document.getElementById('applications-dropdown');
  var dropdownContent = applicationsDropdown.querySelector('.dropdown-content');

  applicationsDropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
  });
});

