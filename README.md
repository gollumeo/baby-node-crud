# My first app/CRUD using NodeJS! 

Well, this README will be kinda small as tilte says it all. 
I've managed to create my ever first CRUD using NodeJS. 
To do so, I've built an API with some endpoints, which mostly allows user handling such as:

| Method   | ENDPOINT              | Parameters                                                                            | Description                                                        |
|----------|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| `/GET`   | `/users`              | None                                                                                  | Displays all users stored in database (DB/users.json in this case) | 
| `POST`   | `/users/new`          | { "email": "email_adress_to_store", "username": "your_username "}                     | Allows creation and storage of a new user in DB                    |
| `DELETE` | `/users/destroy`      | { "email": "adress_email" } the email adress of the user you want to delete           | Allows deletion of a an already existing user                      | 
| `PUT`    | `/user?email={email}` | Headers: the key/value email/email_address. Body: the new username you'd like to use. | Allows edit of a username based on its email address.              | 
| `GET`    | `/user?email={email}` | Headers: the key/value email/email_address of the user.                               | Displays a said user based on its email address.                   |  

## How to use it on your machine

1. Be sure to have node and npm installed on your machine. 
2. Simply launch the server: 
```bash
node index.js
```

Have fun!

## Mention

If you ever want to directly store some users in DB before starting playing with this simple API, don't forget to replace the existing `DB/users.json` with your own dataset!