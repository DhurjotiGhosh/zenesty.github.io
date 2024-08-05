function navigate(section) {
    console.log("Navigating to " + section);
    if (section === 'home') {
        window.scrollTo(0, 0);
    } else {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
zz