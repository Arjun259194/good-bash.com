/**List of commands
 * help - shows other commands
 * who - info about developer
 * social - social media links
 * //games - show terminal game to play
 * //<pre> games      -to see help </pre
 * clear - clear the screen
 * git - github projects
 */

const instagram = `https://www.instagram.com/arjun259194`;
const github = `https://github.com/Arjun259194`;
const twitter = `https://twitter.com/arjun31690705`;
const mail = `arjun259194@gmail.com`;
const gitProjects = [
  "https://github.com/Arjun259194/Class-A-news",
  "https://github.com/Arjun259194/glitch_effect_css",
  "https://github.com/Arjun259194/Responsive-Admin-Dashboard-Using-HTML-CSS-JavaScript-with-Light-Dark-Mode",
  "https://github.com/Arjun259194/Post-man-clone-from-CWH",
  "https://github.com/Arjun259194/Counter-in-Javascript",
  "https://github.com/Arjun259194/Clock-in-javascript"
];

let help = `
            <pre> <span class="command">help</span>                   -to see help </pre>
            <pre> <span class="command">who</span>                    -info about site </pre>
            <pre> <span class="command">social</span>                 -see social links </pre>
            <pre> <span class="command">clear</span>                  -clear screen </pre>
            <pre> <span class="command">clear -a</span>               -clear screen every thing </pre>
            <pre> <span class="command">git</span>                    -list out github projects </pre>
            <pre> <span class="command">git-gt-[index]</span>        -visit the project </pre>
            `;

const who = `<p>under construction</p>`

const starterTemplate = `<pre class="wordArt">


  ▄████  ▒█████   ▒█████  ▓█████▄  ▄▄▄▄    ▄▄▄        ██████  ██░ ██       ▄████▄   ▒█████   ███▄ ▄███▓
  ██▒ ▀█▒▒██▒  ██▒▒██▒  ██▒▒██▀ ██▌▓█████▄ ▒████▄    ▒██    ▒ ▓██░ ██▒     ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒
 ▒██░▄▄▄░▒██░  ██▒▒██░  ██▒░██   █▌▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒██▀▀██░     ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░
 ░▓█  ██▓▒██   ██░▒██   ██░░▓█▄   ▌▒██░█▀  ░██▄▄▄▄██   ▒   ██▒░▓█ ░██      ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ 
 ░▒▓███▀▒░ ████▓▒░░ ████▓▒░░▒████▓ ░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░▓█▒░██▓ ██▓ ▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒
  ░▒   ▒ ░ ▒░▒░▒░ ░ ▒░▒░▒░  ▒▒▓  ▒ ░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒▓▒ ░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░
   ░   ░   ░ ▒ ▒░   ░ ▒ ▒░  ░ ▒  ▒ ▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░ ░▒    ░  ▒     ░ ▒ ▒░ ░  ░      ░
 ░ ░   ░ ░ ░ ░ ▒  ░ ░ ░ ▒   ░ ░  ░  ░    ░   ░   ▒   ░  ░  ░   ░  ░░ ░ ░   ░        ░ ░ ░ ▒  ░      ░   
       ░     ░ ░      ░ ░     ░     ░            ░  ░      ░   ░  ░  ░  ░  ░ ░          ░ ░         ░   
                            ░            ░                              ░  ░                            </pre>
                        <p id="instruction" class="comment-color">Type 'help' to see available commands</p>`;

const social = `<a class="links" href="${instagram}" target="blank" >//www.instagram.com</a><br>
                <a class="links" href="${twitter}" target="blank" >//www.twitter.com</a><br>
                <a class="links" href="${github}" target="blank" >//www.github.com</a><br>
                `;

const clear = () => {
  terminal.innerHTML = starterTemplate;
};

const clearA = () => {
  terminal.innerHTML = "";
};

const git = `
            <a class="links" href="${gitProjects[0]}" target="blank" >[0]Class-A-news.com</a><pre>    ->a Pure js news website project with news api</pre><br>
            <a class="links" href="${gitProjects[1]}" target="blank" >[1]Css Glitch effect text</a><pre>    ->only css glitch effect</pre><br>
            <a class="links" href="${gitProjects[2]}" target="blank" >[2]Admin Dashboard</a><pre>    ->responsive Admin-Dashboard with dark theme</pre><br>
            <a class="links" href="${gitProjects[3]}" target="blank" >[3]Postman clone</a><pre>    ->a Postman clone to test backend</pre><br>
            <a class="links" href="${gitProjects[4]}" target="blank" >[4]JS counter</a><pre>    -> a simple counter with JS</pre><br>
            <a class="links" href="${gitProjects[5]}" target="blank" >[5]Clock JS</a><pre>    -> a simple clock with js Date()</pre><br>
            <span class="comment-color">#use given index in command 'git-gt-[index]'</span>
            `

const gitGt = (index)=>{
  window.open(gitProjects[index], '_blank');
  textArea.value = ""
}