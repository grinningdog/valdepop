// ==========================================
// U3A VALL DEL POP - WEBSITE SCRIPTS
// ==========================================

// --- MOBILE NAVIGATION ---
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// ==========================================
// ==========================================
// ---- PASTE FROM HERE ----
// (Highlight everything below this line down to "PASTE TO HERE" and replace it)
// ==========================================
// ==========================================

const DEFAULT_EVENTS = [
    {
        "id": 1,
        "title": "Wine Tasting Tours4",
        "date": "July 15, 2026",
        "description": "Join us for a guided tour of local vineyards with wine tasting and lunch included.",
        "category": "Trip",
        "image": "hday3.jpg"
    },
    {
        "id": 2,
        "title": "Beach Day - Calpe",
        "date": "July 22, 2026",
        "description": "A relaxing day at the beach with optional lunch at a seaside restaurant.",
        "category": "Outing",
        "image": ""
    },
    {
        "id": 3,
        "title": "Historic Valencia Tour",
        "date": "August 5, 2026",
        "description": "Full day trip to Valencia including the City of Arts and Sciences.",
        "category": "Cultural Trip",
        "image": ""
    },
    {
        "id": 4,
        "title": "Asturias and Cantabria",
        "date": "September 2027",
        "description": "We will be staying in Cangas de Onis on the Cantabria/Asturias border. Bed and breakfast. Hotel Casa de Campo. It has a restaurant, but if you want an evening meal out in Cangas, the coach will transport you.\n\n\nWe are going to break the long journey by stopping for one night on the way there in Tudela at the Hotel Sercotel, then one night on the return journey at the Hotel Tibur in Zaragoza. There will be plenty of comfort breaks when travelling.\n\nPRICE: €860 pp for a couple\n(320 single supplement)\nPrice set for 40 persons to go.\n\nA €200 euro deposit per person will be required when putting your name down. If you pay by bank transfer, your surname and the letters \"Ast/Cant\" must be used as a reference so we know who sent it and which trip it refers to.\nItinerary\n\nDepart Xalo on 12th September 2027 to Tudela for 1 night Hotel Sercotel (comfort breaks on the way).\n\nThe coach will leave Xalo rastro car park, time to be arranged.\n\nDay 2—13/09—Breakfast, then drive to destination Cangas de Onis, Hotel Casa de Campo, time to unpack and stroll around and find somewhere to have your evening meal. As stated if you don't want to use the hotel restaurant, the coach will take us into Cangas. We are approximately 3 kilometres from the centre of the town.\n\nDay 3—14/09—Breakfast and depart to visit with a local guide:- Santander (capital of Cantabria). Pereda Gardens, Santander Cathedral. Lighthouse to view entire city and Magdalena peninsula. Lunchtime. Afternoon Santillana del Mar and a walking tour of its historic centre. Onwards then to Comillas, passing the Sobrellano Palace to visit Gaudi's Capricho (one of his first houses he designed, entrance inc). Return to Cangas de Onis and hotel.\n\nDay 4—15/09—Breakfast then visit Oviedo (capital of Asturias) with a local guide. Coach will take us on a panoramic tour of the city, passing the Palacio de Congresos, Campo de San Francisco and Campoamor theatre where the Princess of Asturias awards ceremony takes place, making our way to the Market. Lunchtime. Afternoon visit Gijon with a local guide. Return to our hotel.\n\nDay 5—16/09—Visit the famous Basilica of Covadonga along with the holy cave. Lunchtime. Afternoon visit Ribadesella and take a tour of the Lonja, Old Town, Fishing Port and Paseo Indiano. Return to our hotel.\n\nDay 6—17/09—Breakfast and depart to the Picos de Europa. Going through the Hermida gorge to Fuente Dé, where we can go up by cable car to admire the views of the Mirador del Cable. Continue onto the Monastry of Santo Toribio de Liébana, where the largest piece of the cross of Christ is preserved. We then visit Potes (capital of Picos de Europa) touring its historic centre. Lunchtime. Afternoon we visit San Vicente de la Barquera, a very popular fishing village on the Cantabrian coast. There is a castle here as well as a rich heritage. Return to hotel.\n\nDay 7—18/09—Breakfast and depart Cangas de Onis for El Soplao caves (entrance inc). Onward to Zaragoza, Hotel Tibur, (1 night) free time in the city.\n\nDay 8—19/09—Breakfast, depart Zaragoza to Xalo. Comfort breaks en route.\n\nIncluded in the price is all the coach travel, breakfasts, accommodation, an English speaking guide to accompany us and basic travel insurance. Lunches and evening meals are NOT included. Also 2 entrance fees included.\n\nPlease be aware:- whilst every effort is made to accommodate all dietary requirements, it may be beneficial to carry your own snacks. Also regarding mobility—there is walking and climbing steps/stairs on some of the excursions and not sure if all hotels have a lift.\n\nTo Book contact:-\n\nSonia Higginson at GA's or coffee mornings",
        "category": "Trip",
        "image": "orig_cantabria.jpg"
    }
];

