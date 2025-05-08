// JavaScript to dynamically insert navigation elements
document.addEventListener('DOMContentLoaded', () => {
    // Define the navigation items
    const navItems = [
        { text: 'Home', href: 'earlylab_Home.html' },
        { text: 'About', href: 'earlylab_About.html' },
        { text: 'Research', href: 'earlylab_Research.html' },
        { text: 'People', href: 'earlylab_People.html' },
        { text: 'Publications', href: 'earlylab_Publications.html' },
        { text: 'Resources', href: '""' },
        { text: 'Contact', href: 'earlylab_Contact.html' }
    ];

    // Create a <ul> for the navigation list
    const ul = document.createElement('ul');

    // Loop through the nav items and create <li> for each
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('TAB');

        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the <ul> to the <nav>
    const headerNav = document.getElementById('Header_NAVIGATION');
    headerNav.appendChild(ul);
});