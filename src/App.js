import './App.css';

function App() {
  return (
    <div className="App">

      <div className="metadata metadata_up">
        <p>&lt;!DOCTYPE html&gt;</p>
        <p>&lt;html lang="en"&gt;</p>
        <p> &nbsp; &lt;head&gt;</p>
        <p> &nbsp; &nbsp; &lt;title&gt;</p>
      </div>

      <div>
        <p className='header'>
          &lt;coder&gt;
          <p className="header_name">DMYTRO MELNYCHUK </p>
          <p className='header_profession'>React Developer</p>
          <p className='header_line'></p>
          <p className="header_block"></p>
          &lt;/coder&gt;
        </p>
      </div>

      <div className='metadata metadata_down'>
        <p> &nbsp; &nbsp; &lt;/title&gt;</p>
        <p> &nbsp; &lt;/html&gt;</p>
      </div>

      <div>
      </div>

      <div className='block3'>
        <div className="blockOfContact">
          <p className="contact_linkedIn"><a href="https://www.linkedin.com/in/dmytro-melnychuk" class="underlined underlined--thin">LinkedIN</a></p>
          <p className="contact_linkedIn"><a href="https://github.com/DimmaProduction" class="underlined underlined--thin">GitHub</a></p>
        </div>
      </div>


      <div class="wrap">

        <div className='block1 '>
          <h2 className="nameOfBlock">&lt;Personality/&gt;</h2>
          <p><a href="#" class="underlined underlined--thin">
               Man :<br/>
               &nbsp;"soft skills" [ <br/>
               &nbsp; &nbsp;"communicative",<br/>
                            &nbsp; &nbsp; "active",<br/>
                            &nbsp; &nbsp; "open-minded" <br/>
               &nbsp;],<br/>
                            &nbsp; "hard skills" [<br/>
               &nbsp; &nbsp; "work hard",<br/>
               &nbsp; &nbsp; "result oriented"<br/>
               &nbsp;]<br/>
            
            </a></p>
        </div>

        <div className='block1'>
          {/* <h2>Let's play with the thickness of this underline</h2> */}
          <h2 className="nameOfBlock">&lt;Work Experience/&gt;</h2>
          <p><a href="https://github.com/DimmaProduction/Social_Network" class="underlined underlined--thick">Project : SOCIAL NETWORK</a></p>
          <p><a href="https://dimmaproduction.github.io/pet-project" class="underlined underlined--thick">Pet Project : USERS CONTROL</a></p>
          <p><a href="https://github.com/DimmaProduction/Stopwatch" class="underlined underlined--thick">Project : STOPWATCH</a></p>
          {/* <h2>&lt;/Work Experience&gt;</h2> */}
        </div>

        <div className='block1'>
          {/* <h2>But I want it a bit higher compared to the baseline</h2> */}
          <h2 className="nameOfBlock">&lt;Education/&gt;</h2>
          <p><a href="#" class="underlined underlined--offset">IGOR SIKORSKY KYIV POLYTECHNIC INSTITUTE, &nbsp;  FICT (*3 course)</a></p>
          <p><a href="#" class="underlined underlined--offset">Course of React <br/>(Made by IT-KAMASUTRA, YouTube)</a></p>
          <p><a href="#" class="underlined underlined--offset">Course of C++ by Yandex <br/> (Coursera, 2020)</a></p>
        </div>

        <div className='block2'>
          <h2 className="nameOfBlock">&lt;Skills/&gt;</h2>
          {/* <p><a href="#" class="underlined underlined--gradient">PICKLE RIIIICK</a></p> */}
          <p><a href="#" class="underlined underlined--gradient"> Technologies: </a></p>
          <p><a href="#" class="underlined underlined--gradient"> &nbsp; HTML / CSS / React.js + Redux / JS / BOOTSTRAP <br/> &nbsp; /GIT / FIGMA</a></p>
          <p><a href="#" class="underlined underlined--gradient"> Sociability (Level: Advanced, used right now) </a></p>
          <p><a href="#" class="underlined underlined--gradient">Soft skills (Level: Upper intermediate) </a></p>
        </div>

        <div className='block2'>
          <h2 className="nameOfBlock">&lt;Language/&gt;</h2>
          <p><a href="#" class="underlined underlined--reverse">ENGLISH (Level : Upper Intermediate )</a></p>
          <p><a href="#" class="underlined underlined--reverse">UKRAINIAN (Level : Native Speaker, bilingual )</a></p>
          <p><a href="#" class="underlined underlined--reverse">RUSSIAN (Level : Native Speaker, bilingual )</a></p>

        </div>

      </div>
      
      <div className="footer">
          <p className="footer_text footer_text_left">+38067 380 86 61</p>
          <p className="footer_text footer_text_center"> ©Made by Dmytro Melnychuk </p>
          <p className="footer_text footer_text_right">dimamelnychuk123@gmail.com</p>
      </div>

    </div>
  );
}

export default App;