const DEFAULT_NEWS = [
    {
        "id": 1,
        "title": "Spring Fayre 2026",
        "date": "August 21st",
        "excerpt": "Spring Fayre in Jalon 2026 - A success!",
        "content": "Having postponed due to bad weather earlier in the month, we certainly couldn't have wished for it to be hotter on Sunday 24th May for our Spring fayre and car boot sale.\n\nOver 80 stallholders displayed their wares and there was something on offer for everybody from beautiful homemade crafts, sourdough bread, homemade condiments to vintage wear and car boot bargains.\n\nAs usual our fabulous u3a bakers and friends came up trumps with a fantastic array of cakes and savouries which were a huge success and so much enjoyed.\n\nThe bbq kindly run by Andy Keay and Jeni Buck was a big hit despite the heat, as was the tea and coffee stall run by Sonia and Graham.\n\nNo surprise the bar did a roaring trade in cold drinks and 2 lovely young visitors of ours did cold drink and food runs to the stallholders which was gratefully received. Oh to have that much energy!\n\nPaul and Jude were as fabulous as ever entertaining visitors and stallholders alike and some even enjoyed a dance despite the heat!\n\nTina and Gary did a sterling job on the tombola which almost sold out. Thanks also to Marian who helped to organise it before their trip to the UK.\n\nA huge thank you to everyone who took part and to everyone who came and supported the event. We raised a fabulous €1,695 which will go into Goodwill funds to be shared at the end of the year to local charities.\n\nI delivered all the leftover bbq food and cakes and savouries to Project 4 All that evening and they had enough to supply the entire homeless food run on Monday which is wonderful. They were so grateful and I'm sure the ladies and men on the streets enjoyed the treats. I love how we can help other charities and those who are less fortunate than ourselves.\n\nThank you again for your support.",
        "image": "spring-fayre.jpg"
    }
];

const DEFAULT_GROUPS = [
    {
        "id": 1,
        "name": "Bridge",
        "description": "Leader  Wendy Sim\n\nTelephone  711 09 05 16\n\nLocation Cooperativa, Parcent\n\nHow Often  Weekly\n\nThe aim of this group is to provide an opportunity for people to play bridge in a relaxed and friendly atmosphere. It is particularly aimed at:\n\nthose who have recently learned to play and want to practise\nthose who haven't played for a long time and feel that they are \"rusty\", or not up-to-date with the latest bidding systems those who just want to play a friendly game of bridge.\n\nWe would like to have more players, so please do call if you'd like to come or want more information.",
        "day": "Wednesday 15:00 - 17:00",
        "contact": "Wendy Sim",
        "image": "intro.jpg",
        "email": "",
        "subject": ""
    },
    {
        "id": 2,
        "name": "Ballroom, Latin & Sequence Dancing",
        "description": "Ballroom, Latin & Sequence Dancing\n\nLeader\n\t\n\nDuncan Thompson\n\nTelephone\n\t\n\n634 33 46 89\n\nLocation\n\t\n\nBeniarbeig - Salon above the library\n\nDay/Time\n\t\n\nTuesday 9.30 - 10:00 Ballroom\n\nTuesday 10:00 - 11:30 Sequence\n\nHow Often\n\t\n\nWeekly\n\nBallroom Dancing is not only fun but insanely good for you.\n\nFeel free to dress up if you wish!\n\nNo matter what your level of fitness, ballroom dancing is a great way to exercise. You also meet new friends, improve your balance and coordination and generally enjoy a feeling of achievement. What a great activity!\n\nThis activity is totally without charge either for the accommodation or the teaching.Also for those who wish to practise more come on a Friday evening to chance to dance. Again totally without charge.\n\nTuition will be given at both sessions.\n\nWe welcome all levels and use our more experienced members to tutor us",
        "day": "",
        "contact": "Duncan Thompson",
        "image": "intro2.jpg",
        "email": "",
        "subject": ""
    },
    {
        "id": 3,
        "name": "Allotments",
        "description": "Brigid Redmond - Deputy Group Leader & Communication\n\t\nWe have a large 6m x18m allotment in Jalon. It is ready to go, having been ploughed. There is a shed and water on site.\n\nSpring is in the air and we are raring to go. Please contact Brigid if you would like to find out more!",
        "day": "Xalo",
        "contact": "Sue Harvey",
        "image": "allotment.jpg",
        "email": "",
        "subject": ""
    },
    {
        "id": 4,
        "name": "Canasta",
        "description": "The Canasta group is now up and running. New members would be very welcome to join us. It is an ideal way to spend an afternoon in good company, even with a little time before and after the rounds for a short chat. It will not be an expensive afternoon, the restaurant is happy for us to play there, the only obligation is that we buy a drink.",
        "day": "Tuesday 14.00 - 16:00",
        "contact": "Mary Wood",
        "image": "canasta.jpg",
        "email": "",
        "subject": ""
    },
    {
        "id": 5,
        "name": "Chairfit",
        "description": "Chairfit Workout\n\nGentle and cardio movements with uplifting music to help you stay independent, confident and full of life. Improves body strength, mobility and balance to enhance physical and mental wellbeing.\n\nLeader:  Jacintha Hoogewerf\n\nTelephone  634320606\n\nLocation:\nCentro Social, Xalo\n\nHow Often:  Weekly",
        "day": "Wednesday 11.10-12.00",
        "contact": "Jacintha Hoogewerf",
        "image": "chairfit-intro.jpg",
        "email": "",
        "subject": ""
    }
];

