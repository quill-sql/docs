const observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.type === "childList") {
			try {
				const [path, page] = window.location.pathname.split("/").slice(1);

				// Notebooks
				if (
					path === "components" &&
					[
						"dashboard",
						"chart",
						"table",
						"sql-editor",
						"chart-editor",
						"report-builder",
						"examples",
					].includes(page)
				) {
					const toc = document.querySelector("#table-of-contents");
					if (toc) toc.style.display = "none";
				}
			} catch (error) {
				console.error("Error handling mutation:", error);
			}
		}
	});
});

observer.observe(document.body, { childList: true, subtree: true });
