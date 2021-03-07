export default ({ isServer }) => {
    if (isServer) return;
    if (window.location.hash === '') return;

    const header = document.querySelector(window.location.hash);
    console.log(header);
    if (header === undefined) return;
    if (header === null) return;
  
    header.scrollIntoView();
}