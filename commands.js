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
            <pre> <span class="command">help</span>        -to see help </pre>
            <pre> <span class="command">who</span>         -info about site </pre>
            <pre> <span class="command">social</span>      -see social links </pre>
            <pre> <span class="command">clear</span>       -clear screen </pre>
            <pre> <span class="command">clear -a</span>    -clear screen every thing </pre>
            <pre> <span class="command">git</span>         -see github projects </pre>
            `;

const who = `<p>Who??</p>`

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
                        <p id="instruction">Type 'help' to see available commands</p>`;

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
            <a href="${gitProjects[0]}" target="blank" >Class-A-news.com</a><span>    ->a Pure js news website project with news api</span><br>
            <a href="${gitProjects[1]}" target="blank" >Css Glitch effect text</a><span>    ->only css glitch effect</span><br>
            <a href="${gitProjects[2]}" target="blank" >Admin Dashboard</a><span>    ->responsive Admin-Dashboard with dark theme</span><br>
            <a href="${gitProjects[3]}" target="blank" >Postman clone</a><span>    ->a Postman clone to test backend</span><br>
            <a href="${gitProjects[4]}" target="blank" >JS counter</a><span>    -> a simple counter with JS</span><br>
            <a href="${gitProjects[5]}" target="blank" >Clock JS</a><span>    -> a simple clock with js Date()</span><br>
            `
