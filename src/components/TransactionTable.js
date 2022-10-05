import React, { useState } from 'react';

export default function TransactionTable(props) {
  const [txns, setTxns] = useState([...props.txns]);
  console.log(txns);
  const [filter, setFilter] = useState('');

  const sort = () => {
    console.log('hi');
    if (filter) {
      setTxns(
        props.txns.filter((t) => {
          //console.log(t.date)
          //console.log(filter)
          return t.date === filter;
        })
      );
    }
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="small" onClick={sort}>
          Filter
        </button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount">Amount ($)</span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {txns.map((t, i) => {
              return (
                <tr key={i}>
                  {/*fix later*/}
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.type === 1 ? 'Debit' : 'Credit'}</td>
                  <td>{t.amount}</td>
                  <td>{t.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
