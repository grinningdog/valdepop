
const ADMIN_PASSWORD_HASH = '577e0f0bab13e8fa5e6a92f06de410f3a2f826c1a36e00622c73afc5066a4915'; 

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const DEFAULT_EVENTS = [
    { "id": 1, "title": "Wine Tasting Tours4", "date": "July 15, 2026", "description": "Join us for a guided tour of local vineyards with wine tasting and lunch included.", "category": "Trip", "image": "hday3.jpg" },
    { "id": 2, "title": "Beach Day - Calpe", "date": "July 22, 2026", "description": "A relaxing day at the beach with optional lunch at a seaside restaurant.", "category": "Outing", "image": "" },
    { "id": 3, "title": "Historic Valencia Tour", "date": "August 5, 2026", "description": "Full day trip to Valencia including the City of Arts and Sciences.", "category": "Cultural Trip", "image": "" },
    { "id": 4, "title": "Asturias and Cantabria", "date": "September 2027", "description": "We will be staying in Cangas de Onis on the Cantabria/Asturias border. Bed and breakfast. Hotel Casa de Campo. It has a restaurant, but if you want an evening meal out in Cangas, the coach will transport you.\n\nWe are going to break the long journey by stopping for one night on the way there in Tudela at the Hotel Sercotel, then one night on the return journey at the Hotel Tibur in Zaragoza. There will be plenty of comfort breaks when travelling.\n\nPRICE: €860 pp for a couple\n(320 single supplement)\nPrice set for 40 persons to go.\nA €200 euro deposit per person will be required when putting your name down. If you pay by bank transfer, your surname and the letters \"Ast/Cant\" must be used as a reference so we know who sent it and which trip it refers to.\nItinerary\n\nDepart Xalo on 12th September 2027 to Tudela for 1 night Hotel Sercotel (comfort breaks on the way).\n\nThe coach will leave Xalo rastro car park, time to be arranged.\n\nDay 2—13/09—Breakfast, then drive to destination Cangas de Onis, Hotel Casa de Campo, time to unpack and stroll around and find somewhere to have your evening meal. As stated if you don't want to use the hotel restaurant, the coach will take us into Cangas. We are approximately 3 kilometres from the centre of the town.\n\nDay 3—14/09—Breakfast and depart to visit with a local guide:- Santander (capital of Cantabria). Pereda Gardens, Santander Cathedral. Lighthouse to view entire city and Magdalena peninsula. Lunchtime. Afternoon Santillana del Mar and a walking tour of its historic centre. Onwards then to Comillas, passing the Sobrellano Palace to visit Gaudi's Capricho (one of his first houses he designed, entrance inc). Return to Cangas de Onis and hotel.\n\nDay 4—15/09—Breakfast then visit Oviedo (capital of Asturias) with a local guide. Coach will take us on a panoramic tour of the city, passing the Palacio de Congresos, Campo de San Francisco and Campoamor theatre where the Princess of Asturias awards ceremony takes place, making our way to the Market. Lunchtime. Afternoon visit Gijon with a local guide. Return to our hotel.\n\nDay 5—16/09—Visit the famous Basilica of Covadonga along with the holy cave. Lunchtime. Afternoon visit Ribadesella and take a tour of the Lonja, Old Town, Fishing Port and Paseo Indiano. Return to our hotel.\n\nDay 6—17/09—Breakfast and depart to the Picos de Europa. Going through the Hermida gorge to Fuente Dé, where we can go up by cable car to admire the views of the Mirador del Cable. Continue onto the Monastry of Santo Toribio de Liébana, where the largest piece of the cross of Christ is preserved. We then visit Potes (capital of Picos de Europa) touring its historic centre. Lunchtime. Afternoon we visit San Vicente de la Barquera, a very popular fishing village on the Cantabrian coast. There is a castle here as well as a rich heritage. Return to hotel.\n\nDay 7—18/09—Breakfast and depart Cangas de Onis for El Soplao caves (entrance inc). Onward to Zaragoza, Hotel Tibur, (1 night) free time in the city.\n\nDay 8—19/09—Breakfast, depart Zaragoza to Xalo. Comfort breaks en route.\n\nIncluded in the price is all the coach travel, breakfasts, accommodation, an English speaking guide to accompany us and basic travel insurance. Lunches and evening meals are NOT included. Also 2 entrance fees included.\n\nPlease be aware:- whilst every effort is made to accommodate all dietary requirements, it may be beneficial to carry your own snacks. Also regarding mobility—there is walking and climbing steps/stairs on some of the excursions and not sure if all hotels have a lift.\n\nTo Book contact:-\n\nSonia Higginson at GA's or coffee mornings", "category": "Trip", "image": "orig_cantabria.jpg" }
];

