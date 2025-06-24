// Theme Switcher JavaScript
document.addEventListener('DOMContentLoaded', function () {
	// Get theme elements
	const themeLink = document.getElementById('theme-link');
	const themeButtons = document.querySelectorAll('.theme-btn');
	const designLinks = document.querySelectorAll('.design-link');

	// Theme configuration
	const themes = {
		modern: {
			css: 'theme-modern.css',
			name: 'Modern Minimalist',
			designer: 'by Clean Design Co.',
		},
		vintage: {
			css: 'theme-vintage.css',
			name: 'Vintage Classic',
			designer: 'by Retro Studios',
		},
	};

	// Get current theme from localStorage or default to modern
	let currentTheme = localStorage.getItem('selectedTheme') || 'modern';

	// Initialize theme on page load
	function initializeTheme() {
		setTheme(currentTheme);
		updateActiveStates();
	}

	// Set theme function
	function setTheme(themeName) {
		if (themes[themeName]) {
			// Add transition class to body for smooth theme switching
			document.body.classList.add('theme-transitioning');

			// Update the CSS link
			themeLink.href = themes[themeName].css;

			// Update current theme
			currentTheme = themeName;

			// Save to localStorage
			localStorage.setItem('selectedTheme', themeName);

			// Update active states
			updateActiveStates();

			// Add a brief delay for the transition effect
			setTimeout(() => {
				document.body.classList.remove('theme-transitioning');
			}, 300);

			// Trigger custom event for theme change
			document.dispatchEvent(
				new CustomEvent('themeChanged', {
					detail: { theme: themeName, themeData: themes[themeName] },
				}),
			);
		}
	}

	// Update active states for buttons and design links
	function updateActiveStates() {
		// Update theme buttons
		themeButtons.forEach(button => {
			const buttonTheme = button.getAttribute('data-theme');
			if (buttonTheme === currentTheme) {
				button.classList.add('active');
			} else {
				button.classList.remove('active');
			}
		});

		// Update design links in sidebar
		designLinks.forEach((link, index) => {
			const linkTheme = index === 0 ? 'modern' : 'vintage';
			if (linkTheme === currentTheme) {
				link.classList.add('active');
				// Update the design name and designer
				const designName = link.querySelector('.design-name');
				const designerName = link.querySelector('.designer-name');
				if (designName && designerName) {
					designName.textContent = themes[currentTheme].name;
					designerName.textContent = themes[currentTheme].designer;
				}
			} else {
				link.classList.remove('active');
			}
		});
	}

	// Add click event listeners to theme buttons
	themeButtons.forEach(button => {
		button.addEventListener('click', function (e) {
			e.preventDefault();
			const selectedTheme = this.getAttribute('data-theme');
			if (selectedTheme && selectedTheme !== currentTheme) {
				setTheme(selectedTheme);

				// Add click animation
				this.style.transform = 'scale(0.95)';
				setTimeout(() => {
					this.style.transform = '';
				}, 150);
			}
		});

		// Add hover effect for better UX
		button.addEventListener('mouseenter', function () {
			if (!this.classList.contains('active')) {
				this.style.transform = 'translateY(-2px)';
			}
		});

		button.addEventListener('mouseleave', function () {
			if (!this.classList.contains('active')) {
				this.style.transform = '';
			}
		});
	});

	// Add click event listeners to design links in sidebar
	designLinks.forEach((link, index) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const selectedTheme = index === 0 ? 'modern' : 'vintage';
			if (selectedTheme !== currentTheme) {
				setTheme(selectedTheme);
			}
		});
	});

	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	});

	// Add intersection observer for fade-in animations
	function setupScrollAnimations() {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, observerOptions);

		// Observe sections for animations
		document.querySelectorAll('section').forEach(section => {
			section.style.opacity = '0';
			section.style.transform = 'translateY(30px)';
			section.style.transition =
				'opacity 0.6s ease-out, transform 0.6s ease-out';
			observer.observe(section);
		});

		// Observe feature cards
		document.querySelectorAll('.feature-card').forEach((card, index) => {
			card.style.opacity = '0';
			card.style.transform = 'translateY(30px)';
			card.style.transition = `opacity 0.6s ease-out ${
				index * 0.1
			}s, transform 0.6s ease-out ${index * 0.1}s`;
			observer.observe(card);
		});
	}

	// Add keyboard navigation support
	document.addEventListener('keydown', function (e) {
		// Allow theme switching with keyboard shortcuts
		if (e.altKey) {
			switch (e.key) {
				case '1':
					e.preventDefault();
					setTheme('modern');
					break;
				case '2':
					e.preventDefault();
					setTheme('vintage');
					break;
			}
		}
	});

	// Add theme transition CSS dynamically
	function addThemeTransitionStyles() {
		const style = document.createElement('style');
		style.textContent = `
            .theme-transitioning * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
            }
            
            /* Prevent FOUC (Flash of Unstyled Content) */
            .theme-loading {
                opacity: 0;
            }
            
            .theme-loaded {
                opacity: 1;
                transition: opacity 0.3s ease;
            }
        `;
		document.head.appendChild(style);
	}

	// Performance optimization: Preload theme stylesheets
	function preloadThemes() {
		Object.keys(themes).forEach(themeName => {
			if (themeName !== currentTheme) {
				const link = document.createElement('link');
				link.rel = 'preload';
				link.as = 'style';
				link.href = themes[themeName].css;
				document.head.appendChild(link);
			}
		});
	}

	// Add accessibility announcements for theme changes
	function announceThemeChange(themeName) {
		const announcement = document.createElement('div');
		announcement.setAttribute('aria-live', 'polite');
		announcement.setAttribute('aria-atomic', 'true');
		announcement.className = 'sr-only';
		announcement.textContent = `Theme changed to ${themes[themeName].name}`;
		document.body.appendChild(announcement);

		// Remove announcement after a brief delay
		setTimeout(() => {
			document.body.removeChild(announcement);
		}, 1000);
	}

	// Listen for theme change events
	document.addEventListener('themeChanged', function (e) {
		announceThemeChange(e.detail.theme);
		console.log(`Theme switched to: ${e.detail.themeData.name}`);
	});

	// Add print styles support
	function handlePrintMode() {
		window.addEventListener('beforeprint', function () {
			document.body.classList.add('print-mode');
		});

		window.addEventListener('afterprint', function () {
			document.body.classList.remove('print-mode');
		});
	}

	// Initialize everything
	function init() {
		addThemeTransitionStyles();
		document.body.classList.add('theme-loading');

		// Initialize theme
		initializeTheme();

		// Setup scroll animations
		setupScrollAnimations();

		// Preload other themes
		preloadThemes();

		// Setup print handling
		handlePrintMode();

		// Mark as loaded
		setTimeout(() => {
			document.body.classList.remove('theme-loading');
			document.body.classList.add('theme-loaded');
		}, 100);
	}

	// Start initialization
	init();

	// Add screen reader only class for accessibility
	const srOnlyStyle = document.createElement('style');
	srOnlyStyle.textContent = `
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
	document.head.appendChild(srOnlyStyle);
});

// Export functions for potential external use
window.ThemeSwitcher = {
	setTheme: function (themeName) {
		const event = new CustomEvent('setTheme', {
			detail: { theme: themeName },
		});
		document.dispatchEvent(event);
	},
	getCurrentTheme: function () {
		return localStorage.getItem('selectedTheme') || 'modern';
	},
};
