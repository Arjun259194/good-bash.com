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
            <pre> help        -to see help </pre>
            <pre> who         -info about site </pre>
            <pre> social      -see social links </pre>
            <pre> clear       -clear screen </pre>
            <pre> clear -a     -clear screen every thing </pre>
            <pre> git         -see github projects </pre>
            `;

const who = `<p>Who??</p>`

const starterTemplate = `<pre>

    ▄████  ▒█████   ▒█████  ▓█████▄  ▄▄▄▄    ▄▄▄        ██████  ██░ ██       ▄████▄   ▒█████   ███▄ ▄███▓
    ██▒ ▀█▒▒██▒  ██▒▒██▒  ██▒▒██▀ ██▌▓█████▄ ▒████▄    ▒██    ▒ ▓██░ ██▒     ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒
   ▒██░▄▄▄░▒██░  ██▒▒██░  ██▒░██   █▌▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒██▀▀██░     ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░
   ░▓█  ██▓▒██   ██░▒██   ██░░▓█▄   ▌▒██░█▀  ░██▄▄▄▄██   ▒   ██▒░▓█ ░██      ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ 
   ░▒▓███▀▒░ ████▓▒░░ ████▓▒░░▒████▓ ░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░▓█▒░██▓ ██▓ ▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒
    ░▒   ▒ ░ ▒░▒░▒░ ░ ▒░▒░▒░  ▒▒▓  ▒ ░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░ ▒ ░░▒░▒ ▒▓▒ ░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░
     ░   ░   ░ ▒ ▒░   ░ ▒ ▒░  ░ ▒  ▒ ▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░▒░ ░ ░▒    ░  ▒     ░ ▒ ▒░ ░  ░      ░
   ░ ░   ░ ░ ░ ░ ▒  ░ ░ ░ ▒   ░ ░  ░  ░    ░   ░   ▒   ░  ░  ░   ░  ░░ ░ ░   ░        ░ ░ ░ ▒  ░      ░   
         ░     ░ ░      ░ ░     ░     ░            ░  ░      ░   ░  ░  ░  ░  ░ ░          ░ ░         ░   
                              ░            ░                              ░  ░                            
                        </pre>`;

const social = `<a href="${instagram}">//www.instagram.com</a>
                <a href="${twitter}">//www.twitter.com</a>
                <a href="${github}">//www.github.com</a>
                `;

const clear = () => {
  terminal.innerHTML = starterTemplate;
};

const clearA = () => {
  terminal.innerHTML = "";
};

const git = `
            <a href="${gitProjects[0]}">Class-A-news.com</a><span>    ->a Pure js news website project with news api</span><br>
            <a href="${gitProjects[1]}">Css Glitch effect text</a><span>    ->only css glitch effect</span><br>
            <a href="${gitProjects[2]}">Admin Dashboard</a><span>    ->responsive Admin-Dashboard with dark theme</span><br>
            <a href="${gitProjects[3]}">Postman clone</a><span>    ->a Postman clone to test backend</span><br>
            <a href="${gitProjects[4]}">JS counter</a><span>    -> a simple counter with JS</span><br>
            <a href="${gitProjects[5]}">Clock JS</a><span>    -> a simple clock with js Date()</span><br>
            `