const DEFAULT_ANNOUNCEMENTS = [
    {
        "id": 1,
        "header": "Come along and join in our next",
        "title": "GENERAL ASSEMBLY",
        "date": "THURSDAY 3RD SEPTEMBER 2026",
        "location": "- POLIVALENT, MURLA -",
        "link": "calendar.html"
    },
    {
        "id": 2,
        "header": "Members",
        "title": "COFFEE MORNING",
        "date": "THURSDAY 16TH JULY 2026",
        "location": "- RESTOBAR QUIXOTE, ORBA -",
        "link": "calendar.html"
    },
    {
        "id": 3,
        "header": "Friendship & Support",
        "title": "COFFEE MORNING",
        "date": "WEDNESDAY 1ST JULY 2026",
        "location": "- MY MERCAT, XALO -",
        "link": "calendar.html"
    }
];
// ==========================================
// ==========================================
// ---- PASTE TO HERE ----
// (Stop highlighting here)
// ==========================================
// ==========================================

// --- DATA RETRIEVAL ---
function getEvents() { try { const s = localStorage.getItem('u3a_events'); if (s && s !== '[]') return JSON.parse(s); } catch (e) {} return DEFAULT_EVENTS; }
function getNews() { try { const s = localStorage.getItem('u3a_news'); if (s && s !== '[]') return JSON.parse(s); } catch (e) {} return DEFAULT_NEWS; }
function getGroups() { try { const s = localStorage.getItem('u3a_groups'); if (s && s !== '[]') return JSON.parse(s); } catch (e) {} return DEFAULT_GROUPS; }
function getAnnouncements() { try { const s = localStorage.getItem('u3a_announcements'); if (s && s !== '[]') return JSON.parse(s); } catch (e) {} return DEFAULT_ANNOUNCEMENTS; }

// --- HELPER FUNCTIONS ---
function escapeHtml(t) { const d = document.createElement('div'); d.textContent = t || ''; return d.innerHTML; }
function formatText(t) { if (!t) return ''; const d = document.createElement('div'); d.textContent = t; return d.innerHTML.replace(/\n/g, '<br>'); }
function truncateText(text, maxLength) { if (!text) return ''; if (text.length <= maxLength) return text; return text.substring(0, maxLength).trim() + '...'; }

// --- PAGE LOADERS ---
// FIXED: Now shows 4 events instead of 3

