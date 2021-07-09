<template>
<div class="footer-form-box">
    <h1 class="footer-header">Get Notified</h1>
    <h2 class="footer-sub-header">Sign up for our newsletter!</h2>
  <form class="footer-form" action="#">
      <fieldset class="footer-form-field">
            <label for="email"></label>
            <div class="footer-inputs">
                <input class="footer-email-input" type="text" for="email" placeholder="Email" name="mail" required>
                <input class="footer-join-btn" type="submit" value="Join">
            </div>
      </fieldset>
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

    .footer-form-box {
        width: 36rem;
        margin-left: 18rem;
        padding-bottom: 3.1rem;
        border-bottom: .2rem solid var(--primary-color);
    }
    .footer-header, 
    .footer-sub-header {
        text-align: center;
        color: var(--accent-color);
        font-weight: 700;
    }
    .footer-header {
        font-size: 4rem;
    }
    .footer-sub-header {
        font-size: 1.5rem;
    }
    .footer-form-field {
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
        right: 0;
        font-size: 1.4rem;
        font-weight: 700;
        background-color: var(--primary-color);
        text-transform: uppercase;
    }
    // .footer-join-btn:hover {
    //     background-color: #ceac58;
    // }

    @media only screen and (max-width: $x-small-screen) {
        .footer-header {
            font-size: 2.5rem;
        }
        .footer-form-box,
        .footer-email-input {
            width: 30rem;
        }
        .footer-form-box {
            margin: 0 auto;
            border-bottom: none;
        }
    }

</style>


<docs>
This is the section of the footer with a form that allows the user to subscribe to the newsletter.

## Variables Used:
--font: Which controls the font of the page. If for whatever reason the font is changed in a theme, it will change here.
--primary-color: If a theme were to change this variable it would also change the color of the button.
$x-small-screen: A media query breakpoint for extra small devices like phones so that the page is responsive. If this variable is changed, the media query breakpoint will change in all other components. This variable is an SCSS variable because CSS custom properties do not work in media queries.

## Examples
```jsx
<GetNotifiedSection />
```

</docs>