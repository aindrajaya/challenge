import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { validateInput } from './App';

<<<<<<< HEAD
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
=======
//Grouping test
describe("Pastikan ada Form Registrasi", () => {
  //Testing should be here
  test("pastikan ada label email", () => { //Label dan form untuk mengisi Email
    const component = render(<App/>)
    // console.log(component, "method yang tersedia untuk testing")
    const inputEmail = component.getByText("Email:");
    expect(inputEmail).toBeInTheDocument();
  })
  test("validasi struktur email yang benar", () => { //Harus ada validasi struktur email yg akan menerima ketika benar
    const text = "test@gmail.com";
    expect(validateInput(text)).toBe(true);
  });
  test("validasi struktur email yang salah", () => { //Harus ada validasi struktur email yg akan menolak ketika salah
    const text = "testgmail.com";
    expect(validateInput(text)).toBe(false);
  });
  test("pastikan ada label password", () => { //Label dan form untuk mengisi password
    const component = render(<App />)
    const inputPassword = component.getByText("Password:")
    expect(inputPassword).toBeInTheDocument();
  })
})

// describe("Pastikan ada Form Login", () => {
//   //Testing should be here
//   test("Login", () => {})
// })
>>>>>>> 03e22af8b0b16299969a7031e0a83c2ca5c2a944
