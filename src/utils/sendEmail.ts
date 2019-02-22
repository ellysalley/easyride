import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxf3e81b8359ff43a0bb31490996f32f37.mailgun.org"
});

const sendEmail = (subject:string, html:string) => {
  const emailData = {
    from: "elly@mfitlab.com",
    to:"elly@mfitlab.com",
    subject,
    html
  }
  return mailGunClient.messages().send(emailData);
}

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://easyride.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};