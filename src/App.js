import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleClass1 from './Task1/ExampleClass1';
import ParentToChild from './Task1/Parentchild';
import ChildToParent from './Task1/Childparent';
import Exprops from './Task1/Exprops';
import Users from './Task2/function1';
import Counter from './Task2/functionEx2';
import LifeCycleP from './Task3/LifeCycleP';
import Update from './Task4/Update';
import Example from './Task2/functonex';
import Exampprop from './Task2/functionprop';
import IfelseEx1 from './Task5/IfelseEx1';
import ElementVariable from './Task5/ElementVariable';
import TerneryOperators from './Task5/TerneryOperator';
import ListRender from './Task5/ListRender';
import Form from './Task6/Form';
import Refs from './Task6/Refs';
import Link from './Task7/list';
import CheckboxWithLabel from './Task7/CheckboxWithLabel';

function App() {
  return (
    <div>
      <ExampleClass1 />
      {/* <Exprops name="harish" position="dev"/> */}
      {/* <Users/>
      <Counter/>
      <ChildToParent/>
      <h1>hai..react</h1> */}
      {/* <LifeCycleP name="hello react wakeup.."/> */}
      {/* <Update/> */}
      {/* <Exampprop name="harish" age="25"/> */}
      {/* <IfelseEx1 /> */}
      {/* <ElementVariable /> */}
      {/* <TerneryOperators /> */}
      {/* <ListRender /> */}
      {/* <Form /> */}
      {/* <Refs /> */}
      {/* <Link /> */}
      {/* <CheckboxWithLabel /> */}
    </div>
  );
}

export default App;
