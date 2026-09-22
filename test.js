const fetch = require('node-fetch'); // If needed, but Node 18+ has fetch

async function test() {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "8579a69c-e7a0-412b-9679-46792d42e9b3",
        subject: `🔥 NUEVO LEAD CUALIFICADO: Test`,
        from_name: "Motor Local Automations",
        nombre: "Test Name",
        telefono: "123456789",
        problema: "Test Problem",
        inversion: "Test Inversion",
      })
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error("ERROR CAUGHT:", err);
  }
}
test();
