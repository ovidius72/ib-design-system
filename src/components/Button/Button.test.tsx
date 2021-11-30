import React from 'react';
import { IBButton } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('Button is rendered', () => {
    render(<IBButton variant="primary" text="Test" />);
    const btn = screen.getByText('Test');
    expect(btn).toBeInTheDocument();
  });
  it('Button can show spinner ', async () => {
    render(<IBButton variant="primary" text="Test" loading disabled />);
    const btn = screen.getByText('Test');
    expect(btn).toBeInTheDocument();
  });
});
