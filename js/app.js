import allProjects from './projects/index.js';

(function () {
    const catalog = [
        { name: 'Data Engineering Specialist', metricA: 71, metricB: 2, category: 'Data Analytics' },
        { name: 'Professional Big Data Engineer', metricA: 31, metricB: 1, category: 'Data Analytics' },
        { name: 'Machine Learning Developer', metricA: 171, metricB: 7, category: 'Artificial Intelligence' },
        { name: 'DevOps Specialist', metricA: 64, metricB: 2, category: 'Infrastructure & Security' },
        { name: 'Professional Mobile App Developer', metricA: 61, metricB: 2, category: 'Software Development' },
        { name: 'Professional React Web Developer', metricA: 138, metricB: 6, category: 'Software Development' },
        { name: 'Beginner Web Developer', metricA: 105, metricB: 4, category: 'Software Development' },
        { name: 'Software Testing Specialist', metricA: 78, metricB: 3, category: 'Software Development' },
        { name: 'Junior Data Analyst', metricA: 182, metricB: 8, category: 'Data Analytics' },
        { name: 'Professional Data Analyst', metricA: 330, metricB: 11, category: 'Data Analytics' },
        { name: 'Cisco Network Administration Professional', metricA: 35, metricB: 2, category: 'Infrastructure & Security' },
        { name: 'Network Administration Specialist', metricA: 140, metricB: 5, category: 'Infrastructure & Security' },
        { name: 'Cisco Cybersecurity Professional', metricA: 39, metricB: 2, category: 'Infrastructure & Security' },
        { name: 'Vulnerability Analysis & Penetration Testing Professional', metricA: 51, metricB: 2, category: 'Infrastructure & Security' },
        { name: 'Digital Marketing Specialist', metricA: 142, metricB: 6, category: 'Digital Art' },
        { name: 'Digital Media Production Specialist', metricA: 56, metricB: 2, category: 'Digital Art' },
        { name: 'UI/UX Professional Designer', metricA: 161, metricB: 5, category: 'Digital Art' },
        { name: 'Graphic Design Specialist', metricA: 80, metricB: 3, category: 'Digital Art' },
        { name: 'Applied Technologies Agriculture Tech Specialist', metricA: 73, metricB: 2, category: 'Applied Technologies' },
    ];

    // Projects per profile - imported from external files
    const projectsByProfile = allProjects;

    function normalize(str) { return String(str || '').toLowerCase(); }

    function getCategoryFromPath() {
        const file = (location.pathname.split('/').pop() || '').toLowerCase();
        if (file.includes('ai')) return 'Artificial Intelligence';
        if (file.includes('software')) return 'Software Development';
        if (file.includes('data-analytics')) return 'Data Analytics';
        if (file.includes('infra-security')) return 'Infrastructure & Security';
        if (file.includes('digital-art')) return 'Digital Art';
        if (file.includes('applied-tech')) return 'Applied Technologies';
        return null;
    }

    function profileToHTML(profile) {
        const eligible = profile.eligible;
        return (
            '<article class="card" role="article">' +
            '<h3 class="title">' + profile.name + '</h3>' +
            '<div class="meta">' +
            '<span class="badge"><span class="dot"></span><span class="kpi">' + profile.metricA + '</span><span>Metric A</span></span>' +
            '<span class="badge"><span class="kpi">' + profile.metricB + '</span><span>Metric B</span></span>' +
            (eligible === true ? '<span class="badge flag-yes">YES</span>' : (eligible === false ? '<span class="badge flag-no">NO</span>' : '')) +
            '<span class="badge">' + profile.category + '</span>' +
            '</div>' +
            '<div class="actions">' +
            '<a href="#" class="btn">Details</a>' +
            '<a href="#" class="btn primary">Enroll</a>' +
            '</div>' +
            '</article>'
        );
    }

    function filterProfiles(options) {
        const q = normalize(options.query);
        const cat = options.category || null;
        return catalog.filter(function (p) {
            var ok = true;
            if (cat) ok = ok && p.category === cat;
            if (q) ok = ok && (normalize(p.name).includes(q) || normalize(p.category).includes(q));
            return ok;
        });
    }

    window.renderProfiles = function renderProfiles(opts) {
        const options = opts || {};
        const mount = document.getElementById(options.mountId || 'profilesGrid');
        if (!mount) return;
        const activeCategory = options.category || getCategoryFromPath();
        const list = filterProfiles({ query: options.query || '', category: activeCategory });
        mount.innerHTML = list.map(profileToHTML).join('');
    };

    function getQueryParam(name) {
        const params = new URLSearchParams(location.search);
        return params.get(name);
    }

    window.renderProfileDetail = function renderProfileDetail(opts) {
        const options = opts || {};
        const mountId = options.mountId || 'projectsList';
        const mount = document.getElementById(mountId);
        if (!mount) return;
        const profileName = options.profile || getQueryParam('p') || getQueryParam('name');
        if (!profileName) { mount.innerHTML = '<p class="muted">No profile selected.</p>'; return; }
        const projects = projectsByProfile[profileName] || [];
        if (typeof document !== 'undefined') {
            var titleEl = document.getElementById('profileName');
            if (titleEl) titleEl.textContent = profileName;
        }
        if (!projects.length) {
            mount.innerHTML = '<p class="muted">No projects available yet for this profile.</p>';
            return;
        }
        mount.innerHTML = projects.map(function (proj) {
            return (
                '<article class="card" role="article">' +
                '<h3 class="title">' + proj.title + '</h3>' +
                '<div class="meta">' + proj.desc + '</div>' +
                '<div class="actions">' + (proj.tags || []).map(function (t) { return '<span class="badge">' + t + '</span>'; }).join('') + '</div>' +
                '</article>'
            );
        }).join('');
    };

    // Track colors mapping
    const trackColors = {
        'Artificial Intelligence': '#5b9dff',
        'Software Development': '#22c55e',
        'Data Analytics': '#f59e0b',
        'Infrastructure & Security': '#ef4444',
        'Digital Art': '#a855f7',
        'Applied Technologies': '#06b6d4'
    };

    // Apply track color to navbar
    function applyTrackColor(category) {
        const color = trackColors[category];
        if (!color) return;

        // Color the active sidebar link
        const activeSideLink = document.querySelector('.side-link.active');
        if (activeSideLink) {
            activeSideLink.style.backgroundColor = color;
            activeSideLink.style.color = '#ffffff';
        }

        // Color the profile navbar links
        const profileNavbar = document.querySelector('.profile-navbar');
        if (profileNavbar) {
            const profileLinks = profileNavbar.querySelectorAll('a');
            profileLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = color;
                });
                link.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('active')) {
                        this.style.backgroundColor = '';
                    }
                });
                if (link.classList.contains('active')) {
                    link.style.backgroundColor = color;
                }
            });
        }

        // Color the top nav links
        const topNav = document.querySelector('.top-nav');
        if (topNav) {
            const topLinks = topNav.querySelectorAll('.top-link');
            topLinks.forEach(link => {
                if (link.classList.contains('active')) {
                    link.style.borderBottomColor = color;
                    link.style.color = color;
                }
                link.addEventListener('mouseenter', function() {
                    this.style.color = color;
                });
                link.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('active')) {
                        this.style.color = '';
                    }
                });
            });
        }
    }

    // If a page contains #categoryTitle, set it from URL mapping
    window.addEventListener('DOMContentLoaded', function () {
        var el = document.getElementById('categoryTitle');
        if (el) {
            var cat = getCategoryFromPath();
            if (cat) {
                el.textContent = cat;
                applyTrackColor(cat);
            }
        }
    });
})();


