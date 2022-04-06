import nodemailer from 'nodemailer';

const sendMessage = async (req, res) => {
    const candidateEmail = req.body.candidateEmail
    const recruiterEmail = req.body.recruiterEmail
    const subject =  req.body.subject
    const text = req.body.text

    try{
        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "86fd240816f994",
              pass: "64c0ddfacee469"
            }
          });
        
          const message = {
            from: candidateEmail,
            to: recruiterEmail,
            subject: subject,
            text: text,
            html: text
          };

          transport.sendMail(message, (err) => {
            if(err){
                return res.status(400).json({
                    erro: true,
                    msg: "Error trying to send email"
                })
            }

            return res.json({"msg": "Message was sent"})
          })

    }catch(error){
        console.log(error)
    } 

}

export default sendMessage