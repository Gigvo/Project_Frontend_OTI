document.body.addEventListener("click", (ev) =>{
    const isExpandableTitle = ev.target.closest(".title_bar");
    const expandable = ev.target.closest(".expand");
	
    if (!isExpandableTitle) {
        

        return;
    }
    
    ev.target.textContent = ev.target.textContent.includes("+3 more") ?
    "See Less" : "+3 more";
    expandable.classList.toggle("expand--open")
    
});




document.body.addEventListener("click", (ev) =>{

    const isExpandableTitleImage = ev.target.closest(".more");
    const expandableImage = ev.target.closest(".expand_image");

    if (!isExpandableTitleImage) {
        return;
    }

    ev.target.textContent = ev.target.textContent.includes("More") ?
    "Collapse" : "More";
    expandableImage.classList.toggle("imgexpand--open")

});

let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById("lightdarkmode")
const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}
const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}
if(lightmode === "active") enableLightMode()

themeSwitch.addEventListener("click", () =>{
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
});




