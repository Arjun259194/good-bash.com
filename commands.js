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

let help = `
            <pre> help        -to see help </pre>
            <pre> who         -info about site </pre>
            <pre> social      -see social links </pre>
            <pre> clear       -clear screen </pre>
            <pre> clear -a     -clear screen every thing </pre>
            <pre> git         -see github projects </pre>
            `;

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

const clear = () => {
  terminal.innerHTML = starterTemplate;
};

const clearA = () => {
  terminal.innerHTML = "";
};
