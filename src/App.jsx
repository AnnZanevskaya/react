import React from "react";

const Header = () => <h1 className="header">Functional component</h1>;

class Container extends React.Component {
  render() {
    return <h2 className="container">React.Component</h2>;
  }
}

class Footer extends React.PureComponent {
  render() {
    return <h2 className="footer">React.PureComponent</h2>;
  }
}

export default function App() {
  return (
    <div className="App">
      <Header />
      {React.createElement(
        "h2",
        { id: 1, className: "navigation" },
        "React.CreateElement"
      )}
      <Container />
      <Footer />
    </div>
  );
}