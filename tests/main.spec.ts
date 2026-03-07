import { test, expect, chromium } from '@playwright/test';
import { card_reader } from '../helper/helper';
import fs from 'fs/promises';



test('test', async ({ page }) => {

  test.setTimeout(0); // it is turning off timeout. Therefore if loading is late it is waiting.

  await page.goto('https://turbo.az/');        // go to page
  await page.getByRole('link', { name: 'Bütün elanlar' }).click();   // click for all ads

  const PreData = [];     // array to write all data
  
  let page_queue = 1      // it shows which page we are currently scraping

  const paginationArea = page.locator('.products-container > .pagination-container > .pagination > .page');    
  let nextPage = paginationArea.filter({ hasText: `${page_queue}` }); //it shows which page we'll scrap

  while (true){
      
      // await page.waitForLoadState('domcontentloaded');

      await page.waitForTimeout(2000);    // because of network, loading is late often

      if (await nextPage.isVisible()){
        console.log('visible: ', page_queue);

        // SCRAP START
        for (let i = 0; i < 24; i++){
            let area = page.locator('.products-container > .tz-container:has(.products-title)').locator('.products'); 
            let card = area.locator('.products-i').nth(i);

            if (await card.isVisible()){
                let data = await card.locator('.products-i__bottom').textContent();
                PreData.push(data);
            }
            else{
                console.log(`All data has been added to array from page ${page_queue}.`);
                break; // if there is no card, it says there is no any element yet
            }  
          }
          // SCRAP END

          await fs.writeFile('scrapped data.txt', PreData.join('\n'), 'utf-8'); // add to .txt file

        page_queue = page_queue + 1;  // next page number
        nextPage = paginationArea.filter({ hasText: `${page_queue}` });  // next page
        await nextPage.click(); 
    }
    else{
    
      // SCRAP START
      for (let i = 0; i < 24; i++){
          let area = page.locator('.products-container > .tz-container:has(.products-title)').locator('.products'); 
          let card = area.locator('.products-i').nth(i);

          if (await card.isVisible()){
              let data = await card.locator('.products-i__bottom').textContent();
              PreData.push(data);
          }
          else{
              console.log(`All data has been added to array from page ${page_queue}.`);
              break; // if there is no card, it says there is no any element yet
          }  
        }
        // SCRAP END

      await fs.writeFile('scrapped data.txt', PreData.join('\n'), 'utf-8'); // add to .txt file

      console.log('Unvisible: ', page_queue);
      break;
    }      
}

  console.log('Process finished succesfully.');

});

