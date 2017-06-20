# GraphQl server for the periodic tables client

## Quick start
- ```npm install```
- ```npm start```

Changes on files in the graphQLSchema directory will restart the server

## Data import
You need a running MySQL instance on your system, which has the schema in  *utils/db/schema.sql* applied
### Install MySQL

*Tutorials for installing*
- Ubuntu/Debian: [https://wiki.ubuntuusers.de/MySQL/](https://wiki.ubuntuusers.de/MySQL/)
- OSX: [https://dev.mysql.com/doc/refman/5.6/en/osx-installation.html](https://dev.mysql.com/doc/refman/5.6/en/osx-installation.html)

### Apply database schema
```mysql -u <your user> -p < utils/db/schema.sql```

### Adjust credentials
You can either set your MySql root password to *123456* or adjust the values in
utils/db/config.json to your credentials, to get a working database connection.
On some Linux machines, you might need to use a socket path. If you run into any trouble connecting to the database, check your credentials first. If that fails, rename the "_socketPath" key to "socketPath" in the config.json.

### Data source
You also need a JSON file to read the data from.
An example can be found [here](https://drive.google.com/file/d/0B4Zww83nKbCoSV9USGQ0SS10U1U/view).

Download it and place it into this project folder.

### Run import script

```npm run import```