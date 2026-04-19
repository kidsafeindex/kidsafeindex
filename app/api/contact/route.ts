export async function POST(request: Request) {
  try {
    const body = await request.json();

    const rawName = body.name;
    const rawEmail = body.email;
    const rawMessage = body.message;

    if (
      typeof rawName !== "string" ||
      typeof rawEmail !== "string" ||
      typeof rawMessage !== "string"
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid form submission." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const name = rawName.trim();
    const email = rawEmail.trim().toLowerCase();
    const message = rawMessage.trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name is too long." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (email.length > 254) {
      return new Response(
        JSON.stringify({ error: "Email address is too long." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const baseId = process.env.AIRTABLE_BASE_ID;
    const token = process.env.AIRTABLE_TOKEN;
    const webhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;

    if (!baseId || !token) {
      return new Response(
        JSON.stringify({ error: "Missing Airtable environment variables." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/Contact%20Messages`;

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Message: message,
          Source: "Website Contact Form",
          Status: "New",
        },
      }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      return new Response(
        JSON.stringify({ error: `Airtable error: ${errorText}` }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const airtableData = await airtableResponse.json();
    const recordId = airtableData.id;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          recordId,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}