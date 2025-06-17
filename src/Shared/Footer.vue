<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="footer">
    <div class="main-footer">
      <div class="left-footer">
        <div class="first-col">
          <h5>Navigate</h5>
          <ul class="footer_links">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div class="second-col">
          <h5>Collection</h5>
          <ul class="footer_links">
            <li>New Arrivals</li>
            <li>Features</li>
            <li>Catalog</li>
            <li>Brands</li>
          </ul>
        </div>
        <div class="third-col">
          <h5>Categories</h5>
          <ul class="footer_links">
            <li>Tables</li>
            <li>Lamps</li>
            <li>Chairs</li>
            <li>Sofas</li>
          </ul>
        </div>
      </div>

      <div class="fourth-col">
        <p class="address">399 Crowfield Rd, Phoenix, Arizona 85012</p>
        <a href="blank">asff@fddfd.com</a>
        <p>+201060618854</p>
      </div>
    </div>
    <div class="socials-footer">
      <p>Copyright &copy; All Rights Reserved</p>
      <div class="socialMedia-icons">
        <p>Get Socials</p>
        <button class="socialMedia-icons__social-btn">
          <i class="fa fa-twitter-square"></i>
        </button>
        <button class="socialMedia-icons__social-btn">
          <i class="fa fa-instagram"></i>
        </button>
        <button class="socialMedia-icons__social-btn">
          <i class="fa fa-pinterest"></i>
        </button>
        <button class="socialMedia-icons__social-btn">
          <i class="fa fa-facebook"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1023px) {
  .footer {
    display: flex;
    flex-direction: column;
    background-color: bisque;
    font-size: 21px;
  }
  .left-footer {
    display: flex;
    gap: 40px;
    justify-content: space-evenly;
    text-align: center;
    font-size: 20px;
  }
  .footer_links {
    list-style-type: none;
    column-gap: 10px;
    align-items: center;
    text-align: center;
  }
  .footer_links > li {
    padding-block: 10px;
  }

  .socialMedia-icons__social-btn {
    border: 0;
    background: none;
    font-size: 28px;
    &:hover {
      cursor: pointer;
      color: grey;
    }
  }
  .socials-footer {
    display: flex;
    justify-content: space-between;
    font-size: 21px;
  }
}
@media (min-width: 1024px) {
  .left-footer {
    display: flex;
    gap: 40px;
    justify-content: space-evenly;
    text-align: center;
    font-size: 20px;
  }
  .socialMedia-icons__social-btn {
    border: 0;
    background: none;
    font-size: 28px;
    &:hover {
      cursor: pointer;
      color: grey;
    }
  }
  .socials-footer {
    display: flex;
    justify-content: space-between;
    font-size: 21px;
  }
  .socialMedia-icons {
    display: flex;
  }
  .main-footer {
    background-color: bisque;
    display: flex;
    justify-content: space-around;
    font-size: 21px;
  }
  .footer_links {
    list-style-type: none;
    column-gap: 10px;
    align-items: center;
    text-align: center;
  }
  .footer_links > li {
    padding-block: 10px;
  }
}
</style>
