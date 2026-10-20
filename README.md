# q3po-e2e-fixture

The target repo for q3po's quick-fix-to-RC end-to-end test (claude-bridge `scripts/e2e-rig.sh`, q3po `tests/quick-fix-to-rc.e2e.spec.js`). Each run changes `--accent` in `site/theme.css` and merges the change into an `rc/<vm>/<day>` branch. CI runs on pull requests into `rc/**`.
