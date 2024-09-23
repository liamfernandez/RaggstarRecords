import { error } from "@sveltejs/kit";
import { addEmailToGoogleSheet } from "$lib/server/googleDriveServices/googleDriveService.js";


export async function POST({ request }) {
  const { email, source } = await request.json();

  try {
    await addEmailToGoogleSheet(email, source);
    return new Response("OK", { status: 200, statusText: `Email [${email}] appended to google sheet!\n Captured at [${source}]` })
  }
  catch (err: any) {
    console.log(JSON.stringify(err, null, 2));
    return new Response("FAIL", error(400, err));
  }
}
