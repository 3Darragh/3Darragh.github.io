<!-- JS for Light / Dark Themes -->
<script>
	document.addEventListener("DOMContentLoaded", function () 
	{
		const theme_toggle = document.getElementById('theme-toggle');

		if (localStorage.getItem('theme') === 'dark') 
		{
			document.body.classList.add('dark-mode');
			if (theme_toggle) theme_toggle.checked = true;
		}

		if (theme_toggle) 
		{
			theme_toggle.addEventListener('change', function () 
			{
				if (this.checked) 
				{
					document.body.classList.add('dark-mode');
					localStorage.setItem('theme', 'dark');
				} 
				else 
				{
					document.body.classList.remove('dark-mode');
					localStorage.setItem('theme', 'light');
				}
			}
			);
		}
	}
	);
</script>
