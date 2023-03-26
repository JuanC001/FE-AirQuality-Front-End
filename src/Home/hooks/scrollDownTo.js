export const scrollDownTo = (txt) => {

    const element = document.getElementById(txt);
    if (element) {

        element.scrollIntoView({behavior: 'smooth'});
        console.log(element);

    } else {
        console.log("Element not found");
    }

}