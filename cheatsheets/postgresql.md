---
path: "/postgresql"
title: "PostgreSQL"
---

# PostgreSQL

>NOTE: just replace the <text> including the arrows with real data

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br /><br /> |
| **Meta-Commands** |
| `\l`              | Show list of database |
| `\c <database>`   | Connects to a database |
| `\dt`             | Show list of tables |
| `\d <table name>` | Describe table. <br />Eg. `\d users` |
| `\x <value>`      | Sets or toggles expanded table formatting mode. The value is either, `on`, `off`, or `auto` |

| Commands | Description |
| --- | --- |
| `pg_dump -U <user> <database> > backup.sql` | Eg., `pg_dump -U johndoe app_db > backup.sql` |
| `psql -d <database> -U <user> -f <dump file>` | Eg., `psql -d app_db -U johndow -f backup.sql` |
