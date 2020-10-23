/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import './App.css';
import { getUsers, createUser } from './mock';

interface AppProps {}
interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            Mock exercise for Walden University.
            <br/>
            <code>Edit App.js to get started.</code>
          </p>
        </header>
        <div className="content">
          Content goes here
        </div>
      </div>
    );
  }
}