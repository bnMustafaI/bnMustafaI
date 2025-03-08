
document.addEventListener('DOMContentLoaded', function() {
  // Admin credentials (in a real app, this would be handled server-side)
  const adminUser = "admin";
  const adminPass = "12345";
  
  // DOM Elements
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');
  const menuOverlay = document.getElementById('menuOverlay');
  const loginBtn = document.getElementById('loginBtn');
  const loginContainer = document.getElementById('loginContainer');
  const closeLogin = document.getElementById('closeLogin');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminPanel = document.getElementById('adminPanel');
  const logoutBtn = document.getElementById('logoutBtn');
  
  // Content Editor Elements
  const contentEditor = document.getElementById('contentEditor');
  const editorTitle = document.getElementById('editorTitle');
  const editorContent = document.getElementById('editorContent');
  const saveContent = document.getElementById('saveContent');
  const cancelEdit = document.getElementById('cancelEdit');
  const editAnaSayfa = document.getElementById('editAnaSayfa');
  const editDuyurular = document.getElementById('editDuyurular');
  const editKisacaBen = document.getElementById('editKisacaBen');
  const changeTheme = document.getElementById('changeTheme');
  const changePassword = document.getElementById('changePassword');
  
  // Current section being edited
  let currentSection = '';
  
  // Toggle mobile menu
  hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  menuOverlay.addEventListener('click', function() {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  });
  
  // Show login modal
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginContainer.classList.add('active');
  });
  
  // Close login modal
  closeLogin.addEventListener('click', function() {
    loginContainer.classList.remove('active');
  });
  
  // Handle login form submission
  adminLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === adminUser && password === adminPass) {
      loginContainer.classList.remove('active');
      adminPanel.style.display = 'block';
      // Reset form
      adminLoginForm.reset();
    } else {
      alert('Hatalı kullanıcı adı veya şifre!');
    }
  });
  
  // Logout from admin panel
  logoutBtn.addEventListener('click', function() {
    adminPanel.style.display = 'none';
  });
  
  // Edit content functions
  function openEditor(title, section) {
    currentSection = section;
    editorTitle.textContent = title;
    
    // Get content from the section
    let content = '';
    if (section === 'anasayfa') {
      content = document.querySelector('#anasayfa .about-me').innerHTML;
    } else if (section === 'duyurular') {
      content = document.querySelector('#duyurular .announcements').innerHTML;
    } else if (section === 'kisaca-ben') {
      content = document.querySelector('#kisaca-ben .about-section').innerHTML;
    }
    
    editorContent.value = content;
    contentEditor.classList.add('active');
  }
  
  // Edit sections
  editAnaSayfa.addEventListener('click', function() {
    openEditor('Ana Sayfa Düzenle', 'anasayfa');
  });
  
  editDuyurular.addEventListener('click', function() {
    openEditor('Duyurular Düzenle', 'duyurular');
  });
  
  editKisacaBen.addEventListener('click', function() {
    openEditor('Kısaca Ben Düzenle', 'kisaca-ben');
  });
  
  // Save content changes
  saveContent.addEventListener('click', function() {
    const newContent = editorContent.value;
    
    if (currentSection === 'anasayfa') {
      document.querySelector('#anasayfa .about-me').innerHTML = newContent;
    } else if (currentSection === 'duyurular') {
      document.querySelector('#duyurular .announcements').innerHTML = newContent;
    } else if (currentSection === 'kisaca-ben') {
      document.querySelector('#kisaca-ben .about-section').innerHTML = newContent;
    }
    
    contentEditor.classList.remove('active');
    alert('İçerik başarıyla güncellendi!');
  });
  
  // Cancel edit
  cancelEdit.addEventListener('click', function() {
    contentEditor.classList.remove('active');
  });
  
  // Change theme
  changeTheme.addEventListener('click', function() {
    const root = document.documentElement;
    const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    
    // Toggle between sky blue and pink theme
    if (currentPrimary === '#87CEEB') {
      root.style.setProperty('--primary-color', '#FFB6C1'); // Light Pink
      root.style.setProperty('--secondary-color', '#FFC0CB'); // Pink
      root.style.setProperty('--accent-color', '#FF69B4'); // Hot Pink
    } else {
      root.style.setProperty('--primary-color', '#87CEEB'); // Sky Blue
      root.style.setProperty('--secondary-color', '#ADD8E6'); // Light Blue
      root.style.setProperty('--accent-color', '#1E90FF'); // Dodger Blue
    }
  });
  
  // Change password (simplified for demo)
  changePassword.addEventListener('click', function() {
    const newPassword = prompt('Yeni şifre giriniz:');
    if (newPassword && newPassword.length > 0) {
      alert('Şifre başarıyla değiştirildi! (Not: Bu bir demo olduğu için şifre gerçekten değişmedi.)');
    }
  });
});
