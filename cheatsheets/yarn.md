---
path: "/yarn"
title: "Yarn"
---

# Yarn

>NOTE: just replace the < text > including the arrows with real data assuming that you have already installed Node and Yarn on your machine

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br><br> |
| **Initialization** |
| `yarn init`                          | Will initialize yarn inside your project |
| `yarn init -y`                       | Will automatically initialize skipping the configuration questions |
| <br><br><br> |
| **Install** |
| `yarn add <packageName>`                  | Will install the specific package, this will also automatically add the package to the project's dependency. No need to add --save or -S like NPM |
| `yarn add <packageName packageName>`      | Will install multiple packages, like above it will automatically be added as dependency |
| `yarn add <packageName> -D`               | Will install the specific package as dev dependency, will not be pushed to production |
| `yarn add <packageName>@<version>`        | Will install specific packages and its specific version: e.g, `yarn add lodash@4.0.0` |
| `yarn add <packageName>@<version> -E`     | Will install specific packages and its EXACT specific version: e.g, `yarn add lodash@3.5.0 -E` This will only install the exact given version|
| `yarn add <packageName> --audit`          | Will install the package but will also audit it if there any security issues |
| `yarn add <alias-name>@npm:<packageName>` | Will let you use alias to the package you are about to install. e.g, `yarn add my-foo@npm:lodash`|
| <br><br><br> |
| **Uninstall** |
| `yarn remove <packageName>`               | Will uninstall the specific package |
| <br><br><br> |
| **Upgrade** |
| `yarn upgrade <packageName>`              | Will upgrade the specific package |
| <br><br><br> |
| **List** |
| `yarn list`                               | Will list all installed packages |
| `yarn list --depth=0`                     | Will list all installed packages, excluding the dependencies |
| `yarn list --patern <typeAnyNameHere>`    | Will list package that matches the given name even if it is incomplete. e.g, `yarn list --pattern expr` . This will list express, most probably, cause express starts with expr|
| <br><br><br> |
| **Other** |
| `yarn run <scriptName>`               | Will run specific command in the script inside your package.json file |
| `yarn why <queryPackageName>`         | Will show information about why a package is installed |
| `yarn cache dir`                      | Will print out the path where yarn's glboal cache is currently stored |
| `yarn cache clean`                    | Will clear the global cache. |
| `yarn info <packageName>`             | Will show information about the package |
