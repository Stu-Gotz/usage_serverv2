import './App.css';

function App() {
  return (

  <div className="relative container mx-auto p-6 bg-lightBg dark:bg-darkBg mt-5">
    <div className="flex items-center justify-between font-main text-lg">
      <div className="pt-3">
        Hello. This is a usage stats server for Smogon data. 
        Please don't hammer it, I'm paying out of pocket. 
        I will work on some way to allow cloning of the data.
        <br></br>
        <div className="pt-2 text-dark-text">
          For now, please use the repo
          <a href="https://github.com/Stu-Gotz/smog_usage_stats" className="bg-lavender rounded p-1 mx-2 font-mono font-bold">here</a> 
          for the database and the web-scraping   
          you should hopefully just have to press run twice in the
          two Python files (<code className="mx-1 bg-yellow rounded italic">DBManager.py</code> and <code className="mx-1 bg-yellow rounded italic">smogon_pull.py</code>).
          <div className="mt-2 ">
            I don't know Python well enough to trust myself to dynamically
            setup a server or database on anyone's computer. The server is 
            <a href="https://github.com/Stu-Gotz/usage_server" className="bg-lavender rounded p-1 mx-2 font-mono font-bold">here</a>.
            Go nuts. You will have to use PostGRESQL or another SQL server (maybe?), unless you want to
            rewrite the whole thing to work with like MongoDB or something
            equally evil.
          </div>
        </div>
        <br></br>
        <div className="text-lower">
          To get started: it takes two parameters from the main route <code className="mx-1 bg-yellow rounded italic">/data/</code>.
        <code className="mx-1 bg-yellow rounded italic">date</code> is the date in <code className="mx-1 bg-yellow rounded italic">YYYY-MM</code> format and 
        <code className="mx-1 bg-yellow rounded italic">tier</code> is the tier eg: <code className="mx-1 bg-yellow rounded italic">gen8ou</code>. 
        <br></br>
        <br></br>
        <form className="input">
          <ul>
            <li className="date">
              <label for="date">Date:</label>
              <input type="text" name="date" id="date-input" placeholder="ex: 2019-09"/>
            </li>
            <li className="tier">
              <label for="tier">Tier:</label>
              <input type="text" name="tier" id="tier-input" placeholder="ex: gen8ou"/>
            </li>
            <li>
              <input className="submit" type="submit" value="Go"/>
              <input className="clear" type="reset"/>
            </li>
          </ul>
        </form>
        Have fun.
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
