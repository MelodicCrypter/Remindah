# Rails

>Note: Replace <...> with the expected value stated inside the angle bracket.

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br /><br /> |
| **Initialization** |
| `rails new <app_name> -T -d <database>`       | Creates a new rails application with tests files skipped, and database settings preconfigured with selected database |
| `rails new <app_name> --api -T -d <database>` | Creates a new rails application preconfigured with smaller stacks for API only apps, test files skipped, and database settings preconfigured with selected database |
| `rails db:create`                             | Creates database |
| <br /><br /><br /> |
| **Database** |
| `rails db:migrate` | Migrate the database |
| `rails db:setup`   | Creates the database, load the schema and initialize it with the seed data. |
| <br /><br /><br /> |
| **Server** |
| `rails s`           | Starts up Rails application |
| `rails s -p <port>` | Starts up Rails application with specified port. <br />Eg. `rails s -p 5000` |
| <br /><br /><br /> |
| **Generators** |
| `rails g scaffold <Resource> <field:type>`                      | Creates a scaffold for a resource. Scaffold creates the model, database migration for the model, controller, view, and test suite of the resource. <br />Eg. `rails g scaffold Blog title:string body:text` |
| `rails g controller <Name> <action ...>`                        | Creates a controller with actions specified. <br />Eg. `rails g controller Pages home about contact` |
| `rails g model <Name> <field:type>`                             | Creates a model with migration. <br />Eg. `rails g model Skill title:string percent:integer` |
| `rails g resource <Resource> <field:type>`                      | Similar to scaffolds, but a skinnier version of it. It doesn't include the actions in controller, no views being created, etc <br />Eg. `rails g resource Portfolio title:string body:text` |
| `rails g migration Create<Table> <field:type>`                  | Generates a migration with the <Table> name. <br />Eg. `rails g migration CreateUsers name:string age:integer` will create a table `users` with `name` & `age` column. |
| `rails g migration Add<Field>To<Table> <field:type>`            | Generates a migration that adds a field to the table. <br />Eg. `rails g migration AddAddressToUsers address:text` will create a migration that adds the `address` column to the `users` table. |
| `rails g migration Remove<Field>From<Table> <field:type>`       | Generates a migration that removes a field from the table. <br />Eg. `rails g migration RemoveAddressFromUsers address:text` will create a migration that removes the `address` column from the `users` table. |
| `rails g migration Add<Column>RefTo<Table> <column>:references` | Generates a migration that adds a reference to the table for the specified column. <br />Eg. `rails g migration AddCategoryRefToBlogs category:references` will create a migration that adds a reference to the `blogs` table for `category` |
| <br /><br /><br /> |
| **Credentials** |
| `rails credentials:edit` | Edit credentials |
| `rails credentials:show` | Show credentials |
| <br /><br /><br /> |
| **Etc** |
| `rails c`           | This command lets you interact with your Rails application from the command line |
| `rails c --sandbox` | The `--sandbox` will allow you to test out some code without changing any data. Any modifications you make will be rolled back on exit. |
| `rails routes`      | List all defined routes |
