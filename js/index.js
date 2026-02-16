// Portfolio Index - Helper functions for UI interactions
// Note: App initialization, experience duration calc, tooltips & AOS are now in app.js

/**
 * Populate certificate modal with image and PDF link
 * @param {string} imgSrc - Path to certificate image
 * @param {string} certUrl - URL to certificate PDF
 */
function populatedata(imgSrc, certUrl) {
  document.getElementById("cert_img_field").src = imgSrc;
  document.getElementById("cert_url_field").href = certUrl;
  console.log("Certificate modal opened");
}

/**
 * Display time-based greeting message
 * Called on page load via onload="showGreeting()" on body tag
 */
function showGreeting() {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greet = '';
  let msg = '';

  if (hrs < 12) {
    greet = 'Good Morning! &#127773;';
    msg = 'Nothing is impossible when you put your mind, heart, soul, and sweat into it. Have a great morning!';
  } else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon! &#127774;';
    msg = 'Every experience, No matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.';
  } else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening! &#127770;';
    msg = 'Evenings are life\'s way of saying that you are closer to your dreams.';
  }

  const greetingEl = document.getElementById('greetingMessage');
  const customWishEl = document.getElementById('customWish');

  if (greetingEl) {
    greetingEl.innerHTML = 'Hey, <b>' + greet + '</b>';
  }
  if (customWishEl) {
    customWishEl.innerHTML = msg;
  }
}
