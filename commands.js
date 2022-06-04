const socials = [`https://www.instagram.com/arjun259194`, `https://github.com/Arjun259194`, `https://twitter.com/arjun31690705`];
const mail = `arjun259194@gmail.com`;
const gitProjects = ["https://github.com/Arjun259194/Class-A-news", "https://github.com/Arjun259194/glitch_effect_css", "https://github.com/Arjun259194/Responsive-Admin-Dashboard-Using-HTML-CSS-JavaScript-with-Light-Dark-Mode", "https://github.com/Arjun259194/Post-man-clone-from-CWH", "https://github.com/Arjun259194/Counter-in-Javascript", "https://github.com/Arjun259194/Clock-in-javascript"];

let help = `<div class="mtb-1">
              <pre> <span class="command">help</span>                       -to see help </pre>
              <pre> <span class="command">who</span>                        -info about site </pre>
              <pre> <span class="command">social</span>                     -see social links </pre>
              <pre> <span class="command">social-v-[index]</span>           -visit profile </pre>
              <pre> <span class="command">clear</span>                      -clear screen </pre>
              <pre> <span class="command">clear -a</span>                   -clear screen every thing </pre>
              <pre> <span class="command">clear -h</span>                   -clear command history </pre>
              <pre> <span class="command">git</span>                        -list out github projects </pre>
              <pre> <span class="command">git-gt-[index]</span>             -visit the project </pre>
              <pre> <span class="command">history</span>                        -list out command history </pre>
            </div>`;

const who = `<p>under construction</p>`;

const starterTemplate = `<pre class="wordArt">

██╗░░██╗██╗████████╗░░░░░░██████╗░░█████╗░░██████╗██╗░░██╗░░░░█████╗░░█████╗░███╗░░░███╗
██║░░██║██║╚══██╔══╝░░░░░░██╔══██╗██╔══██╗██╔════╝██║░░██║░░░██╔══██╗██╔══██╗████╗░████║
███████║██║░░░██║░░░█████╗██████╦╝███████║╚█████╗░███████║░░░██║░░╚═╝██║░░██║██╔████╔██║
██╔══██║██║░░░██║░░░╚════╝██╔══██╗██╔══██║░╚═══██╗██╔══██║░░░██║░░██╗██║░░██║██║╚██╔╝██║
██║░░██║██║░░░██║░░░░░░░░░██████╦╝██║░░██║██████╔╝██║░░██║██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║
╚═╝░░╚═╝╚═╝░░░╚═╝░░░░░░░░░╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝</pre>
                        <p id="instruction" class="comment-color mtb-1">Type 'help' to see available commands</p>`;

const social = `<div class="mtb-1">
                  <p class="links">[0]//www.instagram.com</p>
                  <p class="links">[1]//www.github.com</p>
                  <p class="links">[2]//www.twitter.com</p>
                  <span class="comment-color">#use given index in command 'social-v-[index]'</span>
                </div>
                `;

const socialVisit = (index) => {
  addToTerminal(`<p class="comment-color mtb-1">visiting <span class="links">${socials[index]}</span></p>`);
  setTimeout(() => {
    window.open(socials[index], "_blank");
    $("#command").innerHTML = textArea.value;
    textArea.value = "";
  }, 500);
};

const clear = () => {
  terminal.innerHTML = starterTemplate;
};

const clearA = () => {
  terminal.innerHTML = "";
};

const clearH = () => {
  commands = [];
};

const git = `<div class="mtb-1">
              <p class="links">[0]Class-A-news.com</p><pre>    ->a Pure js news website project with news api</pre><br>
              <p class="links">[1]Css Glitch effect text</p><pre>    ->only css glitch effect</pre><br>
              <p class="links">[2]Admin Dashboard</p><pre>    ->responsive Admin-Dashboard with dark theme</pre><br>
              <p class="links">[3]Postman clone</p><pre>    ->a Postman clone to test backend</pre><br>
              <p class="links">[4]JS counter</p><pre>    -> a simple counter with JS</pre><br>
              <p class="links">[5]Clock JS</p><pre>    -> a simple clock with js Date()</pre><br>
              <span class="comment-color">#use given index in command 'git-gt-[index]'</span>
            </div>`;

const gitGt = (index) => {
  addToTerminal(`<p class="comment-color">visiting <span class="links">${gitProjects[index]}</span></p>`);
  setTimeout(() => {
    window.open(gitProjects[index], "_blank");
    textArea.value = "";
    $("#command").innerHTML = textArea.value;
  }, 500);
};

const history = () => {
  let history = "";
  if (commands.length == 0 || commands.length < 0) return '<p class="comment-color">#NO HISTORY</p>';
  for (const key in commands) {
    history += `<p>${Number(key) + 1}-<span class="comment-color">${commands[key]}</span></p>`;
  }
  return history;
};
