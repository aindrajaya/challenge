import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { validateInput } from './App';

describe('Pastikan ada form registrasi', () => {
  //Grouping test
  //Testing should be here
  test('Pastikan ada kolom email', () => {
    //Test pertama memastikan ada kolom email
    const component = render(<App />);
    // console.log(component, 'method yang tersedia untuk testing');
    const inputEmail = component.getByText('Email:');
    expect(inputEmail).toBeInTheDocument();
  });
  test('Validasi struktur email yang benar', () => {
    //Test keduas memastikan struktur email yang diinputkan benar, berupa ada string @
    const text = 'test@gmail.com';
    expect(validateInput(text)).toBe(true);
  });
  test('Validasi struktur email yang salah', () => {
    //Test ketiga memastikan struktur email salah
    const text = 'testgmail.com';
    expect(validateInput(text)).toBe(false);
  });
  test('Pastikan ada kolom password', () => {
    //Test keempat ada kolom password
    const component = render(<App />);
    // console.log(component, 'method yang tersedia untuk testing');
    const inputEmail = component.getByText('Password:');
    expect(inputEmail).toBeInTheDocument();
  });
});

// describe('Pastikan ada form login', () => {
//   //Testing should be here
//   test('', () => {});
// });