const DEFAULT_NEWS = [
    { "id": 1, "title": "Spring Fayre 2026", "date": "August 21st", "excerpt": "Spring Fayre in Jalon 2026 - A success!", "content": "Having postponed due to bad weather earlier in the month, we certainly couldn't have wished for it to be hotter on Sunday 24th May for our Spring fayre and car boot sale.\n\nOver 80 stallholders displayed their wares and there was something on offer for everybody from beautiful homemade crafts, sourdough bread, homemade condiments to vintage wear and car boot bargains.\n\nAs usual our fabulous u3a bakers and friends came up trumps with a fantastic array of cakes and savouries which were a huge success and so much enjoyed.\n\nThe bbq kindly run by Andy Keay and Jeni Buck was a big hit despite the heat, as was the tea and coffee stall run by Sonia and Graham.\n\nNo surprise the bar did a roaring trade in cold drinks and 2 lovely young visitors of ours did cold drink and food runs to the stallholders which was gratefully received. Oh to have that much energy!\n\nPaul and Jude were as fabulous as ever entertaining visitors and stallholders alike and some even enjoyed a dance despite the heat!\n\nTina and Gary did a sterling job on the tombola which almost sold out. Thanks also to Marian who helped to organise it before their trip to the UK.\n\nA huge thank you to everyone who took part and to everyone who came and supported the event. We raised a fabulous €1,695 which will go into Goodwill funds to be shared at the end of the year to local charities.\n\nI delivered all the leftover bbq food and cakes and savouries to Project 4 All that evening and they had enough to supply the entire homeless food run on Monday which is wonderful. They were so grateful and I'm sure the ladies and men on the streets enjoyed the treats. I love how we can help other charities and those who are less fortunate than ourselves.\n\nThank you again for your support.", "image": "spring-fayre.jpg" }
];

