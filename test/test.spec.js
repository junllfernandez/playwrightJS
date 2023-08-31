const { test, expect } = require("@playwright/test")
const { Homepage } = require("../pageelements/homepage")
const { Menupage } = require("../pageelements/menupage")

test.describe('Visit base url', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL)
  });

  test('Verify home page items are displayed', async ({ page }) => {
    
    const homepage = new Homepage(page)
    // Click main banner
    await expect(homepage.homePageSection).toBeVisible()
    await expect(homepage.hamburgerMenuBtn).toBeVisible()
    await expect(homepage.burgerIcon).toBeVisible()
    await expect(homepage.searchBtn).toBeVisible()
  });

  test('Verify Search functionality', async ({ page }) => {
    
    const homepage = new Homepage(page)
    // Click main banner
    await homepage.homePageSection.click()
    await homepage.searchBtn.click()
    await expect(homepage.searchBox).toBeVisible()
    await homepage.searchBox.fill('double big mac')
    await homepage.searchBox.press('Enter')
    await expect(page.getByRole('link', { name: 'Double Big Mac® | McDonald\'s New Zealand' })).toBeVisible()
  });

  test('Verify rewards page', async ({ page }) => {
    
    const homepage = new Homepage(page)
    const menupage = new Menupage(page)
    // Click main banner
    await homepage.homePageSection.click()
    await homepage.burgerIcon.click()
    await menupage.pickupOption.click()
    await menupage.rewardsSection.scrollIntoViewIfNeeded()
    await menupage.rewardsSlider.click()
    await menupage.rewardsSlider.press('ArrowRight')
    await expect(page.getByText('Cheeseburger 5200 pts')).toBeVisible()
  });
  
});