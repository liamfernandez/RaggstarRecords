// Method to communicate with twilio endpoint to send message
export async function SendMessage(body: any) {
  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

// Method to communicate with server call that will add email to google sheet
export async function EmailNewsletterCapture(body: any) {
  return await fetch('/api/newsletter/capture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