const DEFAULT_GROUPS = [
    { "id": 1, "name": "Bridge", "description": "Leader  Wendy Sim\n\nTelephone  711 09 05 16\n\nLocation Cooperativa, Parcent\n\nHow Often  Weekly\n\nThe aim of this group is to provide an opportunity for people to play bridge in a relaxed and friendly atmosphere. It is particularly aimed at:\n\nthose who have recently learned to play and want to practise\nthose who haven't played for a long time and feel that they are \"rusty\", or not up-to-date with the latest bidding systems those who just want to play a friendly game of bridge.\n\nWe would like to have more players, so please do call if you'd like to come or want more information.", "day": "Wednesday 15:00 - 17:00", "contact": "Wendy Sim", "image": "intro.jpg", "email": "", "subject": "" },
    { "id": 2, "name": "Ballroom, Latin & Sequence Dancing", "description": "Ballroom, Latin & Sequence Dancing\n\nLeader\n\t\n\nDuncan Thompson\n\nTelephone\n\t\n\n634 33 46 89\n\nLocation\n\t\n\nBeniarbeig - Salon above the library\n\nDay/Time\n\t\n\nTuesday 9.30 - 10:00 Ballroom\n\nTuesday 10:00 - 11:30 Sequence\n\nHow Often\n\t\n\nWeekly\n\nBallroom Dancing is not only fun but insanely good for you.\n\nFeel free to dress up if you wish!\n\nNo matter what your level of fitness, ballroom dancing is a great way to exercise. You also meet new friends, improve your balance and coordination and generally enjoy a feeling of achievement. What a great activity!\n\nThis activity is totally without charge either for the accommodation or the teaching.Also for those who wish to practise more come on a Friday evening to chance to dance. Again totally without charge.\n\nTuition will be given at both sessions.\n\nWe welcome all levels and use our more experienced members to tutor us", "day": "", "contact": "Duncan Thompson", "image": "intro2.jpg", "email": "", "subject": "" },
    { "id": 3, "name": "Allotments", "description": "Brigid Redmond - Deputy Group Leader & Communication\n\t\nWe have a large 6m x18m allotment in Jalon. It is ready to go, having been ploughed. There is a shed and water on site.\n\nSpring is in the air and we are raring to go. Please contact Brigid if you would like to find out more!", "day": "Xalo", "contact": "Sue Harvey", "image": "allotment.jpg", "email": "", "subject": "" },
    { "id": 4, "name": "Canasta", "description": "The Canasta group is now up and running. New members would be very welcome to join us. It is an ideal way to spend an afternoon in good company, even with a little time before and after the rounds for a short chat. It will not be an expensive afternoon, the restaurant is happy for us to play there, the only obligation is that we buy a drink.", "day": "Tuesday 14.00 - 16:00", "contact": "Mary Wood", "image": "canasta.jpg", "email": "", "subject": "" },
    { "id": 5, "name": "Chairfit", "description": "Chairfit Workout\n\nGentle and cardio movements with uplifting music to help you stay independent, confident and full of life. Improves body strength, mobility and balance to enhance physical and mental wellbeing.\n\nLeader:  Jacintha Hoogewerf\n\nTelephone  634320606\n\nLocation:\nCentro Social, Xalo\n\nHow Often:  Weekly", "day": "Wednesday 11.10-12.00", "contact": "Jacintha Hoogewerf", "image": "chairfit-intro.jpg", "email": "", "subject": "" }
];

const DEFAULT_ANNOUNCEMENTS = [
    { "id": 1, "header": "Come along and join in our next", "title": "GENERAL ASSEMBLY", "date": "THURSDAY 3RD SEPTEMBER 2026", "location": "- POLIVALENT, MURLA -", "link": "calendar.html" },
    { "id": 2, "header": "Members", "title": "COFFEE MORNING", "date": "THURSDAY 16TH JULY 2026", "location": "- RESTOBAR QUIXOTE, ORBA -", "link": "calendar.html" },
    { "id": 3, "header": "Friendship & Support", "title": "COFFEE MORNING", "date": "WEDNESDAY 1ST JULY 2026", "location": "- MY MERCAT, XALO -", "link": "calendar.html" }
];

async function checkAccess() {
    if (sessionStorage.getItem('adminAccess') === 'true') { showAdminPanel(); return; }
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    if (key) {
        const hashedKey = await hashPassword(key);
        if (hashedKey === ADMIN_PASSWORD_HASH) { sessionStorage.setItem('adminAccess', 'true'); showAdminPanel(); return; }
    }
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
}

function showAdminPanel() { document.getElementById('loginScreen').style.display = 'none'; document.getElementById('adminPanel').style.display = 'block'; initAdmin(); }

document.getElementById('loginForm').addEventListener('submit', async function(e) { 
    e.preventDefault(); 
    const hashedInput = await hashPassword(document.getElementById('passwordInput').value);
    if (hashedInput === ADMIN_PASSWORD_HASH) { sessionStorage.setItem('adminAccess', 'true'); showAdminPanel(); } 
    else { document.getElementById('loginError').style.display = 'block'; document.getElementById('passwordInput').value = ''; } 
});

