REGISTER
==

```
POST request
https://smartallysupport.herokuapp.com/api/register/
```

DESCRIPTION
--

>Registers the support member.

REQUEST
--

```
{
  "username" : String, // Required, case sensitive.
  "password" : String  // Required, length min: 6, max:6
}
```

RESPONSE
--

**SUCCESS**

```
{
  "status" : 0,
  "message" : "Registration complete."
}
```

**FAILURE**

```
{
  "status" : 1,
  "message" : "Username taken."
}
```

```
{
  "status" : 1,
  "message" : "Username is required."
}```

```
{
  "status" : 1,
  "message" : "Password is required."
}
```

```
{
  "status" : 1,
  "message" : "Password needs to be at least 6 letters."
}
```

```
{
  "status" : 1,
  "message" : "Password needs to be of maximum 16 letters."
}
```

```
{
  "status" : 1,
  "message" : "Couldn't save user."
}
```
