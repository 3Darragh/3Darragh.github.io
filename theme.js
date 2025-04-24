document.addEventListener
(
	'DOMContentLoaded', () => 
	{
		const themeToggle = document.getElementById('theme-toggle');
		const body = document.body;

		//Set theme.
		function setTheme(theme) 
		{
			if (theme === 'dark') 
			{
				body.classList.add('dark-theme');
			} 
			else 
			{
				body.classList.remove('dark-theme');
			}
			localStorage.setItem('theme', theme);
		}

		// Get theme.
		const savedTheme = localStorage.getItem('theme') || 'light';
		setTheme(savedTheme);

		// Toggle theme.
		themeToggle.addEventListener
		('change', () => 
			{
				const currentTheme = localStorage.getItem('theme');
				const newTheme = currentTheme === 'dark' 
					? 'light' 
					: 'dark';
				setTheme(newTheme);
			}
		);
	}
);
