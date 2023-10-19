import { error } from "@sveltejs/kit";
import twilio from "twilio";
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { name, email, message } = await request.json();
  const bodyOfMessage = `\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`

  try {
    //twilio code
    const accountSid = TWILIO_ACCOUNT_SID;
    const authToken = TWILIO_AUTH_TOKEN;

    const client = twilio(accountSid, authToken);
    const twilioNumber = '+18665168438'; // from number
    const toNumber = '+17706958898'

    const message = await client.messages.create({
      body: bodyOfMessage,
      from: twilioNumber,
      to: toNumber
    })

    const successSid = message.sid;
    return new Response("OK", { status: 200, statusText: `Message sent successfully! ID: ${successSid}` })
  }
  catch (err: any) {
    return new Response("FAIL", error(400, err))
  }
}
