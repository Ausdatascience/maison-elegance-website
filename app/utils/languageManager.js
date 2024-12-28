// 获取默认语言
export const getDefaultLanguage = () => {
  if (typeof window === 'undefined') return 'zh';
  
  const systemLang = navigator.language || navigator.userLanguage;
  const storedLang = localStorage.getItem('preferredLanguage');
  return storedLang || (systemLang.startsWith('zh') ? 'zh' : 'en');
};

// 保存语言偏好
export const saveLanguagePreference = (lang) => {
  localStorage.setItem('preferredLanguage', lang);
};

// 切换语言
export const toggleLanguage = (currentLang) => {
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  saveLanguagePreference(newLang);
  return newLang;
}; 