const {Builder, Capabilities, By}  = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=>{
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

// this function will test adding a movie, crossing it off, and deleting it
test('cross out movie, uncross movie and delete movie', async()=>{
    const searchTerm = 'Test'
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Test')
    await driver.sleep(2000)
// this will input the text into our input box

    const movieButton = await driver.findElement(By.css('button'))
    await movieButton.click()
    await driver.sleep(2000)
// this will add a movie to our list

    const movieCross = await driver.findElement(By.xpath('//li/span'))
    await movieCross.click()
    await driver.sleep(2000)
// this will cross of the movie

    await movieCross.click()
    await driver.sleep(2000)
// this will add the movie back

    const deleteBtn = await driver.findElement(By.xpath("//*[text()='x']"))
    await deleteBtn.click()
    await driver.sleep(2000)
 // this will delete that movie


})