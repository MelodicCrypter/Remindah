---
path: "/terminal"
title: "Terminal"
---

# Terminal

>NOTE: just replace the < text > including the arrows with real data follow the step inside a bracket [ ]

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br><br> |
| **Making Directories** |
| `mkdir <directoryName>`                                | Creates a new directory |
| `mkdir -p <dirName>/<subDirName>`                      | Creates a directory recursively. Eg., `mkdir -p main/sub/test` |
| `mkdir -p <dirName>/{<subDir1>,<subDir2>}/<subDir3>`   | Creates multiple directories recursively. Eg., `mkdir -p main/{sub1},{sub2}/test` will create both directories: `main/sub1/test` & `main/sub2/test` |
| <br><br><br> |
| **Changing Directories** |
| `cd <name>`                               | Selects and opens the directory you typed |
| `cd -`                                    | Goes back one level |
| `cd ~/<name>`                             | Goes to directory wherever you are currently at |
| `cd ../`                                  | Goes back one level |
| `cd /`                                    | Goes to the root |
| `cd ..`                                   | Will go the directory above you are currently in |
| `cd <Name>\ <Name>`                       | Use backslash when there is a space in a directory name |
| `cd <type any letter> [then press Tab]`   | Automatically fills in the complete name of the directory |
| <br><br><br> |
| **List** |
| `ls`          | Lists all the files within that directory |
| `ls -a`       | Shows everything including hidden files |
| `ls -l`       | Lists all contents in long format |
| `ls -t`       | Lists all contents by the time they were modified |
| <br><br><br> |
| **Move** |
| `mv <oldDirectory newDirectory>`          | Moves a directory to a new directory, good for manually moving hidden files as well |
| `mv * <newDirectory>`                     | Moves all files but not including hidden  |
| <br><br><br> |
| **Remove** |
| `rm -rf <directoryName>` | removes a directory |
| <br><br><br> |
| **Other** |
| `nano <fileName>`     | edits with a text file inside command line |
| `pwd`                 | prints the name of the working or current directory |
| `touch <fileNme>`     | creates a new file |
