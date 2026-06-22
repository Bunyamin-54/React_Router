import { Link } from "react-router";

export default function Home() {
  return (
    <p id="index-page">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <Link to="https://reactrouter.com">the docs at reactrouter.com</Link>.
    </p>
  );
}
