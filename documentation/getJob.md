JOB
==

```
GET request
https://smartallysupport.herokuapp.com/api/job?id=<job_identifier>
```

DESCRIPTION
--

>Fetches the job with queried request identifier.

>If the `{ "status" : true }`, use the `{ "name" : String, "amount" : String }` and  [`DELETE`](https://github.com/MuqThe2nd/smartally.support/blob/master/documentation/deleteJob.md) the job.

RESPONSE
--

**SUCCESS**

```
/*
  "name", "amount" will contain the contain the result of the scan from job, after the "status" is "true".
*/

{
  "status" : 0,
  "message" : "Job found.",
  "job" : {
    "imageEp" : String,
    "name" : String,
    "amount" : String,
    "date" : String,
    "status" : Boolean,
    "completedBy" : String
  }
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
  "message" : "Some internal error occurred.",
  "error" : {
    // Some error logs.
  }
}
```
