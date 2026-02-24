// ১. জব ডাটা (বিখ্যাত কিছু আইটি কোম্পানির নাম সহ)
let jobs = [
    { id: 1, companyName: "Vivasoft", position: "Frontend Developer", location: "Remote", type: "Full-time", salary: "40k - 50k", description: "Work on cutting-edge UI for global search products.", status: "All" },
    { id: 2, companyName: "Meta", position: "Product Designer", location: "Menlo Park, CA", type: "Full-time", salary: "130k - 160k", description: "Design immersive experiences for the future of social tech.", status: "All" },
    { id: 3, companyName: "Netflix", position: "UI Engineer", location: "Los Gatos", type: "Contract", salary: "90/hr", description: "Optimize streaming interfaces for smart TV applications.", status: "All" },
    { id: 4, companyName: "Leadsoft", position: "Backend Developer", location: "Dhaka", type: "Full-time", salary: "60k - 70k", description: "Scale cloud infrastructure for high-traffic retail events.", status: "All" },
    { id: 5, companyName: "Tesla", position: "Software Architect", location: "Austin, TX", type: "Full-time", salary: "150k - 180k", description: "Lead software architecture for autonomous driving systems.", status: "All" },
    { id: 6, companyName: "BJIT", position: "Creative Lead", location: "Remote", type: "Part-time", salary: "70k - 85k", description: "Focus on user-centric tools for next-gen digital design.", status: "All" },
    { id: 7, companyName: "Shopify", position: "Fullstack Dev", location: "Toronto, CA", type: "Full-time", salary: "100k - 130k", description: "Support merchants by building robust e-commerce features.", status: "All" },
    { id: 8, companyName: "BRAC IT", position: "Data Scientist", location: "Dhaka", type: "Full-time", salary: "65k - 70k", description: "Analyze listener habits to improve recommendation engines.", status: "All" }
];

let activeFilter = 'All';

function renderUI() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    
    const filtered = activeFilter === 'All' ? jobs : jobs.filter(j => j.status === activeFilter);
    
    document.getElementById('total').innerText = jobs.length;
    document.getElementById('interview').innerText = jobs.filter(j => j.status === 'Interview').length;
    document.getElementById('rejected').innerText = jobs.filter(j => j.status === 'Rejected').length;
    document.getElementById('current-tab-count').innerText = filtered.length;

    if (filtered.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        container.classList.remove('hidden');
        emptyState.classList.add('hidden');
        container.innerHTML = filtered.map(job => createCardHTML(job)).join('');
    }
}

function createCardHTML(job) {
    let statusText = "NOT APPLIED";
    let statusClass = "bg-blue-50 text-blue-900"; 

    if (job.status === "Interview") {
        statusText = "INTERVIEWING";
        statusClass = "bg-emerald-600 text-white shadow-sm"; 
        statusText = "REJECTED";
        statusClass = "bg-rose-600 text-white shadow-sm"; 
    }

    return `
        <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all relative">
            <button onclick="deleteCard(${job.id})" class="absolute top-6 right-6 text-gray-300 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <div class="mb-4">
                <h3 class="font-bold text-xl text-[#001e3c] leading-tight">${job.companyName}</h3>
                <p class="text-gray-400 font-medium text-sm mt-1">${job.position}</p>
            </div>
            
            <div class="flex gap-2 mb-4 text-[13px] text-gray-400 font-medium">
                <span>${job.location}</span> • <span>${job.type}</span> • <span>$${job.salary}</span>
            </div>

            <div class="mb-4">
                <span class="${statusClass} text-[10px] px-3 py-1.5 rounded-md font-bold uppercase tracking-wider transition-all duration-300">
                    ${statusText}
                </span>
            </div>

            <p class="text-gray-600 text-[14px] mb-6 max-w-2xl leading-relaxed">${job.description}</p>
            
            <div class="flex gap-3">
                <button onclick="setStatus(${job.id}, 'Interview')" 
                    class="px-5 py-2 rounded-md font-bold text-[11px] uppercase transition-all border 
                    ${job.status === 'Interview' 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                        : 'border-emerald-500 text-emerald-500 hover:bg-emerald-50'}">
                    Interview
                </button>

                <button onclick="setStatus(${job.id}, 'Rejected')" 
                    class="px-5 py-2 rounded-md font-bold text-[11px] uppercase transition-all border 
                    ${job.status === 'Rejected' 
                        ? 'bg-rose-600 text-white border-rose-600 shadow-md' 
                        : 'border-rose-400 text-rose-400 hover:bg-rose-50'}">
                    Rejected
                </button>
            </div>
        </div>
    `;
}

function setStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        job.status = (job.status === status) ? 'All' : status;
    }
    renderUI();
}

function deleteCard(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderUI();
}

function changeTab(tabName) {
    activeFilter = tabName;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'bg-orange-500', 'bg-rose-500', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-600'); 
    });

    const activeBtn = document.getElementById(`tab-${tabName.toLowerCase()}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-600');
        activeBtn.classList.add('text-white', 'shadow-md');
        if (tabName === 'All') activeBtn.classList.add('bg-blue-600');
        else if (tabName === 'Interview') activeBtn.classList.add('bg-orange-500');
        else if (tabName === 'Rejected') activeBtn.classList.add('bg-rose-500');
    }
    renderUI();
}

renderUI();