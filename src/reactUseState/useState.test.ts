import { ReactX } from "./useState";

describe("Testing useState implementation", () => {
  const Component = () => {
    const [count, setCount] = ReactX.useStateX(1);
    const [text, setText] = ReactX.useStateX("hello");
    return {
      render: () => ({
        count,
        text,
      }),
      click: () => setCount(count + 1),
      text: () => setText("welcome"),
    };
  };

  it("should return the initial value", () => {
    let App = ReactX.render(Component);
    expect(App.render()).toEqual({ count: 1, text: "hello" });
    App.click();
    App = ReactX.render(Component);
    expect(App.render()).toEqual({ count: 2, text: "hello" });
    App.text();
    App = ReactX.render(Component);
    expect(App.render()).toEqual({ count: 2, text: "welcome" });
  });
});
