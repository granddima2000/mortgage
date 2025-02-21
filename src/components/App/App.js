import "modern-normalize/modern-normalize.css";
import MortgageDesignWork from "../../pages/mortgageDesignWork/MortgageDesignWork";
import MortgageBlog from "../../pages/mortgageBlog/MortgageBlog";
import MortgageEbook from "../../pages/mortgageEbook/MortgageEbook";
import MortgageWebinar from "../../pages/mortgageWebinar/MortgageWebinar";
import MortgageEbook2 from "../../pages/mortgageEboog2/MortgageEbook2";

// import styles from "./app.module.scss";

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <MortgageDesignWork />
        <MortgageBlog />
        <MortgageEbook />
        <MortgageWebinar />
        <MortgageEbook2 />
      </div>
    </div>
  );
};

export default App;
