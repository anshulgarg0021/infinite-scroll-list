import { render, screen } from "@testing-library/react";
import App from "./App";
import Dashboard from "./Components/Dashboard/Index";
// eslint-disable-next-line testing-library/no-dom-import
import { fireEvent } from "@testing-library/dom";

var mock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function () {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: mock });
test("renders Login Page", () => {
  render(<App />);
  const linkElement = screen.getByText(/submit/i);
  expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test("renders Dashboard page as login is true will be redirected to home page", () => {
  mock.setItem("logedIn", true);
  render(<App />);
  expect(mock.getItem("logedIn")).toEqual("true");
  expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
  expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
});

test("On click of logout home page should render", () => {
  mock.setItem("logedIn", true);
  render(<App />);
  expect(mock.getItem("logedIn")).toEqual("true");
  expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
  expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Log Out/i));
  const linkElement = screen.getByText(/submit/i);
  expect(screen.getByPlaceholderText("Enter Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
