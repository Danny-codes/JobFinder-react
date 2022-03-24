import Job from "../models/jobModel.js";

let jobsServices = {};

jobsServices.getJobs = async (req, res) => {
  try {
    const allJobs = await Job.findAll();

    return res.json(allJobs);
  } catch (error) {
    return res.json(error);
  }
};

jobsServices.getAJob = async (req, res) => {
  const id = req.params.id;
  try {
    const selectedJob = await Job.findByPk(id);

    return res.json(selectedJob);
  } catch (error) {
    return res.json(error);
  }
};

jobsServices.getRequestedJobs = async (req, res) => {
  const role = req.body.role;
  const state = req.body.state;
  const category = req.body.category;
  const contract = req.body.contract;

  try {
    const allJobs = await Job.findAll();

    const filteredJobs = await allJobs.filter((job) =>
      role
        ? role === job.role
        : job.role === job.role && state
        ? state === job.state
        : job.role === job.role && category
        ? category === job.category
        : job.category === job.category && contract
        ? contract === job.contract
        : job.contract === job.contract
    );

    return res.json(filteredJobs);
  } catch (error) {
    return res.json(error);
  }
};

jobsServices.postJobs = async (req, res) => {
  try {
    const { role, description, company, contract, state, category } = req.body;
    const newJob = await Job.create({
      role,
      description,
      company,
      contract,
      state,
      category,
    });

    return res.json(newJob);
  } catch (error) {
    return res.json(error);
  }
};

jobsServices.updateJob = async (req, res) => {
  const id = req.params.id;

  try {
    const { title, description, company, type, category } = req.body;
    const selectedJob = await Job.findByPk(id);

    if (selectedJob) {
      role ? (selectedJob.role = role) : (selectedJob.role = selectedJob.role);
      description
        ? (selectedJob.description = description)
        : (selectedJob.description = selectedJob.description);
      company
        ? (selectedJob.company = company)
        : (selectedJob.company = selectedJob.company);
      contract
        ? (selectedJob.contract = contract)
        : (selectedJob.contract = selectedJob.contract);
      category
        ? (selectedJob.category = category)
        : (selectedJob.category = selectedJob.category);

      selectedJob.save();
    } else {
      res.json("User does not exist");
    }

    return res.json(selectedJob);
  } catch (error) {
    return res.json(error);
  }
};

jobsServices.deleteJob = async (req, res) => {
  const id = req.params.id;
  try {
    const selectedJob = await Job.findByPk(id);

    selectedJob.deleted_at = new Date();

    selectedJob.save();

    return res.json(selectedJob);
  } catch (error) {
    return res.json(error);
  }
};

export default jobsServices;
