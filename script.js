const form = document.getElementById("collegeForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzFYZRtooeKBiEeNj3dORk1MYXRAPjSorRc_mwVAexka3ETBRR6s8x87aR6FXwdG3iYuA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    status.innerText = "Submitted Successfully";
    form.reset();

    setTimeout(() => {
    // clear the text
    status.innerText = "";   
    // reload the page
    location.reload();       
}, 2000);

  } catch (error) {
    status.innerText = "Network error. Try again.";
    console.error("Network Error:", error);
  }
});
