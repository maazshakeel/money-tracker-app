import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [datetime, setDateTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function addNewTransaction(ev: any) {
    ev.preventDefault();
    const price = name.split(" ")[0];
    const url = "http://localhost:4040/api/transaction";

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substr(price.length + 1),
        description,
        datetime,
      }),
    }).then((res) => {
      console.log(res);
      setName("");
      setDescription("");
      setDateTime("");
    });
  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>

      {/* FORM */}
      <form onSubmit={addNewTransaction}>
        {/* basic */}
        <div className="basic">
          <input
            type="text"
            placeholder={"+200 new samsung tv"}
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDateTime(ev.target.value)}
          />
        </div>

        {/* description */}
        <div className="description">
          <input
            type="text"
            placeholder={"description"}
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>

      {/* TRANSACTIONS */}
      <div className="transactions">
        <div className="transaction" style={{ borderTop: 0 }}>
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Sell</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$8550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Bought a iphone15</div>
            <div className="description">was time to buy a new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$1550</div>
            <div className="datetime">2023-10-1 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
