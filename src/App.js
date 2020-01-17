import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { SideBar } from './components/SideBar';
import { Header } from './components/Header';
import { Brief } from './components/Brief';
import Footer from './components/Footer';
import ItemList from './components/ItemList';

function App() {
  return (
    <Layout>
      <div className="App">
          <div className="side">
            <SideBar />
          </div>
        <div className="content">
          <Header />
          <div className="contentt">
            <Brief />
            <ItemList />
            <Footer />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
