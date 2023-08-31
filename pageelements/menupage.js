const { expect } = require('@playwright/test');

exports.Menupage = class Menupage {

    constructor(page) {
        this.page = page
        this.homePageSection = page.locator('#promo-section')
        this.pickupOption = page.getByRole('link', { name: 'Pick-up' })
        this.rewardsSection = page.getByText('More points mean more rewards It’s easy to track your points! Check the app to s')
        this.rewardsSlider = page.getByRole('slider')
        
    }
}