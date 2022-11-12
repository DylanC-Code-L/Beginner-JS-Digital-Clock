/**
 * Change the locality timezone
 * @param  {Function} getTime callback to set the new locality timezone
 */
export function changeLocality(getTime) {
    const buttons = document.querySelectorAll("li");
    /**
     * Event when button clicked
     * @param  {HTMLLIElement} btn
     */
    const clickEvent = (btn) => btn.addEventListener("click", ({ target }) => {
        switchFocus(target);
        getLocality(target);
    });
    /**
     * Switch the design focus on the target clicked
     * @param  {any} target
     */
    const switchFocus = (target) => {
        const focus = document.querySelector(".focus");
        focus === null || focus === void 0 ? void 0 : focus.classList.remove("focus");
        target.classList.add("focus");
    };
    /**
     * Play callback for change locality timezone
     * @param  {any} target
     */
    const getLocality = (target) => {
        const { id } = target;
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
