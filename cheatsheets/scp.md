---
path: "/scp"
title: "scp"
---

# scp (Secure Copy Protocol)

| Commands | Descriptions |
| --- | --- |
| `scp <user>@<host>:<file path> <transfer target>` | Copy file from remote server to local. <br> `scp root@123.123.123.123:/tmp/myfile ~/` |
| `scp -r <user>@<host>:<directory path> <transfer target>` | Copy file/directory recursively from a remote server to local. <br> `scp -r root@123.123.123.123:/tmp/mydirectory ~/local-directory` |
