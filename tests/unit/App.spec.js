import { render, fireEvent } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import App from "../../src/App.vue";

test("checkbox checks and unchecks with fireEvent", async () => {
  const { getByLabelText, getByText } = render(App);
  const input = getByLabelText("My checkbox");

  expect(getByText("false")).toBeTruthy;

  await fireEvent.change(input, { target: { checked: true } });
  expect(getByText("true")).toBeTruthy;

  await fireEvent.change(input, { target: { checked: false } });
  expect(getByText("false")).toBeTruthy;
});

test("checkbox does check and uncheck with userEvent with await", async () => {
  const { getByLabelText, getByText } = render(App);
  const input = getByLabelText("My checkbox");

  expect(getByText("false")).toBeTruthy;

  await userEvent.click(input);
  expect(getByText("true")).toBeTruthy;

  await userEvent.click(input);
  expect(getByText("false")).toBeTruthy;
});

test("checkbox does not check and uncheck with userEvent without await", async () => {
  const { getByLabelText, getByText } = render(App);
  const input = getByLabelText("My checkbox");

  expect(getByText("false")).toBeTruthy;

  userEvent.click(input);
  expect(getByText("true")).toBeTruthy;

  userEvent.click(input);
  expect(getByText("false")).toBeTruthy;
});
