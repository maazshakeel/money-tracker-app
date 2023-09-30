import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>

      {/* FORM */}
      <form>
        {/* basic */}
        <div className="basic">
          <input type="text" placeholder={"+200 new samsung tv"} />
          <input type="datetime-local" />
        </div>

        {/* description */}
        <div className="description">
          <input type="text" placeholder={"description"} />
        </div>
        <button type="submit">Add transaction</button>
      </form>

      {/* TRANSACTIONS */}
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price">$550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price">$550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price">$550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price">$550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
