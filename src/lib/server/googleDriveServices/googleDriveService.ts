// src/lib/googleSheetHelper.ts
import { auth as googleAuth, sheets_v4 } from '@googleapis/sheets';
import { GD_PROJECT_ID, GD_PRIVATE_KEY_ID, GD_PRIVATE_KEY, GD_CLIENT_EMAIL, GD_CLIENT_ID, GD_CLIENT_X509_CERT_URL } from "$env/static/private";

const auth_key = {
  "type": "service_account",
  "project_id": GD_PROJECT_ID,
  "private_key_id": GD_PRIVATE_KEY_ID,
  "private_key": GD_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": GD_CLIENT_EMAIL,
  "client_id": GD_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": GD_CLIENT_X509_CERT_URL,
  "universe_domain": "googleapis.com"
};

// Authenticate with Google Sheets API
async function authenticateGoogleSheets() {
  const auth = new googleAuth.GoogleAuth({
    credentials: auth_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const authClient = await auth.getClient();
  return new sheets_v4.Sheets({ auth: authClient as any });
}

const SHEET_NAME: string = 'Website:Blog';
const SHEET_ID = '1EvjFI-BhDq8r8QWGkpHlKnUvr4kryEVEjd212WGDOSE';
const SHEET_RANGE = `${SHEET_NAME}!J:L`;

export async function addEmailToGoogleSheet(email: string, source: string) {
  let sheets;
  try {
    sheets = await authenticateGoogleSheets();
  } catch (error) {
    console.log("Failed during authentication")
    throw error;
  }

  let nextRow;
  try {
    nextRow = await findNextEmptyCell(sheets)
  } catch (error) {
    console.log("Failed during finding next cell")
    throw error;
  }

  const values = [email, formatDateInEasternTimeZone(new Date()), source]


  // Append the new email
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!J${nextRow}:L${nextRow}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [values]
    }
  });
}

async function findNextEmptyCell(sheetsClient: sheets_v4.Sheets) {
  // Get the current values to find the next empty cell
  const getResponse = await sheetsClient.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE
  });

  const currentValues = getResponse.data.values || [];
  return currentValues.length + 1;
}


function formatDateInEasternTimeZone(date: Date): string {
  // Format options for the Eastern Time Zone
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  // Format the date
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedParts = formatter.formatToParts(date);

  // Extract the parts
  const parts: { [key: string]: string } = {};
  formattedParts.forEach(({ type, value }) => {
    parts[type] = value;
  });

  // Build the formatted string
  const formattedDate = `${parts.month}-${parts.day}-${parts.year} | ${parts.hour}:${parts.minute}`;

  return formattedDate;
}
