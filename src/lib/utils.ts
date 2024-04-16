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
