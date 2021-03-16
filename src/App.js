import MemoryCards from './components/MemoryCards/MemoryCards'
import Multiplication from './components/Multiplication/Multiplication'
import Timer from './components/Timer/Timer'
import Start from './components/Start/Start'
import { Redirect, Route, Switch } from 'react-router-dom'
import styles from './App.module.scss'


import React, { useEffect, useState } from 'react';

function App() {


  return (
    <div className={styles.appContainer}>

      <Switch>
        <Redirect exact path="/" to="/start" />

        <Route path='/start'>
          <Start />
        </Route>

        <Route path='/multiplication' exact>
          <Multiplication />
        </Route>

        <Route path='/multiplication/:id'> 
        <MemoryCards/>

        </Route>

        <Route path='/timer'> 
        <Timer/>

        </Route>

      </Switch>
    </div>

  );
}

export default App;
