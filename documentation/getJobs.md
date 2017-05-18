JOB
==

```
GET request
https://smartallysupport.herokuapp.com/api/job/
```

DESCRIPTION
--

>Fetches all the incomplete job requests in the last 30 mins.

RESPONSE
--

**SUCCESS**

```
/*
  "name", "amount" will contain the result of the scan from job, after the "status" is "true".
*/

{
  "status" : 0,
  "message" : "Jobs found.",
  "jobs" : [{
    "imageEp" : String,
    "name" : String,
    "amount" : String,
    "date" : String,
    "status" : Boolean,
    "completedBy" : String
  }]
}
```

**FAILURE**

```
{
  "status" : 1,
  "message" : "No jobs in last half hour."
}
```

```
{
  "status" : 1,
  "message" : "Some internal error occurred."
}
```
