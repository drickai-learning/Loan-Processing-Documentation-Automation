document.getElementById("loanForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    amount: form.amount.value,
    purpose: form.purpose.value
  };

  // 👇 Replace this with your Make.com webhook URL later
  const webhookURL = "https://hook.eu2.make.com/swnbdateujocsmdauvqygy2mn2e7ipk7";

  try {
    const res = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      document.getElementById("status").textContent = "✅ Application submitted!";
      form.reset();
    } else {
      document.getElementById("status").textContent = "❌ Failed to send. Try again.";
    }
  } catch (err) {
    document.getElementById("status").textContent = "⚠️ Network error.";
  }
});