function loadHomeEvents() {
    const c = document.getElementById('eventsContainer');
    if (c) { 
        c.innerHTML = getEvents().slice(0, 4).map(e => {
            const showSeeMore = e.description && e.description.length > 120;
            return `
                <div class="event-card">
                    ${e.image ? `<img src="${escapeHtml(e.image)}" class="card-image" alt="${escapeHtml(e.title)}">` : ''}
                    <div class="card-content">
                        <div class="event-date">${escapeHtml(e.date)}</div>
                        <h3>${escapeHtml(e.title)}</h3>
                        <p>${escapeHtml(truncateText(e.description, 120))}</p>
                        ${showSeeMore ? `<button class="btn-see-more" onclick="openEventModal(${e.id})">See More</button>` : ''}
                        <span class="event-category">${escapeHtml(e.category)}</span>
                    </div>
                </div>
            `;
        }).join(''); 
    }
}

function loadAllEvents() {
    const c = document.getElementById('allEventsContainer');
    if (c) { c.innerHTML = getEvents().map(e => `
        <div class="event-card">
            ${e.image ? `<img src="${escapeHtml(e.image)}" class="card-image" alt="${escapeHtml(e.title)}">` : ''}
            <div class="card-content">
                <div class="event-date">${escapeHtml(e.date)}</div>
                <h3>${escapeHtml(e.title)}</h3>
                <p>${escapeHtml(truncateText(e.description, 120))}</p>
                <button class="btn-see-more" onclick="openEventModal(${e.id})">See More</button>
            </div>
        </div>`).join(''); }
}

// FIXED: Link now points to a specific anchor ID
function loadHomeNews() {
    const c = document.getElementById('newsContainer');
    if (c) { c.innerHTML = getNews().slice(0, 3).map(n => `
        <div class="news-card">
            ${n.image ? `<img src="${escapeHtml(n.image)}" class="card-image" alt="${escapeHtml(n.title)}">` : ''}
            <div class="card-content"><div class="news-date">${escapeHtml(n.date)}</div><h3>${escapeHtml(n.title)}</h3><p>${formatText(n.excerpt)}</p><a href="latest-news.html#news-${n.id}" class="read-more">Read More →</a></div>
        </div>`).join(''); }
}

// FIXED: Added ID to the article so the anchor link works
function loadAllNews() {
    const c = document.getElementById('allNewsContainer');
    if (c) { c.innerHTML = getNews().map(n => `
        <article class="news-item" id="news-${n.id}">
            ${n.image ? `<img src="${escapeHtml(n.image)}" class="news-item-image" alt="${escapeHtml(n.title)}">` : ''}
            <div class="news-item-content"><div class="news-date">${escapeHtml(n.date)}</div><h3>${escapeHtml(n.title)}</h3><p>${formatText(n.content)}</p></div>
        </article>`).join(''); }
}

function loadActivityGroups() {
    const c = document.getElementById('groupsContainer');
    if (c) { 
        c.innerHTML = getGroups().map(g => {
            let buttonsHtml = `<button class="btn-see-more" onclick="openGroupModal(${g.id})">See More</button>`;
            if (g.email) {
                const subjectParam = g.subject ? `?subject=${encodeURIComponent(g.subject)}` : '';
                buttonsHtml += `<a href="mailto:${escapeHtml(g.email)}${subjectParam}" class="btn-contact-leader">Contact Group Leader</a>`;
            }
            return `
                <div class="group-card">
                    ${g.image ? `<img src="${escapeHtml(g.image)}" class="card-image" alt="${escapeHtml(g.name)}">` : ''}
                    <div class="card-content">
                        <h3>${escapeHtml(g.name)}</h3>
                        <p>${escapeHtml(truncateText(g.description, 120))}</p>
                        <div class="card-actions">${buttonsHtml}</div>
                    </div>
                </div>`;
        }).join(''); 
    }
}

function loadAnnouncements() {
    const c = document.getElementById('announcementsContainer');
    if (!c) return;
    const anns = getAnnouncements();
    let html = ''; 
    anns.forEach((a, index) => {
        const colorClass = index % 2 === 0 ? 'announcement-purple' : 'announcement-green';
        html += `
            <div class="announcement-card ${colorClass}">
                <div class="announcement-header">
                    <h3>${escapeHtml(a.header)}</h3>
                    <h2>${escapeHtml(a.title)}</h2>
                </div>
                <div class="announcement-body">
                    <p class="announcement-date"><strong>${escapeHtml(a.date)}</strong></p>
                    <p class="announcement-location"><strong>${escapeHtml(a.location)}</strong></p>
                    ${a.link ? `<a href="${escapeHtml(a.link)}" class="announcement-link">Click Here for more Information</a>` : ''}
                </div>
            </div>`;
    });
    c.innerHTML = html;
}

