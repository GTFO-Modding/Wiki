export default ({ isServer }) => {
    if (isServer) return;

    // crimge
    document.body.onload = () => document.body.querySelector("div#app").setAttribute("data-loaded", "");

    if (window.location.hash === '') return;

    const header = document.querySelector(window.location.hash);
    console.log(header);
    if (header === undefined) return;
    if (header === null) return;

    header.scrollIntoView();
}