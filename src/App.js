import React, { Fragment } from 'react';
import './App.css';
import Recipes from './components/Recipes'
import HeroHeader from './components/HeroHeader'
import GlobalStyle from "./components/GlobalStyle";
import Receita from './components/receita/Receita'
import Footer from './components/Footer'

export default function App() {
  return (
    <Fragment>
      <Receita />
      <HeroHeader />
      <Recipes />
      <GlobalStyle />
      <Footer />
    </Fragment>
  );
}