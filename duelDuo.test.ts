
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('test for duel-duo', () => {

    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('choices display after clicking draw', async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(2000)
        const choicesDiv = await driver.findElement(By.id('choices'))
        const displayed = await choicesDiv.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('clicking "Add to Duo" button displays the div with "player-duo" id', async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(2000)
        await driver.findElement(By.xpath('(//button[text()= "Add to Duo"])[1]')).click()
        const playerDuoDiv = await driver.findElement(By.id('player-duo'))
        const displayed = await playerDuoDiv.isDisplayed()
        expect(displayed).toBe(true)
    })
})