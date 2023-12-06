class Nav {
  static #HOME_PAGE = "https://google.com.ua";

  static #back = () => {
    return history.back();
  };

  static #forward = () => {
    return history.forward();
  };

  static #reload = () => {
    return location.reload();
  };

  static #changePage = (href) => {
    return location.assign(href);
  };

  static #go = () => {
    try {
      let url = new URL(window.input.value);
      this.#changePage(url.href);
    } catch (e) {
      alert("Введіть корректу URL адресу");
      console.log(e);
    }
  };

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE);
  };

  static init = () => {
    window.back.onclick = this.#back.bind(this);
    window.forward.onclick = this.#forward.bind(this);
    window.reload.onclick = this.#reload.bind(this);
    window.home.onclick = this.#home.bind(this);

    // якшо через стрілкові функції - то можна без .bind(this)
    window.go.onclick = this.#go;

    window.input.value = location.href;
  };
}

Nav.init();
