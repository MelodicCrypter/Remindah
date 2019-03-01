# Rails

| <ins>Commands</ins> | <ins>Descriptions</ins> |
|----------|---------------|
|<br /><br />|
| **Initialization** | |
| `rails new <app_name> -T -d <database>`       | Creates a new rails application with tests files skipped, and database settings preconfigured with selected database |
| `rails new <app_name> --api -T -d <database>` | Creates a new rails application preconfigured with smaller stacks for API only apps, test files skipped, and database settings preconfigured with selected database |
| `rails db:create`                             | Creates database |
|<br /><br /><br />|
| **Database** | |
| `rails db:migrate` | Migrate the database |
|<br /><br /><br />|
| **Server** | |
| `rails s`           | Starts up Rails application |
| `rails s -p <port>` | Starts up Rails application with specified port. <br />Eg. `rails s -p 5000` |
|<br /><br /><br />|
| **Generators** | |
| `rails g scaffold <Resource> <field:type>`  | Creates a scaffold for a resource. Scaffold creates the model, database migration for the model, controller, view, and test suite of the resource. <br />Eg. `rails g scaffold Blog title:string body:text` |
| `rails g controller <Name> <action action>` | Creates a controller with actions specified. <br />Eg. `rails g controller Pages home about contact` |
| `rails g model <Name> <field:type>`         | Creates a model with migration. <br />Eg. `rails g model Skill title:string percent:integer` |
|<br /><br /><br />|
| **Credentials** | |
| `rails credentials:edit` | Edit credentials |
| `rails credentials:show` | Show credentials |
|<br /><br /><br />|
| **Etc** | |
| `rails routes` | List all defined routes |