function logout() { sessionStorage.removeItem('adminAccess'); window.location.href = 'admin.html'; }
function initAdmin() { setupTabs(); renderAllLists(); }
function setupTabs() { document.querySelectorAll('.tab-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active')); btn.classList.add('active'); document.getElementById('tab-' + btn.dataset.tab).classList.add('active'); }); }); }

function getEvents() { return JSON.parse(localStorage.getItem('u3a_events') || JSON.stringify(DEFAULT_EVENTS)); }
function getNews() { return JSON.parse(localStorage.getItem('u3a_news') || JSON.stringify(DEFAULT_NEWS)); }
function getGroups() { return JSON.parse(localStorage.getItem('u3a_groups') || JSON.stringify(DEFAULT_GROUPS)); }
function getAnnouncements() { return JSON.parse(localStorage.getItem('u3a_announcements') || JSON.stringify(DEFAULT_ANNOUNCEMENTS)); }

function saveEvents(d) { localStorage.setItem('u3a_events', JSON.stringify(d)); }
function saveNews(d) { localStorage.setItem('u3a_news', JSON.stringify(d)); }
function saveGroups(d) { localStorage.setItem('u3a_groups', JSON.stringify(d)); }
function saveAnnouncements(d) { localStorage.setItem('u3a_announcements', JSON.stringify(d)); }

function renderAllLists() { renderEventsList(); renderNewsList(); renderGroupsList(); renderAnnouncementsList(); }
function renderEventsList() {
    const events = getEvents(); const c = document.getElementById('eventsList');
    c.innerHTML = events.length ? events.map(e => `<div class="admin-item">${e.image ? `<img src="${escapeHtml(e.image)}" class="admin-item-img" alt="">` : ''}<div class="admin-item-info"><h3>${escapeHtml(e.title)}</h3><div class="meta">${escapeHtml(e.date)} • ${escapeHtml(e.category)}</div><p>${escapeHtml(e.description)}</p></div><div class="admin-item-actions"><button class="btn btn-edit" onclick="editItem('event', ${e.id})">Edit</button><button class="btn btn-delete" onclick="deleteItem('event', ${e.id})">Delete</button></div></div>`).join('') : '<p class="empty-message">No events yet.</p>';
}
function renderNewsList() {
    const news = getNews(); const c = document.getElementById('newsList');
    c.innerHTML = news.length ? news.map(n => `<div class="admin-item">${n.image ? `<img src="${escapeHtml(n.image)}" class="admin-item-img" alt="">` : ''}<div class="admin-item-info"><h3>${escapeHtml(n.title)}</h3><div class="meta">${escapeHtml(n.date)}</div><p><strong>Excerpt:</strong> ${escapeHtml(n.excerpt)}</p></div><div class="admin-item-actions"><button class="btn btn-edit" onclick="editItem('news', ${n.id})">Edit</button><button class="btn btn-delete" onclick="deleteItem('news', ${n.id})">Delete</button></div></div>`).join('') : '<p class="empty-message">No news items yet.</p>';
}
function renderGroupsList() {
    const groups = getGroups(); const c = document.getElementById('groupsList');
    c.innerHTML = groups.length ? groups.map(g => `<div class="admin-item">${g.image ? `<img src="${escapeHtml(g.image)}" class="admin-item-img" alt="">` : ''}<div class="admin-item-info"><h3>${escapeHtml(g.name)}</h3><div class="meta">${escapeHtml(g.day || 'TBC')} • Contact: ${escapeHtml(g.contact || 'TBC')}${g.email ? ' • Email: ' + escapeHtml(g.email) : ''}</div><p>${escapeHtml(g.description)}</p></div><div class="admin-item-actions"><button class="btn btn-edit" onclick="editItem('group', ${g.id})">Edit</button><button class="btn btn-delete" onclick="deleteItem('group', ${g.id})">Delete</button></div></div>`).join('') : '<p class="empty-message">No groups yet.</p>';
}
function renderAnnouncementsList() {
    const anns = getAnnouncements(); const c = document.getElementById('announcementsList');
    c.innerHTML = anns.length ? anns.map(a => `<div class="admin-item"><div class="admin-item-info"><h3>${escapeHtml(a.title)}</h3><div class="meta">${escapeHtml(a.date)} • ${escapeHtml(a.location)}</div><p><small>${escapeHtml(a.header)}</small></p></div><div class="admin-item-actions"><button class="btn btn-edit" onclick="editItem('announcement', ${a.id})">Edit</button><button class="btn btn-delete" onclick="deleteItem('announcement', ${a.id})">Delete</button></div></div>`).join('') : '<p class="empty-message">No announcements yet.</p>';
}

