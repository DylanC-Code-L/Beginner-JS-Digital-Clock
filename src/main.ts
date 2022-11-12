import { changeLocality } from "./changeLocality.js";

/**
 * Master function
 * Generate time, launch timer and active events on locality buttons
 * @returns void
 */
function launchTimer(): void {
  getTime();
  timer();
  changeLocality((locality: string) => getTime(locality));
}

/**
 * Generate time about the locality parameter and apply it to the h1
 * @param  {string="Europe/Paris"} locality
 */
function getTime(locality: string = "Europe/Paris"): void {
  const h1 = document.querySelector("h1") as HTMLHeadingElement;
  const date: Date = new Date();
  const time: string = date
    .toLocaleString("fr-FR", { timeZone: locality })
    .split(" ")[1];

  h1.textContent = time;
}

/**
 * Launch and increment timer
 */
function timer(): void {
  const h1 = document.querySelector("h1") as HTMLHeadingElement;
  if (h1 === undefined) throw new Error(`Typeof 'h1' => ${typeof h1}`);

  const intervalTimer = setInterval(
    () => incrementTimer(intervalTimer, h1.textContent, h1),
    1000
  );

  /** Increment H1 timer or clear interval
   * @param  {number} interval
   * @param  {string|null} time
   * @param  {HTMLElement} target
   */
  const incrementTimer = (
    interval: number,
    time: string | null,
    target: HTMLElement
  ) => {
    if (time === null) return clearInterval(interval);

    let [h, m, s]: (string | number)[] = time
      .split(":")
      .map((unit: string) => parseInt(unit));

    if (s < 59) s++;
    else if (s >= 59 && m < 59) {
      s = 0;
      m++;
    } else if (s >= 59 && m >= 59 && h < 24) {
      s = 0;
      m = 0;
      h++;
    } else if (s >= 59 && m >= 59 && h >= 24) {
      s = 0;
      m = 0;
      h = 0;
    }

    if (s < 10) s = "0" + s;
    if (m < 10) m = "0" + m;
    if (h < 10) h = "0" + h;

    target.textContent = `${h}:${m}:${s}`;
  };
}

window.addEventListener("DOMContentLoaded", launchTimer);
