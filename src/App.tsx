/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import './App.css';
import ViewUser from "./components/ViewUser";

interface AppProps {}
interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            Mock exercise for Walden University.
            <br/>
            <code>Edit src/App.tsx to get started.</code>
          </p>
        </header>
          <br/>
          <br/>
            <ViewUser />
            <br/>
      </div>
    );
  }
}
