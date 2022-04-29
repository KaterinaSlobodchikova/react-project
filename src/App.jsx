import { useState } from 'react';

import { Header } from './common/components/Header';
import { Button } from './common/ui/Button';
import { Main } from './views/Main';
import { Posts } from './views/Posts';
import { Login } from './views/Login';



const App = (props) => {
  //const { _theme } = props;

  const [theme, setTheme]= useState('light');

  const submitFormHandler = (event) => { console.log(event) };
  const cancelFormHandler = () => { console.log('Form was cleared') };
  const changeThemeHandler = () => { setTheme('dark') };


  return (
      <Main>
        <Header />
        {theme}
        <Button title="Change theme" onClick={changeThemeHandler} />
        
        <Button title="Submit" onClick={submitFormHandler} />
        <Button title="Cancel" onClick={cancelFormHandler} />
        
        {/*<Posts />*/}
        <Login />

      </Main>
  );
}

export default App;
