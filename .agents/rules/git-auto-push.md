---
trigger: always_on
description: Automatically stage, commit, and push changes after verifying code is bug-free.
---

# Post-Verification Git Auto-Commit & Push Rule

Whenever completing a feature implementation, bug fix, or code review:
1. **Verify Clean Build/Tests First:** Run appropriate build/verification commands (e.g., `npm run build`, `npm test`) to ensure there are no syntax errors, broken builds, or regression bugs.
2. **Stage and Commit:** Once verification passes cleanly with zero errors/bugs, stage modified and untracked files (`git add .`) and create a descriptive Git commit message following conventional commit standards.
3. **Push to Remote:** Immediately push the committed changes to the current upstream branch (`git push`).
