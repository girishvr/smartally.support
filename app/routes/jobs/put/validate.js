// Export the validation.
module.exports = (job, request, response) => {
  // Get values from request body.
  const name = request.body.name;
  const amount = request.body.amount;
  const userid = request.body.userid;
  const isoDate = new Date(request.body.date);
  const invoiceNo = request.body.invoice;

  console.log(request.body);
  // Validate if all the fields are present.
  if ((name == undefined) || (amount == undefined) || (userid == undefined)) {
    return response.json({
      status: 1,
      message: 'Incomplete request. Please send all mandatory fields.'
    });
  }
  // Update job.
  if (invoiceNo) { // See if the invoiceNo exists.
    job.invoiceNo = invoiceNo;
  }

  if (isoDate) { // See if the date exists.
    let date = new Date(isoDate);
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
