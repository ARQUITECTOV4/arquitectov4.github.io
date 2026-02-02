const content = document.getElementById("content");

const pages = {

  home: `
    <section class="hero">
      <h1>
        Supporting people,<br>
        protecting dignity,<br>
        restoring futures.
      </h1>
    </section>

    <section class="section">
      <span class="label">Who We Are</span>
      <p class="text">
        We are an institutional humanitarian foundation dedicated to
        structured volunteering, ethical intervention, and long-term
        social impact. Our work focuses on individuals and communities
        affected by violence, abandonment, and systemic neglect.
      </p>
    </section>

    <div class="image">
      <img src="assets/hero.png" alt="Humanitarian action">
    </div>

    <section class="section">
      <span class="label">Our Mission</span>
      <p class="text">
        Our mission is to protect human dignity through direct action,
        sustainable support programs, and institutional responsibility.
        We operate where help is most urgently needed.
      </p>
    </section>

    <section class="section">
      <span class="label">Focus Areas</span>
      <ul class="work-list">
        <li>Support for women affected by violence</li>
        <li>Humanitarian aid for children in abandonment</li>
        <li>Rescue and protection of abandoned animals</li>
        <li>Community-based volunteering initiatives</li>
      </ul>
    </section>

    <div class="image">
      <img src="assets/women.png" alt="Women protection">
    </div>

    <section class="section">
      <span class="label">Our Approach</span>
      <p class="text">
        We prioritize long-term impact over short-term visibility.
        Our teams work directly with communities, building trust,
        restoring safety, and supporting autonomy.
      </p>
    </section>
  `,

  about: `
    <section class="section">
      <span class="label">About Us</span>
      <p class="text">
        Our foundation was created to respond where institutions fail.
        We believe humanitarian work must be responsible, transparent,
        and grounded in respect for human life.
      </p>
    </section>

    <div class="image">
      <img src="assets/womenn.png" alt="Supporting women">
    </div>

    <section class="section">
      <p class="text">
        We support women affected by violence through protection,
        guidance, and access to essential resources that help rebuild
        independence and safety.
      </p>
    </section>
  `,

  work: `
    <section class="section">
      <span class="label">Our Work</span>
      <p class="text">
        Our humanitarian programs focus on direct intervention and
        sustained support.
      </p>
    </section>

    <div class="image">
      <img src="assets/children.png" alt="Children support">
    </div>

    <section class="section">
      <p class="text">
        We assist children living in abandonment by providing shelter,
        education support, and emotional care.
      </p>
    </section>

    <div class="image">
      <img src="assets/dogs.png" alt="Animal rescue">
    </div>

    <section class="section">
      <p class="text">
        We rescue, rehabilitate, and protect dogs in abandonment,
        ensuring medical care and adoption opportunities.
      </p>
    </section>
  `,

  ideas: `
    <section class="section">
      <span class="label">Ideas</span>
      <p class="text">
        Humanitarian work must be grounded in dignity, not charity.
        Our ideas are shaped by ethics, responsibility, and long-term
        social vision.
      </p>
    </section>

    <section class="section">
      <p class="text">
        Through dialogue, research, and collaboration, we aim to
        influence how societies respond to vulnerability and injustice.
      </p>
    </section>
  `
};

function loadPage(page) {
  content.innerHTML = pages[page];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    loadPage(link.dataset.page);
  });
});

loadPage("home");
