export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body.email;

    if (typeof rawEmail !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const email = rawEmail.trim().toLowerCase();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required." }),
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
    const webhookUrl = process.env.MAKE_SUBSCRIBER_WEBHOOK_URL;

    if (!baseId || !token) {
      return new Response(
        JSON.stringify({ error: "Missing Airtable environment variables." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/Subscribers`;

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Email: email,
          Source: "Website",
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
          email,
          source: "Website",
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