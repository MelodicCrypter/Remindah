# Composer

## General commands

| Command | Description |
| --- | --- |
| `composer list`                         | Lists available Composer commands |
| `composer selfupdate`                   | Updates the version of Composer itself to its latest Composer version |
| `composer global <command-name> <args>` | Allows running commands in the global composer dir. Eg., composer global require <packageName> |
| `composer outdated`                     | Shows a list of installed packages that have updates available, including their latest version |
| `composer suggests`                     | Shows suggestions of packages to install |

## Initializing composer.json

| Command | Description |
| --- | --- |
| `composer init` | Creates a basic composer.json file in current directory |

## Adding/Removing packages

| Command | Description |
| --- | --- |
| `composer require <packageName>`       | Adds required packages to your composer.json and installs them |
| `composer require --dev <packageName>` | Adds required packages to your composer.json and installs them as dev dependecies |
| `composer remove <packageName>`        | Removes a package from the require or require-dev |

## Install/Update packages from composer.json and updates the composer.lock file

| Command | Description |
| --- | --- |
| `composer i` | Installs the project dependencies from the composer.lock file if present, or falls back on the composer.json |
| `composer u` | Updates your dependencies to the latest version according to composer.json, and updates the composer.lock file |

## Autoloaders

| Command | Description |
| --- | --- |
| `composer dump-autoload`             | Dumps the autoloader. It basically updates the autoloader based on new classes in a classmap package |
| `composer dump-autoload -o`          | Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is for production use |
| `composer dump-autoload -no-scripts` | Skips the execution of scripts when dumping the autoloader |
