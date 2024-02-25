import Home from "../components/Home";
import Logo from "../components/Logo";


function HomePage() {
  const flex = {
    display: "flex",
  };

  // si token user dans le reducer envoi vers page home sinon vers page logine
  return (
    <div style={flex}>
      <Logo></Logo>
      <Home></Home>
    </div>
  );
}

export default HomePage;
