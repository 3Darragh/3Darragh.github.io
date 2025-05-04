document.addEventListener
(
	'DOMContentLoaded', () => 
	{
		const themeToggle = document.getElementById('theme-toggle');
		const body = document.body;
		
		// Set theme.
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
		
		// Set slider.
		themeToggle.checked = savedTheme === 'dark';
		
		// Toggle theme.
		themeToggle.addEventListener
		(
			'change', () => 
			{
				const newTheme = themeToggle.checked 
					? 'dark' 
					: 'light';
				setTheme(newTheme);
			}
		);
		
		// Log theme.
		console.log(`Saved theme: ${savedTheme}`);
		console.log(`Checkbox state: ${themeToggle.checked}`);
	}
);
