import { error } from "@sveltejs/kit";
import twilio from "twilio";
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { name, email, message } = await request.json();
  // console.log("\n Name: ", name, "\n Email: ", email, "\n Message: ", message, "\n");
  const bodyOfMessage = `\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`

  try {
    //twilio code
    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;

    console.log("accountSid: ", accountSid, "\n authToken: ", authToken, "\n");

    const client = twilio(accountSid, authToken);
    const twilioNumber = '+18665168438'; // from number
    const toNumber = '+14043748057'

    client.messages.create({
      body: bodyOfMessage,
      from: twilioNumber,
      to: toNumber
    })
      .then(message => console.log(message.sid)).catch(err => console.log("WELL HERE's YOUR ERROR: ", err));

    // console.log("accountSid: ", accountSid, "\n authToken: ", authToken, "\n");
    return new Response("OK", { status: 200 })
  }
  catch (err: any) {
    return new Response("FAIL", error(400, err))
  }
}
