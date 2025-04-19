document.addEventListener("DOMContentLoaded", () => 
{
	const themeToggle = document.getElementById("theme-toggle");

	// Apply saved theme from localStorage
	if (localStorage.getItem("theme") === "dark") 
	{
		document.body.classList.add("dark-mode");
		themeToggle.checked = true;
	}

	// Toggle theme and save preference
	themeToggle.addEventListener("change", () => 
	{
		if (themeToggle.checked) 
		{
			document.body.classList.add("dark-mode");
			localStorage.setItem("theme", "dark");
		} 
		else 
		{
			document.body.classList.remove("dark-mode");
			localStorage.setItem("theme", "light");
		}
	}
	);
}
);
