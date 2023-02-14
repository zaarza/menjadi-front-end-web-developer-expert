class LoadingCircle extends HTMLElement {
  constructor() {
    super();
    this.classList.add('lds-ring');
    this.innerHTML = '<div></div><div></div><div></div><div></div>';
  }
}

customElements.define('loading-circle', LoadingCircle);
export default LoadingCircle;