function openModal(type, id = null) {
    document.getElementById('itemForm').reset(); document.querySelectorAll('.admin-form .form-group').forEach(f => f.style.display = 'none'); document.querySelectorAll(`.field-${type}`).forEach(f => f.style.display = 'block');
    document.getElementById('modalTitle').textContent = (id ? 'Edit ' : 'Add New ') + type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById('itemType').value = type; document.getElementById('itemId').value = id || ''; document.getElementById('itemModal').classList.add('show');
}
function closeModal() { document.getElementById('itemModal').classList.remove('show'); }

function editItem(type, id) {
    let item = (type === 'event' ? getEvents() : type === 'news' ? getNews() : type === 'group' ? getGroups() : getAnnouncements()).find(x => x.id === id); 
    if (!item) return;
    openModal(type, id); 
    document.getElementById('itemId').value = id;

    if (type === 'event') { 
        document.getElementById('eventTitle').value = item.title; document.getElementById('eventDate').value = item.date; 
        document.getElementById('eventDesc').value = item.description; document.getElementById('eventCategory').value = item.category; 
        document.getElementById('eventImage').value = item.image || ''; 
    } else if (type === 'news') { 
        document.getElementById('newsTitle').value = item.title; document.getElementById('newsDate').value = item.date; 
        document.getElementById('newsExcerpt').value = item.excerpt; document.getElementById('newsContent').value = item.content; 
        document.getElementById('newsImage').value = item.image || ''; 
    } else if (type === 'group') { 
        document.getElementById('groupName').value = item.name; document.getElementById('groupDesc').value = item.description; 
        document.getElementById('groupDay').value = item.day || ''; document.getElementById('groupContact').value = item.contact || ''; 
        document.getElementById('groupImage').value = item.image || ''; 
        document.getElementById('groupEmail').value = item.email || ''; document.getElementById('groupSubject').value = item.subject || '';
    } else if (type === 'announcement') {
        document.getElementById('annHeader').value = item.header || '';
        document.getElementById('annTitle').value = item.title;
        document.getElementById('annDate').value = item.date;
        document.getElementById('annLocation').value = item.location;
        document.getElementById('annLink').value = item.link || '';
    }
}

function deleteItem(type, id) {
    if (!confirm('Are you sure?')) return;
    if (type === 'event') saveEvents(getEvents().filter(e => e.id !== id)); 
    else if (type === 'news') saveNews(getNews().filter(n => n.id !== id)); 
    else if (type === 'group') saveGroups(getGroups().filter(g => g.id !== id));
    else if (type === 'announcement') saveAnnouncements(getAnnouncements().filter(a => a.id !== id));
    renderAllLists(); showToast('Deleted!');
}

