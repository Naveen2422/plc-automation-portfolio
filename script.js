const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ADD YOUR PROJECT MEDIA:
   1) Put project screenshots in assets/projects/.
   2) Replace each .image-placeholder in index.html with:
      <img class="project-photo" src="assets/projects/your-image.jpg" alt="Description of your project" />
   3) For a YouTube video, replace the video-placeholder block with:
      <iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
        title="Factory I/O project demonstration" allowfullscreen loading="lazy"></iframe>
   4) Add approved downloadable files under project-files/ and update the relevant href in index.html.
*/
