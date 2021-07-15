<template>
<div class="footer-form-box">
    <h2 class="footer-header-container">
        <span class="footer-header">Get Notified</span>
        <span class="footer-sub-header">Sign up for our newsletter!</span>
    </h2>
  <form class="footer-form" action="#">
            <label for="email"></label>
            <div class="footer-inputs">
                <input class="footer-email-input" type="text" for="email" placeholder="Email" name="mail" required>
                <input class="footer-join-btn" type="submit" value="Join">
            </div>
  </form>
</div>
</template>

<script>
export default {
    name: "GetNotifiedSection",
}
</script>

<style lang="scss"> 
@import "../assets/_variables.scss";
    .footer-header-container {
        display: flex;
        flex-direction: column;
    }
    .footer-form-box {
        width: 36rem;
        margin: 0 auto;
        padding-bottom: 3.1rem;
        border-bottom: .2rem solid var(--primary-color);
    }
    .footer-header, 
    .footer-sub-header {
        font-size: var(--h2);
        text-align: center;
        color: var(--accent-color);
        font-weight: 700;
    }
    .footer-sub-header {
        font-size: var(--h5);
    }
    .footer-form {
        display: flex;
        justify-content: center;
        border: none;
    }
    .footer-email-input, .footer-join-btn {
        border: none;
        background-color: var(--accent-color);
        padding: 1.3rem 2.2rem;
        border-radius: 5rem;
    }
    .footer-inputs {
        position: relative;
        margin-top: 2.8rem;
    }
    .footer-email-input {
        width: 36rem;
        font-size: 1.6rem;
    }
    .footer-email-input:focus {
        outline: none;
    }
    .footer-join-btn {
        position: absolute;
        height: 100%;
        right: 0;
        font-size: var(--h5);
        font-weight: 700;
        background-color: var(--primary-color);
        text-transform: uppercase;
    }
    // .footer-join-btn:hover {
    //     background-color: #ceac58;
    // }

    @media only screen and (max-width: $x-small-screen) {
        .footer-form-box {
            border-bottom: none;
        }
    }

</style>

<docs>
This is the section of the footer with a form that allows the user to subscribe to the newsletter.

## Variables Used:
--font, --primary-color, --accent-color, --h3
## Examples
```jsx
<GetNotifiedSection />
```

</docs>