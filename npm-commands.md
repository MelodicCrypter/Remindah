###### NOTE:
###### * just replace the < text > including the arrows with real data
###### * assuming that you have already installed Node on your machine
<br>

# NPM

| <ins>Commands</ins> | <ins>Descriptions</ins> |
|----------|---------------|
|<br><br>|
| **Initialization** | |
| `npm init`                          | Will initialize npm inside your project |
| `npm init -y`                       | Will automatically initialize skipping the configuration questions |
|<br><br><br>|
| **Install** | |
| `npm i <packageName>`               | Will install the specific package |
| `npm i <packageName packageName>`   | Will install multiple packages |
| `npm i -g <packageName>`            | Will install the specific package, globally |
| `npm i -S <packageName>`            | Will install the specific package as Dependency for your project, meaning your project won't run fully without it |
| `npm i -D <packageName>`            | Will install the specific package as Dev Dependency for your project, meaning it will not be deployed to production |
|<br><br><br>|
| **Uninstall** | |
| `npm un <packageName>`              | Will uninstall the specific package |
|<br><br><br>|
| **Update** | |
| `npm up <packageName>`              | Will update the specific package |
|<br><br><br>|
| **List** | |
| `npm ls`                            | Will list all installed packages |
| `npm ls -g --depth=0`               | Will list all globally installed packages, excluding the dependencies |
| `npm la`                            | Will print additional information while listing all the packages |
|<br><br><br>|
| **Other** | |
| `npm run <scriptName>`               | Will run specific command in the script inside your package.json file |

