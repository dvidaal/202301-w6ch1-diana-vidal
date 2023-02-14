import Form from "../Form/Form";
import "./Layout.css";

const Layout = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>To Do list ✅</h1>
        <Form />
      </header>
    </div>
  );
};

export default Layout;
