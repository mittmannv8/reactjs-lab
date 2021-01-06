import { Link } from "react-router-dom";
import lab from "../lab";

const Home = () => {
  return (
    <ul>
      {lab.map(e => (
        <li>
          <Link to={e.route}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
