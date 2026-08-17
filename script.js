const $ = (s, e=document) => e.querySelector(s);
const content = portfolioContent;
document.querySelectorAll('[data-bind]').forEach(el => { const key = el.dataset.bind; if (content[key]) el.textContent = content[key]; });
$('.contact-email').href = `mailto:${content.email}`;
$('#year').textContent = new Date().getFullYear();
$('#techTicker').innerHTML = [...content.technologies, ...content.technologies].map(t => `<span>${t}</span><i>✦</i>`).join('');
$('#metrics').innerHTML = content.metrics.map(m => `<article class="metric reveal"><strong>${m.value}</strong><span>${m.label}</span></article>`).join('');
$('#projects').innerHTML = content.projects.map(p => `<article class="project project-${p.accent} reveal"><div class="project-top"><span class="project-num">CASE / ${p.number}</span><span class="project-arrow">↗</span></div><div class="project-signal"><i></i><i></i><i></i><b></b></div><div class="project-copy"><h3>${p.title}</h3><p>${p.text}</p></div><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><span class="project-ghost">${p.number}</span></article>`).join('');
$('#featuredProject').innerHTML = `<article class="featured-card reveal"><div class="featured-orbit orbit-one"></div><div class="featured-orbit orbit-two"></div><div class="featured-copy"><p class="eyebrow">${content.featuredProject.label}</p><h2>${content.featuredProject.title}</h2><p>${content.featuredProject.text}</p><div class="featured-actions"><a class="featured-live" href="${content.featuredProject.liveUrl}" target="_blank" rel="noopener">Visit live project <span>↗</span></a><a class="featured-code" href="${content.featuredProject.codeUrl}" target="_blank" rel="noopener">View source on GitHub <span>↗</span></a></div></div><div class="featured-mark"><span>R</span><i>LIVE</i></div></article>`;
$('#services').innerHTML = content.services.map(s => `<article class="service reveal"><span>${s.number}</span><div><h3>${s.title}</h3><p>${s.text}</p></div><b>↗</b></article>`).join('');
$('#timeline').innerHTML = content.experience.map(e => `<article class="timeline-item reveal"><span class="timeline-period">${e.period}</span><div><h3>${e.role}</h3><strong>${e.company}</strong><p>${e.detail}</p></div><i></i></article>`).join('');
$('#processSteps').innerHTML = content.process.map(p => `<article class="process-step reveal"><span>${p.number}</span><h3>${p.title}</h3><p>${p.text}</p></article>`).join('');
const toolMeta = {AWS:['aws','aws'], 'Microsoft Azure':['az','azure'], Docker:['dk','docker'], Kubernetes:['k8','kubernetes'], Linux:['li','linux'], Jenkins:['jn','jenkins'], Git:['git','git'], GitHub:['gh','github'], Terraform:['tf','terraform'], Ansible:['an','ansible'], Bash:['$','bash'], Python:['py','python'], CloudWatch:['cw','cloudwatch'], Prometheus:['pr','prometheus'], Grafana:['gr','grafana'], 'Azure Monitor':['am','azure'], IAM:['iam','security'], VPC:['vpc','security'], DNS:['dns','network'], VPN:['vpn','network'], 'Load Balancing':['lb','network']};
$('#stackGroups').innerHTML = content.stack.map(g => `<article class="stack-group reveal"><span>${g.label}</span><div>${g.items.map(i=>{const [,tone]=toolMeta[i]||['•','default'];return `<b class="tool-chip tone-${tone}"><i aria-hidden="true"></i>${i}</b>`}).join('')}</div></article>`).join('');
$('#socials').innerHTML = content.socials.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join('');

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }}), {threshold:.13});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const toggle = $('.nav-toggle'), links = $('.nav-links');
toggle.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
const navWrap = $('.nav-wrap'), topButton = $('.back-to-top');
window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 24);
  topButton.classList.toggle('visible', window.scrollY > 640);
}, {passive:true});
