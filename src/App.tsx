import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [datetime, setDateTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [transactions, setTransactions] = useState<any>("");

  useEffect(() => {
    getTransactions().then((transactions) => {
      setTransactions(transactions);
    });
  }, []);
  async function getTransactions() {
    const url = "http://localhost:4040/api/transactions";
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

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

  let balance: number | any = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split(".")[1];
  balance = balance.split(".")[0];

  return (
    <main>
      <h1>
        ${balance}
        <span>{fraction}</span>
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
        {transactions.length}
      </form>

      {/* TRANSACTIONS */}
      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction: any) => (
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div
                  className={
                    "price " + (transaction.price > 0 ? "green" : "red")
                  }
                >
                  {transaction.price}
                </div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
