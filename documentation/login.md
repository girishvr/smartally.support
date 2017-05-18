LOGIN
==

```
POST request
https://smartallysupport.herokuapp.com/api/login/
```

DESCRIPTION
--

>Verifies the username and password, and returns the user details if succeeds.

REQUEST
--

```
// Both the fields are required.
{
  "username" : String,
  "password" : String
}
```

RESPONSE
--

**SUCCESS**

```
{
  "status" : 0,
  "message" : "Login successful.",
  "user" : {
    "username" : String,
    "id" : String
  }
}
```

**FAILURE**

```
{
  "status" : 1,
  "message" : "User not found."
}
```

```
{
  "status" : 1,
  "message" : "Please check the username and password again."
}
```

```
{
  "status" : 1,
  "message" : "Incorrect username or password."
}
```

```
{
  "status" : 1,
  "message" : "Some internal error occurred."
}
```
