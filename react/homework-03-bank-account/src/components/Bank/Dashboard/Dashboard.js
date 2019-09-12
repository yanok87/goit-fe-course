import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
  state = {
    transactions: [],
    inputValue: '',
    balance: 0,
    deposit: 0,
    withdraw: 0,
  };

  componentDidMount() {
    try {
      const getBankInfo = localStorage.getItem('bankInfo');

      if (getBankInfo !== null) {
        const newPartState = JSON.parse(getBankInfo);

        this.setState({ ...newPartState });
      }
    } catch (err) {
      throw ('err:', err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactions, balance, deposit, withdraw } = this.state;

    if (prevState.transactions !== transactions) {
      localStorage.setItem(
        'bankInfo',
        JSON.stringify({ transactions, balance, deposit, withdraw }),
      );
    }
  }

  notifyA = () =>
    toast('На счету недостаточно средств для проведения операции!');

  notifyB = () => toast('Введите сумму для проведения операции!');

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDepositSubmit = () => {
    const { inputValue } = this.state;

    const transactionDate = new Date().toLocaleString('en-GB');

    const newDeposit = {
      id: shortid.generate(),
      type: 'Deposit',
      amount: Number(inputValue),
      date: transactionDate,
    };

    if (Number(inputValue) === 0 || Number(inputValue) === '') {
      this.notifyB();
    } else {
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newDeposit],
        balance: prevState.balance + Number(inputValue),
        deposit: prevState.deposit + Number(inputValue),
        inputValue: '',
      }));
    }
  };

  handleWithdrawSubmit = () => {
    const { inputValue, balance } = this.state;

    const transactionDate = new Date().toLocaleString('en-GB');

    const newWithdraw = {
      id: shortid.generate(),
      type: 'Withdrawal',
      amount: Number(inputValue),
      date: transactionDate,
    };

    if (Number(inputValue) > balance) {
      this.notifyA();
    } else if (Number(inputValue) === 0 || Number(inputValue) === '') {
      this.notifyB();
    } else {
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newWithdraw],
        balance: prevState.balance - Number(inputValue),
        withdraw: prevState.withdraw + Number(inputValue),
        inputValue: '',
      }));
    }
  };

  render() {
    const { transactions, inputValue, balance, deposit, withdraw } = this.state;

    return (
      <div className="dashboard">
        <Controls
          input={inputValue}
          onHandleChangeInput={this.handleChangeInput}
          onHandleDepositSubmit={this.handleDepositSubmit}
          onHandleWithdrawSubmit={this.handleWithdrawSubmit}
        />
        <Balance
          amountDeposit={deposit}
          amountWithdraw={withdraw}
          amountBalance={balance}
        />
        <TransactionHistory transactionArr={transactions} />

        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
