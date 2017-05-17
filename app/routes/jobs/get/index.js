// Call different files based on the query provided.
module.exports = (request, response) => {
  // If the request query has an _id in it,
  // return just that job.
  if (request.query.id) {
    return require('./jobById')(request, response);
  }
  // Else return jobs in last 30 mins.
  return require('./undoneJobs')(request, response);
}
