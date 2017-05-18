JOB
==

```
DELETE request
https://smartallysupport.herokuapp.com/api/job?id=<job_identifier>
```

DESCRIPTION
--

>Deletes the queried job.

RESPONSE
--

**SUCCESS**

```
{
  "status" : 0,
  "message" : "Job removed."
}
```

**FAILURE**

```
{
  "status" : 1,
  "message" : "Incorrect 'id' in query."
}
```