document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    try {
        const type = document.getElementById('itemType').value; const id = document.getElementById('itemId').value ? parseInt(document.getElementById('itemId').value) : null;
        if (type === 'event') { 
            const t=document.getElementById('eventTitle').value.trim(), d=document.getElementById('eventDate').value.trim(), desc=document.getElementById('eventDesc').value.trim(); 
            if(!t||!d||!desc){alert('Fill in Title, Date, Description.'); return;} 
            const arr=getEvents(); const obj={id:id||Math.max(...arr.map(x=>x.id),0)+1,title:t,date:d,description:desc,category:document.getElementById('eventCategory').value,image:document.getElementById('eventImage').value.trim()}; 
            if(id)arr[arr.findIndex(x=>x.id===id)]=obj; else arr.push(obj); saveEvents(arr); 
        } else if (type === 'news') { 
            const t=document.getElementById('newsTitle').value.trim(), d=document.getElementById('newsDate').value.trim(), ex=document.getElementById('newsExcerpt').value.trim(), c=document.getElementById('newsContent').value.trim(); 
            if(!t||!d||!ex||!c){alert('Fill in all news fields.'); return;} 
            const arr=getNews(); const obj={id:id||Math.max(...arr.map(x=>x.id),0)+1,title:t,date:d,excerpt:ex,content:c,image:document.getElementById('newsImage').value.trim()}; 
            if(id)arr[arr.findIndex(x=>x.id===id)]=obj; else arr.push(obj); saveNews(arr); 
        } else if (type === 'group') { 
            const n=document.getElementById('groupName').value.trim(), desc=document.getElementById('groupDesc').value.trim(); 
            if(!n||!desc){alert('Fill in Name, Description.'); return;} 
            const arr=getGroups(); const obj={id:id||Math.max(...arr.map(x=>x.id),0)+1, name:n, description:desc, day:document.getElementById('groupDay').value.trim(), contact:document.getElementById('groupContact').value.trim(), image:document.getElementById('groupImage').value.trim(), email: document.getElementById('groupEmail').value.trim(), subject: document.getElementById('groupSubject').value.trim()}; 
            if(id)arr[arr.findIndex(x=>x.id===id)]=obj; else arr.push(obj); saveGroups(arr); 
        } else if (type === 'announcement') {
            const title = document.getElementById('annTitle').value.trim();
            const date = document.getElementById('annDate').value.trim();
            const location = document.getElementById('annLocation').value.trim();
            if (!title || !date || !location) { alert('Please fill in Title, Date, and Location.'); return; }
            const arr = getAnnouncements();
            const obj = {
                id: id || Math.max(...arr.map(x => x.id), 0) + 1,
                header: document.getElementById('annHeader').value.trim(),
                title: title, date: date, location: location,
                link: document.getElementById('annLink').value.trim()
            };
            if (id) arr[arr.findIndex(x => x.id === id)] = obj; else arr.push(obj);
            saveAnnouncements(arr);
        }
        closeModal(); renderAllLists(); showToast('Saved locally! Click Export when done.');
    } catch (err) { alert('Error: ' + err.message); }
});

function exportData() {
    const eventsStr = JSON.stringify(getEvents(), null, 4);
    const newsStr = JSON.stringify(getNews(), null, 4);
    const groupsStr = JSON.stringify(getGroups(), null, 4);
    const annsStr = JSON.stringify(getAnnouncements(), null, 4);
    const codeToCopy = `const DEFAULT_EVENTS = ${eventsStr};\n\nconst DEFAULT_NEWS = ${newsStr};\n\nconst DEFAULT_GROUPS = ${groupsStr};\n\nconst DEFAULT_ANNOUNCEMENTS = ${annsStr};`;
    navigator.clipboard.writeText(codeToCopy).then(() => { showToast('Code copied to clipboard! Go to GitHub and paste it.'); }).catch(err => { alert("Couldn't copy automatically. Please copy the text below:\n\n" + codeToCopy); });
}

function importData(event) { const f=event.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=(e)=>{ try{ const d=JSON.parse(e.target.result); if(d.events)saveEvents(d.events); if(d.news)saveNews(d.news); if(d.groups)saveGroups(d.groups); if(d.announcements)saveAnnouncements(d.announcements); renderAllLists(); showToast('Imported!'); }catch(err){alert('Error reading file.');} }; r.readAsText(f); }
function showToast(msg) { const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000); }
function escapeHtml(t) { const d=document.createElement('div'); d.textContent=t||''; return d.innerHTML; }
document.getElementById('itemModal').addEventListener('click', function(e) { if(e.target===this)closeModal(); });
checkAccess();
