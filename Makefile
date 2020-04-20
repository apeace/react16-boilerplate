.PHONY: test
test:
	make test-lib
	make test-components

.PHONY: test-lib
test-lib:
	npx mocha --require ts-node/register src/lib/**/*.test.ts

.PHONY: test-components
test-components:
	npx mochapack --webpack-config=./webpack.test.config.js --mode=development src/components/**/*.test.tsx

.PHONY: run
run:
	npx webpack-dev-server \
		--mode=development

.PHONY: build
build:
	npx webpack \
		--mode=production

.PHONY: fmt
fmt:
	# Write new formatting in place.
	# Don't format package*.json because npm likes to format that.
	npx prettier \
		--write \
		'./**/*.{css,html,js,json,md,scss,ts,tsx,yml,yaml}' \
		'!./**/dist/**' \
		'!./package*.json'
