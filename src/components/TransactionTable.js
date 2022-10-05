import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

export default function TransactionTable(props) {
  const [txnsCopy, setTxnsCopy] = useState(props.txns.map(t=>{return {...t, key:uuid()}}))
  const [txns, setTxns] = useState([...txnsCopy]);
  console.log(txns);
  const [filter, setFilter] = useState('');
  

  const handleFilter = () => {
    console.log('hi');
    if (filter) {
      setTxns(
        txnsCopy.filter((t) => {
          //console.log(t.date)
          //console.log(filter)
          return t.date === filter;
        })
      );
    }
    else{
      setTxns(txnsCopy)
    }
  };

  const sort = ()=>{
    //console.log('hi');
    setTxnsCopy([...txnsCopy].sort((t1,t2) => t1.amount-t2.amount))
    //console.log(txns.sort((t1,t2) => t1.amount-t2.amount))
    setTxns([...txns].sort((t1,t2) => t1.amount-t2.amount))
    //console.log(txns)
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="small" onClick={handleFilter}>
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
              <th className="table-header" onClick={sort}>
                <span id="amount">Amount ($)</span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {txns.map((t, i) => {
              return (
                <tr key={t.key}>
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
