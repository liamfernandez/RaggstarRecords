import { RequestHandler } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { addEmailToGoogleSheet } from "$lib/server/googleDriveServices/googleDriveService.js";


export async function POST({ request }) {
  const { email } = await request.json();
  // const bodyOfMessage = `\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\n`

  try {
    await addEmailToGoogleSheet(email);
    // const successSid = message.sid;
    return new Response("OK", { status: 200, statusText: `Email [${email}] appended to google sheet!` })
  }
  catch (err: any) {
    console.log(JSON.stringify(err, null, 2));
    return new Response("FAIL", error(400, err));
  }
}
