<template>
<div class="footer-form-box">
    <h1 class="footer-header">Get Notified</h1>
  <form class="footer-form" action="#">
      <fieldset class="footer-form-field">
        <legend class="footer-sub-header">Sign up for our newsletter!</legend>
            <label for="email"></label>
            <input class="footer-email-input" type="text" for="email" placeholder="Email address" name="mail" required>
            <input class="footer-join-btn" type="submit" value="Join">
      </fieldset>
  </form>
</div>
</template>

<script>
export default {
    name: "GetNotifiedSection",
}
</script>

<style>
    .footer-form-box {
        width: 41rem;
    }
    .footer-header, 
    .footer-sub-header {
        text-align: center;
        color: #EDDCB0;
        font-weight: 700;
    }
    .footer-header {
        font-size: 4rem;
    }
    .footer-sub-header {
        font-size: 1.5rem;
    }
    .footer-join-btn {
        text-transform: uppercase;
    }
    .footer-form-field {
        display: flex;
        justify-content: center;
        border: none;
    }
    .footer-email-input {
        border: none;
        background-color: #EDDCB0;
        padding: 1.3rem 2.2rem;
        border-radius: 5rem;
    }
</style>