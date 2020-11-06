---
path: '/nix'
title: 'Nix'
---

# Nix

| Commands | Description |
| --- | --- |
| `nix-env -i <package>`                                | Install package. Nix will first try to get it in pre-compiled form from a binary cache. If no binary is available, it will build the package from source. |
| `nix-env -e <package>`                                | Uninstall package |
| `nix-env -u <package>`                                | Upgrade package to newer version |
| `nix-env -u`                                          | Upgrade all packages |
| `nix-env -u --dry-run`                                | See what nix will about to upgrade, without actually upgrading it. |
| `nix-env -qa`                                         | Query available packages. You may also query packages by name. <br />Eg. `nix-env -qa ruby` |
| `nix-collect-garbage -d`                              | Deletes old packages |
| `nix-env --rollback`                                  | Rollback to previous generation |
| `nix-env --list-generations`                          | List all available generations |
| `nix-env -G <generation number>`                      | Switch to specific generation. Eg. `nix-env -G 1` |
| `nix-env --delete-generations <generation number...>` | Delete specific generations. Eg. `nix-env --delete-generations 1 2` |
| `nix-channel --update`                                | Obtain latest Nix expressions in every subscribed channels |
