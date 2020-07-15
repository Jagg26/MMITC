import React, { useState, Fragment, useEffect } from 'react';
import Header from './components/Header';
import AboutUS from './components/AboutUS';
import Mission from './components/Mission';
function App() {

  const [lang, setLang] = useState('en');
  const [text, setText] = useState('');

  useEffect(() => {
    
    const getLang = async () => {

      
      const response = await fetch('./lang.json');
      const result = await response.json();
      
      setText(result);

    }

    getLang();
  }, [lang])



  return (
    <Fragment>
      <Header
        setLang={setLang}
        slogan={text != '' ? text[0].slogan[lang] :null}
        home_menu={text != '' ? text[1].home_menu[lang] :null}
        about_us_menu={text != '' ? text[2].about_us_menu[lang] :null}
        mission_menu={text != '' ? text[3].mission_menu[lang] :null}
        location_menu={text != '' ? text[4].location_menu[lang] :null}
        market_menu={text != '' ? text[5].market_menu[lang] :null}
        contact_menu={text != '' ? text[6].contact_menu[lang] :null}
      />
      <AboutUS 
        about_us_menu={text != '' ? text[2].about_us_menu[lang] :null}
        about_us_1={text != '' ? text[7].about_us_1[lang] :null}
        about_us_2={text != '' ? text[8].about_us_2[lang] :null}
        about_us_3={text != '' ? text[9].about_us_3[lang] :null}
        about_us_4={text != '' ? text[10].about_us_4[lang] :null}
      />
      <Mission 
        mission_title={text != '' ? text[11].mission_title[lang] :null}
      />
    </Fragment>
  );
}

export default App;
