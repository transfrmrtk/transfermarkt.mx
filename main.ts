// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    const tableRows = document.querySelectorAll('.table-row');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            button.classList.add('active');

            // Here you could implement different content for each tab
            const tabName = button.textContent?.trim();
            console.log(`Switched to tab: ${tabName}`);
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();

            tableRows.forEach(row => {
                const teamName = row.querySelector('.team-name')?.textContent?.toLowerCase() || '';
                if (teamName.includes(searchTerm) || searchTerm === '') {
                    (row as HTMLElement).style.display = '';
                } else {
                    (row as HTMLElement).style.display = 'none';
                }
            });
        });
    }

    // Filter select functionality
    const filterSelect = document.querySelector('.filter-select') as HTMLSelectElement;
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const filterValue = (e.target as HTMLSelectElement).value;
            console.log(`Filter changed to: ${filterValue}`);
            // Here you could implement filtering logic
        });
    }

    // Table row hover effects for better UX
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.classList.add('hovered');
        });

        row.addEventListener('mouseleave', () => {
            row.classList.remove('hovered');
        });
    });

    // Simulate real-time updates (optional)
    setInterval(() => {
        updateMatchTimes();
    }, 60000); // Update every minute

    function updateMatchTimes() {
        const matchDates = document.querySelectorAll('.match-date');

        matchDates.forEach(dateElement => {
            // Add logic to update relative times if needed
            console.log('Updating match times:', dateElement.textContent);
        });
    }

    // Add click handlers for team names to simulate navigation
    const teamNames = document.querySelectorAll('.team-name');
    teamNames.forEach(teamName => {
        teamName.addEventListener('click', (e) => {
            e.preventDefault();
            const name = teamName.textContent;
            console.log(`Navigate to team: ${name}`);
            // Here you could implement navigation to team page
        });

        // Add cursor pointer style
        (teamName as HTMLElement).style.cursor = 'pointer';
        (teamName as HTMLElement).style.textDecoration = 'underline';
        (teamName as HTMLElement).style.textDecorationColor = 'transparent';

        teamName.addEventListener('mouseenter', () => {
            (teamName as HTMLElement).style.textDecorationColor = '#2563eb';
        });

        teamName.addEventListener('mouseleave', () => {
            (teamName as HTMLElement).style.textDecorationColor = 'transparent';
        });
    });

    // Add responsive menu toggle for mobile (if needed)
    function createMobileMenuToggle() {
        const header = document.querySelector('.header-container');
        if (window.innerWidth <= 768 && header) {
            let mobileToggle = document.querySelector('.mobile-toggle') as HTMLButtonElement;

            if (!mobileToggle) {
                mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-toggle';
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    display: block;
                `;

                header.appendChild(mobileToggle);

                mobileToggle.addEventListener('click', () => {
                    const navMenu = document.querySelector('.nav-menu') as HTMLElement;
                    if (navMenu) {
                        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                        navMenu.style.position = 'absolute';
                        navMenu.style.top = '100%';
                        navMenu.style.left = '0';
                        navMenu.style.right = '0';
                        navMenu.style.backgroundColor = '#1a365d';
                        navMenu.style.flexDirection = 'column';
                        navMenu.style.padding = '20px';
                        navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }
                });
            }
        }
    }

    // Initialize mobile menu
    createMobileMenuToggle();

    // Re-check on window resize
    window.addEventListener('resize', createMobileMenuToggle);

    console.log('Liga de Expansión MX page loaded successfully!');
});
