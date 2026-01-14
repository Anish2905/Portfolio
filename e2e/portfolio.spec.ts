import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for animations to complete
        await page.waitForTimeout(500);
    });

    test('should load the homepage with hero section', async ({ page }) => {
        // Check page title
        await expect(page).toHaveTitle(/Anish Sharma/);

        // Check hero content is visible
        await expect(page.locator('h1')).toContainText('Anish Sharma');

        // Check status badge
        await expect(page.locator('.status-dot')).toContainText('DevOps Engineer');

        // Check main CTA buttons exist
        await expect(page.locator('a[href="#projects"]').first()).toBeVisible();
        await expect(page.locator('a[href="#contact"]').first()).toBeVisible();
    });

    test('should have working navigation links', async ({ page }) => {
        // Check Skills section
        await page.click('a[href="#skills"]');
        await page.waitForTimeout(300);
        await expect(page.locator('#skills')).toBeInViewport();

        // Check Projects section
        await page.click('a[href="#projects"]');
        await page.waitForTimeout(300);
        await expect(page.locator('#projects')).toBeInViewport();

        // Check Contact section
        await page.click('a[href="#contact"]');
        await page.waitForTimeout(300);
        await expect(page.locator('#contact')).toBeInViewport();
    });

    test('should toggle theme between dark and light mode', async ({ page }) => {
        // Emulate dark mode preference and clear localStorage
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.evaluate(() => localStorage.removeItem('theme'));
        await page.reload();
        await page.waitForTimeout(500);

        const themeToggle = page.locator('button[aria-label="Toggle theme"]');
        await expect(themeToggle).toBeVisible();

        // Initially should be dark mode (no .light class)
        await expect(page.locator('html')).not.toHaveClass(/light/);

        // Click to toggle to light mode
        await themeToggle.click();
        await page.waitForTimeout(200);
        await expect(page.locator('html')).toHaveClass(/light/);

        // Click to toggle back to dark mode
        await themeToggle.click();
        await page.waitForTimeout(200);
        await expect(page.locator('html')).not.toHaveClass(/light/);
    });

    test('should have interactive terminal', async ({ page }) => {
        // Scroll to terminal section
        await page.click('a[href="#contact"]');
        await page.waitForTimeout(500);

        // Find and interact with terminal input
        const terminalInput = page.locator('.terminal-input');
        await expect(terminalInput).toBeVisible();

        // Type 'help' command
        await terminalInput.fill('help');
        await terminalInput.press('Enter');
        await page.waitForTimeout(100);

        // Check output contains expected text
        await expect(page.locator('.terminal-output').last()).toContainText('AVAILABLE COMMANDS');

        // Type 'whoami' command
        await terminalInput.fill('whoami');
        await terminalInput.press('Enter');
        await page.waitForTimeout(100);

        // Check output contains profile info
        await expect(page.locator('.terminal-output').last()).toContainText('ANISH SHARMA');
    });

    test('should display all projects', async ({ page }) => {
        await page.click('a[href="#projects"]');
        await page.waitForTimeout(500);

        // Check featured projects are visible
        await expect(page.getByText('CodeRAG')).toBeVisible();
        await expect(page.getByText('CareerFlow')).toBeVisible();
        await expect(page.getByText('Nebula Player')).toBeVisible();
        await expect(page.getByText('PCOSVision')).toBeVisible();

        // Check project cards have links
        const projectCards = page.locator('.project-card');
        await expect(projectCards).toHaveCount(6);
    });

    test('should display all skills categories', async ({ page }) => {
        await page.click('a[href="#skills"]');
        await page.waitForTimeout(500);

        // Check skill categories exist (case insensitive search in text)
        const skillsSection = page.locator('#skills');
        await expect(skillsSection.getByText(/infrastructure/i)).toBeVisible();
        await expect(skillsSection.getByText(/automation/i)).toBeVisible();
        await expect(skillsSection.getByText(/platforms/i)).toBeVisible();
        await expect(skillsSection.getByText(/monitoring/i)).toBeVisible();
    });

    test('should have working social links', async ({ page }) => {
        // Check social icons in hero section
        const socialLinks = page.locator('.social-icon');
        await expect(socialLinks).toHaveCount(4);

        // Check GitHub link has correct href
        const githubLink = page.locator('a[aria-label="GitHub"]');
        await expect(githubLink).toHaveAttribute('href', 'https://github.com/Anish2905');
        await expect(githubLink).toHaveAttribute('target', '_blank');
    });

    test('should have resume button in navbar', async ({ page }) => {
        // Find the resume link by its text content and position in navbar
        const resumeLink = page.locator('nav a[target="_blank"]').filter({ hasText: 'Resume' });
        await expect(resumeLink).toBeVisible();
        await expect(resumeLink).toHaveAttribute('target', '_blank');
    });

    test('should be responsive on mobile', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(300);

        // Hero should still be visible
        await expect(page.locator('h1')).toContainText('Anish Sharma');

        // Bento cards should be visible on mobile
        await expect(page.locator('.bento-card').first()).toBeVisible();

        // Theme toggle should still be visible
        await expect(page.locator('button[aria-label="Toggle theme"]')).toBeVisible();
    });
});
