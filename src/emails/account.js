const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ayushijyoti0498@gmail.com',
        subject: 'Thank you for joining in!!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ayushijyoti0498@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodby, ${name}! Hope to see you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}