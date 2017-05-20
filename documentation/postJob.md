JOB
==

```
POST request
https://smartallysupport.herokuapp.com/api/job/
```

DESCRIPTION
--

>Creates a OCR job request for the supporting application to process, and returns the job identifier for reference.

REQUEST
--

```
// Needs to be a valid URL to the image.
{
  "imageEp" : String
}
```

RESPONSE
--

**SUCCESS**

```
/*
  "name", "amount" will contain the contain the result of the scan from job, after the "status" is "true".
*/

{
  "status" : 0,
  "message" : "Job saved.",
  "job" : {
    "_id" : String,
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
  "message" : "Image link required to initiate job."
}
```

```
{
  "status" : 1,
  "message" : "Failed to save the job."
}
```
