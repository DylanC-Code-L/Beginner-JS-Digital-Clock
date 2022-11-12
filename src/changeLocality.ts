/**
 * Change the locality timezone
 * @param  {Function} getTime callback to set the new locality timezone
 */
export function changeLocality(getTime: Function) {
  const buttons: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");

  /**
   * Event when button clicked
   * @param  {HTMLLIElement} btn
   */
  const clickEvent = (btn: HTMLLIElement) =>
    btn.addEventListener("click", ({ target }) => {
      switchFocus(target);
      getLocality(target);
    });

  /**
   * Switch the design focus on the target clicked
   * @param  {any} target
   */
  const switchFocus = (target: any) => {
    const focus = document.querySelector(".focus") as HTMLLIElement;
    focus?.classList.remove("focus");
    target.classList.add("focus");
  };

  /**
   * Play callback for change locality timezone
   * @param  {any} target
   */
  const getLocality = (target: any) => {
    const { id }: { id: string } = target;

    switch (id) {
      case "1":
        getTime("Europe/Paris");
        break;
      case "2":
        getTime("America/New_York");
        break;
      case "3":
        getTime("Portugal");
        break;
      case "4":
        getTime("Japan");
        break;
      case "5":
        getTime("Hongkong");
        break;
      default:
        getTime("Europe/Paris");
        break;
    }
  };

  buttons.forEach(clickEvent);
}
