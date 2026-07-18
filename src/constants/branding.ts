const CURRENT_YEAR = new Date().getFullYear();
const BRAND_NAME = 'UpEducative';

export const BRANDING = {
  name: BRAND_NAME,
  logo: './UpEducativeLogo.png',
  logoAlt: BRAND_NAME,
  tagline: 'Empowering students with premium internship and training opportunities.',
  email: 'upeducative@gmail.com',
  supportEmail: 'support@upeducative.com',
  primaryPhone: '+91 77310 70103',
  supportPhone: '+91 9876 543 210',
  address: 'Patna, India',
  supportAddress: 'Bangalore, India',
  themeStorageKey: 'upeducative-ui-theme',
  copyright: `© ${CURRENT_YEAR} ${BRAND_NAME}. All rights reserved.`,
} as const;
