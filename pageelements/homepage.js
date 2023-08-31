const { expect } = require('@playwright/test');

exports.Homepage = class Homepage {

    constructor(page) {
        this.page = page
        this.homePageSection = page.locator('#promo-section')
        this.hamburgerMenuBtn = page.locator('#header-navigation div').nth(1)
        this.burgerIcon = page.locator('.burger-icon > .container').first()
        this.searchBtn = page.locator('#social-nav div').filter({ hasText: 'Search' })
        this.searchBox = page.getByPlaceholder('Search everything')

        //Menu pane
        this.menuMenuOption = page.getByRole('link', { name: 'Menu', exact: true })
        this.menuTrendingOption = page.getByRole('link', { name: 'Trending' })
        this.menuCareersOption = page.locator('#header-navigation-overlay').getByRole('link', { name: 'Careers' })
        this.menuHelpOption = page.locator('#header-navigation-overlay').getByRole('link', { name: 'Help' })
        this.menuAboutUsOption = page.getByRole('link', { name: 'About Us' })
        this.contactUsOption = page.getByRole('link', { name: 'What are my options?' });  
    }
}