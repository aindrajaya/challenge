import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, {validateInput} from "./App";

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
