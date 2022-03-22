import Job from "../models/jobModel.js"

let jobsServices = {}

jobsServices.getJobs = async (req,res) => {
    try{
        const allJobs = await Job.findAll()

        return res.json(allJobs)
    }catch(error) {
        return res.json(error)
    }
}

jobsServices.getAJob = async (req,res) => {

    const id = req.params.id
    try{
        const selectedJob = await Job.findByPk(id)

        return res.json(selectedJob)
    }catch(error) {
        return res.json(error)
    }
}

jobsServices.postJobs = async (req,res) => {
    try{
        const {title, description, company, type, location} = req.body
        const newJob = await Job.create({
            title,
            description,
            company,
            type,
            location
        })

        return res.json(newJob)
    }catch(error){
        return res.json(error)
    }
}

jobsServices.updateJob = async (req,res) => {
    const id = req.params.id

    try{
        const {title, description, company, type} = req.body
        const selectedJob = await Job.findByPk(id)

        if(selectedJob){
            title ? selectedJob.title = title: selectedJob.title = selectedJob.title
            description ? selectedJob.description = description: selectedJob.description = selectedJob.description
            company ? selectedJob.company = company: selectedJob.company = selectedJob.company
            type ? selectedJob.type = type: selectedJob.type = selectedJob.type

            selectedJob.save()
        }else{
            res.json('User does not exist')
        }

        return res.json(selectedJob)
    }catch(error){
        return res.json(error)
    }
}


jobsServices.deleteJob = async (req,res) => {

    const id = req.params.id
    try{
        const selectedJob = await Job.findByPk(id)

        selectedJob.deleted_at = new Date()

        selectedJob.save()

        return res.json(selectedJob)
    }catch(error) {
        return res.json(error)
    }
}



export default jobsServices