import React, { useState, Fragment, useEffect } from 'react';
import Header from './components/Header';
import AboutUS from './components/AboutUS';
import Mission from './components/Mission';
import Welcome from './components/Welcome';
import Products from './components/Products';
import Market from './components/Market';
/* import Contact from './components/Contact'; */
import Footer from './components/Footer';

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
        home_menu={text !== '' ? text[2].home_menu[lang] : null}
        about_us_menu={text !== '' ? text[3].about_us_menu[lang] : null}
        mission_menu={text !== '' ? text[4].mission_menu[lang] : null}
        products_menu={text !== '' ? text[5].products_menu[lang] : null}
        market_menu={text !== '' ? text[6].market_menu[lang] : null}
        contact_menu={text !== '' ? text[7].contact_menu[lang] : null}
      />
      <Welcome
      welcome={text !== '' ? text[0].welcome[lang] : null}
        slogan={text !== '' ? text[1].slogan[lang] : null}
      />
      <AboutUS
        about_us_menu={text !== '' ? text[3].about_us_menu[lang] : null}
        about_us_1={text !== '' ? text[8].about_us_1[lang] : null}
        about_us_2={text !== '' ? text[9].about_us_2[lang] : null}
        about_us_3={text !== '' ? text[10].about_us_3[lang] : null}
        about_us_4={text !== '' ? text[11].about_us_4[lang] : null}
      />
      <Mission
        our_values={text !== '' ? text[12].our_values[lang] : null}
        our_values_text={text !== '' ? text[13].our_values_text[lang] : null}
        mission_title={text !== '' ? text[14].mission_title[lang] : null}
        mission_1={text !== '' ? text[15].mission_1[lang] : null}
        mission_2={text !== '' ? text[16].mission_2[lang] : null}
        mission_3={text !== '' ? text[17].mission_3[lang] : null}
        mission_4={text !== '' ? text[18].mission_4[lang] : null}
      />
      <Products 
      products_menu={text !== '' ? text[5].products_menu[lang] : null}
      products_text_1={text !== '' ? text[19].products_text_1[lang] : null}
      products_text_2={text !== '' ? text[20].products_text_2[lang] : null}
      />
      <Market 
      market_menu={text !== '' ? text[6].market_menu[lang] : null}
      market_text_1={text !== '' ? text[21].market_text_1[lang] : null}
      market_text_2={text !== '' ? text[22].market_text_2[lang] : null}
      market_text_3={text !== '' ? text[23].market_text_3[lang] : null}
      countries={text !== '' ? text[24].countries[lang] : null}
      />
      {/* <Contact 
      contact_menu={text !== '' ? text[7].contact_menu[lang] : null}
      /> */}
      <Footer 
      
      />
    </Fragment>
  );
}

export default App;
