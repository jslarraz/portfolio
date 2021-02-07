import React, { useState } from "react";
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './components/pages/index'


function App() {

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
      languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  console.log("app lan: " + language)

  return (
      <BrowserRouter>
          {
            routes.map((route, idx) => (
                <Route exact path={route.path} render={() => <route.component language={language} /> } key={idx}></Route>
            ))
          }
      </BrowserRouter>
  );
}



function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
