.PHONY: fmt
fmt:
	# Write new formatting in place.
	# Don't format package*.json because npm likes to format that.
	npx prettier \
		--write \
		'./**/*.{css,html,js,json,md,scss,ts,tsx,yml,yaml}' \
		'!./**/dist/**' \
		'!./package*.json'
