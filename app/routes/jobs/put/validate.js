// Export the validation.
module.exports = (job, request, response) => {
  // Get values from request body.
  const name = request.body.name;
  const amount = request.body.amount;
  const userid = request.body.userid;

  console.log(request.body);
  // Validate if all the fields are present.
  if ((name == undefined) || (amount == undefined) || (userid == undefined)) {
    return response.json({
      status: 1,
      message: 'Incomplete request. Please send all mandatory fields.'
    });
  }
  // Update job.
  if (request.body.invoice) { // See if the invoiceNo exists.
    job.invoiceNo = request.body.invoice;
  }

  if (request.body.date) { // See if the date exists.
    let date = new Date(request.body.date);
    if (date) { // See if the passed date is parsed.
      job.billDate = date;
    }
  }
  job.name = name;
  job.amount = amount;
  job.completedBy = userid;
  job.status = true;
  // Save.
  return require('./save')(job, response);
}
