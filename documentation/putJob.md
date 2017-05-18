JOB
==

```
PUT request
https://smartallysupport.herokuapp.com/api/job?id=<job_identifier>
```

DESCRIPTION
--

>Updates the job with the scanned result, and marks the status as completed `{ "status" : true }`.

REQUEST
--

```
/*
  "name", "amount" will contain the results from the job.
  "userid" is the support app user's "id".
  All fields are required.
*/
{
  "name" : String,
  "amount" : String, // in xx.xx format. Eg: 23.99
  "userid" : String
}
```

RESPONSE
--

**SUCCESS**

```
{
  "status" : 0,
  "message" : "Job completed."
}
```

**FAILURE**

```
{
  "status" : 1,
  "message" : "Job not found."
}
```

```
{
  "status" : 1,
  "message" : "Job already completed."
}
```

```
{
  "status" : 1,
  "message" : "Incomplete request. Please send all mandatory fields."
}
```

```
{
  "status" : 1,
  "message" : "Failed to complete the job.",
  "error" : {
    // Some error logs.
  }
}
```

```
{
  "status" : 1,
  "message" : "Some internal error occurred.",
  "error" : {
    // Some error logs.
  }
}
```
