import { describe, it, expect } from 'vitest';

describe('Contact Form Validation Rules', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it('validates business email format correctly', () => {
    expect(emailRegex.test('architect@viezai.com')).toBe(true);
    expect(emailRegex.test('shikamaru@leaf.enterprise.org')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
    expect(emailRegex.test('missing-domain@')).toBe(false);
    expect(emailRegex.test('@missing-user.com')).toBe(false);
    expect(emailRegex.test('spaces in@domain.com')).toBe(false);
  });

  it('enforces required field constraints', () => {
    const validateFields = (data: { fullName: string; workEmail: string; companyName: string }) => {
      const errors: Record<string, string> = {};
      if (!data.fullName.trim()) errors.fullName = 'Full name is required';
      if (!data.workEmail.trim()) {
        errors.workEmail = 'Work email is required';
      } else if (!emailRegex.test(data.workEmail)) {
        errors.workEmail = 'Invalid email';
      }
      if (!data.companyName.trim()) errors.companyName = 'Company name is required';
      return errors;
    };

    const emptyResult = validateFields({ fullName: '', workEmail: '', companyName: '' });
    expect(Object.keys(emptyResult).length).toBe(3);
    expect(emptyResult.fullName).toBeDefined();
    expect(emptyResult.workEmail).toBeDefined();
    expect(emptyResult.companyName).toBeDefined();

    const validResult = validateFields({
      fullName: 'Kakashi Hatake',
      workEmail: 'kakashi@viezai.com',
      companyName: 'ViezAI Systems',
    });
    expect(Object.keys(validResult).length).toBe(0);
  });
});