// --- MODAL FUNCTIONS ---
function openEventModal(id) {
    const event = getEvents().find(e => e.id === id); if (!event) return;
    const imgContainer = document.getElementById('eventModalImageContainer');
    imgContainer.innerHTML = event.image ? `<img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.title)}">` : '';
    document.getElementById('eventModalTitle').textContent = event.title;
    document.getElementById('eventModalDescription').innerHTML = formatText(event.description);
    document.getElementById('eventModalDate').innerHTML = `<strong>Date:</strong> ${escapeHtml(event.date)}`;
    document.getElementById('eventModalCategory').innerHTML = `<strong>Category:</strong> ${escapeHtml(event.category)}`;
    document.getElementById('eventModal').classList.add('show'); document.body.style.overflow = 'hidden';
}
function closeEventModal() { document.getElementById('eventModal').classList.remove('show'); document.body.style.overflow = ''; }

function openGroupModal(id) {
    const group = getGroups().find(g => g.id === id); if (!group) return;
    const imgContainer = document.getElementById('modalImageContainer');
    imgContainer.innerHTML = group.image ? `<img src="${escapeHtml(group.image)}" alt="${escapeHtml(group.name)}">` : '';
    document.getElementById('modalTitle').textContent = group.name;
    document.getElementById('modalDescription').innerHTML = formatText(group.description);
    const dayEl = document.getElementById('modalDay');
    if (group.day) { dayEl.innerHTML = `<strong>When:</strong> ${escapeHtml(group.day)}`; dayEl.style.display = 'block'; } else { dayEl.style.display = 'none'; }
    const contactEl = document.getElementById('modalContact');
    if (group.contact) { contactEl.innerHTML = `<strong>Contact:</strong> ${escapeHtml(group.contact)}`; contactEl.style.display = 'block'; } else { contactEl.style.display = 'none'; }
    const modalEmailBtn = document.getElementById('modalEmailButton');
    if (modalEmailBtn) {
        if (group.email) {
            const subjectParam = group.subject ? `?subject=${encodeURIComponent(group.subject)}` : '';
            modalEmailBtn.innerHTML = `<a href="mailto:${escapeHtml(group.email)}${subjectParam}" class="btn-contact-leader" style="width: 100%; box-sizing: border-box; text-align: center;">Contact Group Leader</a>`;
            modalEmailBtn.style.display = 'block';
        } else { modalEmailBtn.style.display = 'none'; }
    }
    document.getElementById('groupModal').classList.add('show'); document.body.style.overflow = 'hidden';
}
function closeGroupModal() { document.getElementById('groupModal').classList.remove('show'); document.body.style.overflow = ''; }

const eventModal = document.getElementById('eventModal');
if (eventModal) { eventModal.addEventListener('click', function(e) { if (e.target === this) closeEventModal(); }); }
const groupModal = document.getElementById('groupModal');
if (groupModal) { groupModal.addEventListener('click', function(e) { if (e.target === this) closeGroupModal(); }); }

function loadCalendarEvents() {
    const c = document.getElementById('calendarEvents');
    if (c) { c.innerHTML = getEvents().map(e => `<div class="calendar-item"><strong>${escapeHtml(e.date)}</strong> - ${escapeHtml(e.title)}<p>${formatText(e.description)}</p></div>`).join(''); }
}

// --- WEB3FORMS CONTACT HANDLER ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const json = JSON.stringify(Object.fromEntries(formData));
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...'; submitBtn.disabled = true;
        fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: json })
        .then(async (r) => { let j = await r.json(); if (r.status == 200) { alert("Thank you! Your message has been sent."); contactForm.reset(); } else { alert("Something went wrong."); } })
        .catch(() => alert("Connection error."))
        .finally(() => { submitBtn.textContent = originalText; submitBtn.disabled = false; });
    });
}

// --- BACK TO TOP BUTTON ---
(function() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    btn.setAttribute('title', 'Back to top');
    document.body.appendChild(btn);
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { btn.classList.add('visible'); } else { btn.classList.remove('visible'); }
    });
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => { 
    loadAnnouncements(); 
    loadHomeEvents(); 
    loadAllEvents(); 
    loadCalendarEvents(); 
    loadHomeNews(); 
    loadAllNews(); 
    loadActivityGroups(); 
});
